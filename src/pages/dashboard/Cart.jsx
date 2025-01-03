import SectionTitle from "@/components/SectionTitle";
import useAxiosSecure from "@/hooks/useAxiosSecure";
import useCart from "@/hooks/useCart";
import toast from "react-hot-toast";
import { FaTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";


const Cart = () => {
    const [cart, refetch] = useCart()
    const totalPrice = cart.reduce((total, item) => total + item.price, 0)
    const axiosSecure = useAxiosSecure()


    
    const deleteASpecificItem = (id)=>{
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {
              axiosSecure.delete(`/carts/${id}`)
              .then(res=>{
                if(res.data.acknowledged)
                {
                    Swal.fire({
                        title: "Deleted",
                        text: "Your file has been deleted.",
                        icon: "success"
                    })
                    refetch()
                }

              })
            }
          });
    }
    



    return (
        <div className="">
            <SectionTitle heading={"MANAGE ALL USERS"} subHeading={"---How many??---"}></SectionTitle>
            <section className="mx-36 my-24">
                <nav className=" flex items-center justify-between">
                    <h1 className="text-4xl ">Total Users: {cart.length}</h1>
                    <h1 className="text-4xl ">Total Price: {totalPrice}$</h1>
                    <button className="btn btn-primary">Pay</button>
                </nav>

                <div className="overflow-x-auto">
                    <table className="table w-full">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>
                                    #
                                </th>
                                <th>Image</th>
                                <th>Name</th>
                                <th>Price</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}
                            {cart.map((item, idx)=> 
                            <tr key={item._id}>
                                <th>{idx+1}</th>
                                <td>
                                    <div className="flex items-center gap-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle h-12 w-12">
                                                <img
                                                    src={item.image}
                                                    alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                        {/* <div>
                                            <div className="font-bold">Hart Hagerty</div>
                                            <div className="text-sm opacity-50">United States</div>
                                        </div> */}
                                    </div>
                                </td>
                                <td>
                                    Recipe Name: {item.name}
                                </td>
                                <td>{item.price}$</td>
                                <th>
                                    <button onClick={()=> deleteASpecificItem(item._id)} className="btn btn-ghost btn-xs">
                                        <FaTrashAlt className="text-red-500"></FaTrashAlt>
                                    </button> 
                                </th>
                            </tr>
                        )}
                        </tbody>
                    </table>
                </div>
            </section>
        </div>
    );
};

export default Cart;