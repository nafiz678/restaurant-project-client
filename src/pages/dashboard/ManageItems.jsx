import SectionTitle from "@/components/SectionTitle";
import Loader from "@/components/shared/Loader";
import useAxiosSecure from "@/hooks/useAxiosSecure";
import useMenu from "@/hooks/useMenu";
import { FaTrashAlt, FaUpload } from "react-icons/fa";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const ManageItems = () => {
    const [menu, loading, refetch] = useMenu();
    const axiosSecure = useAxiosSecure()


    const deleteASpecificItem = (item) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then(async (result) => {
            if (result.isConfirmed) {

                const res = await axiosSecure.delete(`/menu/${item._id}`)
                if(res.data.deletedCount > 0){
                    // refetch  the data to update the ui
                    refetch()
                    Swal.fire({
                        title: "Deleted!",
                        text: `${item.name} has been deleted.`,
                        icon: "success",
                        timer: 1500
                    });
                }
                
            }
        });
    }

    if(loading){
        return <Loader></Loader>
    }


    return (
        <div>
            <SectionTitle heading={"MANAGE ALL ITEMS"} subHeading={"---Hurry Up!---"}></SectionTitle>

            <div>
                <div className="overflow-x-auto md:p-20">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Image</th>
                                <th>Name</th>
                                <th>Price</th>
                                <th>Update</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}
                            {menu.map((item, idx) =>
                                <tr key={item._id}>
                                    <th>
                                        {idx + 1}
                                    </th>
                                    <td>
                                        <div className="flex items-center gap-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle h-12 w-12">
                                                    <img
                                                        src={item.image}
                                                        alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        {item.name}
                                    </td>
                                    <td className="text-left">${item.price}</td>
                                    <th>
                                        <Link to={`/dashboard/updateItem/${item._id}`} className="btn btn-ghost btn-md">
                                            <FaUpload className="text-orange-500"></FaUpload>
                                        </Link>
                                    </th>
                                    <th>
                                        <button onClick={() => deleteASpecificItem(item)} className="btn btn-ghost btn-md">
                                            <FaTrashAlt className="text-red-500"></FaTrashAlt>
                                        </button>
                                    </th>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default ManageItems;