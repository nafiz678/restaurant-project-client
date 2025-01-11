import useAuth from "@/hooks/useAuth";
import useAxiosSecure from "@/hooks/useAxiosSecure";
import useCart from "@/hooks/useCart";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const CheckoutForm = () => {
    const navigate = useNavigate()
    const [error, setError] = useState("")
    const [clientSecret, setClientSecret] = useState("")
    const [transactionId, setTransactionId] = useState("")
    const stripe = useStripe()
    const elements = useElements()
    const axiosSecure = useAxiosSecure()
    const [cart, refetch] = useCart()
    const { user } = useAuth()
    const totalPrice = cart.reduce((total, item) => total + item.price, 0)

    useEffect(() => {
        if(totalPrice> 0) {
            axiosSecure.post("/create-payment-intent", { price: totalPrice })
            .then(res => {
                console.log(res.data.clientSecret);
                setClientSecret(res.data.clientSecret)
            })
        }
    }, [axiosSecure, totalPrice])

    const handleSubmit = async (e) => {
        e.preventDefault()

        if (!stripe || !elements) {
            // Stripe.js has not loaded yet. Make sure to disable
            // form submission until Stripe.js has loaded.
            return;
        }
        const card = elements.getElement(CardElement)
        if (card === null) {
            return;
        }
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: "card",
            card
        })
        if (error) {
            console.log("payment error:", error)
            setError(error.message)
        } else {
            console.log("payment method:", paymentMethod)
            setError("")
        }

        // confirm payment
        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: card,
                billing_details: {
                    email: user?.email || "Anonymous",
                    name: user?.displayName || "Anonymous"
                }
            }
        })

        if (confirmError) {
            console.log("Confirm error", confirmError)
        } else {
            console.log("Confirm intent", paymentIntent)
            if (paymentIntent.status === "succeeded") {
                console.log("Transaction Id: ", paymentIntent.id)
                setTransactionId(paymentIntent.id);

                // now save the payment in the database
                const payment = {
                    email: user.email,
                    price: totalPrice,
                    date: new Date(), //convert this time into utc format for that use moment js
                    cartIds: cart.map(item => item._id),
                    menuItemIds: cart.map(item => item.menuId),
                    status: "pending",
                    transactionId: paymentIntent.id,
                }
                const res = await axiosSecure.post("/payments", payment)
                console.log("payment saved", res.data);
                refetch()
                if (res.data.paymentResult.insertedId) {
                    Swal.fire({
                        title: "Payment Successful",
                        text: "Thank you for your order.",
                        icon: "success",
                        timer: 1500
                    })
                    navigate("/dashboard/paymentHistory")
                }
            }
        }

    }



    return (
        <form className="p-20" onSubmit={handleSubmit}>
            <CardElement
                options={{
                    style: {
                        base: {
                            fontSize: '16px',
                            color: '#424770',
                            '::placeholder': {
                                color: '#aab7c4',
                            },
                        },
                        invalid: {
                            color: '#9e2146',
                        },
                    },
                }}
            />
            <button className="btn btn-primary btn-sm" type="submit" disabled={!stripe || !clientSecret}>
                Pay
            </button>
            <p className="text-red-500">{error}</p>
            {transactionId && <p className="text-green-500 ">Transaction Id: {transactionId}</p>}
        </form>
    );
};

export default CheckoutForm;