import useAuth from "@/hooks/useAuth";
import toast from "react-hot-toast";
import { FaIcons } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";

const FoodCard = ({ item }) => {
    const { user } = useAuth()
    const navigate = useNavigate()
    const location = useLocation()

    const { image, price, recipe, name } = item

    const handleAddToCart = (food) => {
        if (user && user.email) {
            // todo: send cart item to the database
        } else {
            toast(
                (t) => (
                    <div className='flex gap-2 items-center'>
                        <div>You're not logged in!</div>

                        <div>
                            <button
                                className='bg-red-500 text-white text-sm font-medium px-3 py-1 rounded-full mr-1 hover:bg-red-600'
                                onClick={() => {
                                    // send the user to the login page
                                    navigate("/login", {state: {from: location.pathname}})
                                }}>Login</button>
                            <button
                                className='bg-green-500 text-white text-sm font-medium px-3 py-1 rounded-full hover:bg-green-600'
                                onClick={() => toast.dismiss()}>Cancel</button>
                        </div>
                    </div>
                ));
        }
    }
    return (
        <div className="max-w-sm rounded-lg overflow-hidden shadow-md bg-white">
            {/* Image Section */}
            <div className="relative">
                <img
                    src={image}
                    alt={name}
                    className="w-full h-48 object-cover"
                />
                <span className="absolute top-2 right-2 bg-black text-white text-sm font-medium px-2 py-1 rounded">
                    {price}$
                </span>
            </div>

            {/* Content Section */}
            <div className="p-4">
                <h3 className="text-lg font-bold text-gray-800">{name}</h3>
                <p className="text-sm text-gray-600 mt-1 h-16 overflow-auto">
                    {recipe}
                </p>
                <button
                    onClick={() => handleAddToCart(item)}
                    className="mt-4 px-4 py-2 w-full bg-gray-100 text-[#BB8506] text-sm font-semibold rounded hover:bg-[#111827]
                    border-b-4 border-yellow-500 transition-all duration-150 ease-in active:scale-95"
                >
                    ADD TO CART
                </button>
            </div>
        </div>
    );
};

export default FoodCard;
