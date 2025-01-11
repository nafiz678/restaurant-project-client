import useAuth from "@/hooks/useAuth";
import useAxiosSecure from "@/hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";


const PaymentHistory = () => {
    const axiosSecure = useAxiosSecure()
    const { user } = useAuth()

    const { data: payments=[] } = useQuery({
        queryKey: ["payments", user.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`payments/${user.email}`)
            return res.data
        }
    })

    return (
        <div className="md:p-20">
            <h2 className="text-3xl">Total Payments: {payments?.length}</h2>
            <div className="overflow-x-auto ">
                <table className="table table-zebra">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Transaction Id</th>
                            <th>Price</th>
                            <th>Favorite Color</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {payments.map((item, idx)=> 
                        <tr key={item._id}>
                            <th>{idx+1}</th>
                            <td>{item.transactionId}</td>
                            <td>${item.price}</td>
                            <td>{new Date(item.date).toLocaleDateString()}</td>
                        </tr>)}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default PaymentHistory;