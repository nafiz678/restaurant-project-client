import { FaAddressCard, FaBook, FaCalendar, FaHome, FaInbox, FaList, FaListUl, FaShoppingCart, FaUsers, FaUtensils } from 'react-icons/fa';
import { NavLink, Outlet } from 'react-router-dom';
import { IoMdMenu } from "react-icons/io";
import useCart from '@/hooks/useCart';
import useAdmin from '@/hooks/useAdmin';


const Dashboard = () => {
    const [cart] = useCart()
    // todo: get isAdmin value from the data base 
    const [isAdmin] = useAdmin()
    return (
        <div className='flex'>
            {/* side bar */}
            <div className="w-64 min-h-screen bg-[#D1A054]">
                <ul className="menu p-4" >

                    {
                        isAdmin ?
                            <>
                                <li className='text-xl'><NavLink to={"/dashboard/adminHome"}> <FaHome></FaHome> Admin Home</NavLink></li>

                                <li className='text-xl'><NavLink to={"/dashboard/addItems"}> <FaUtensils></FaUtensils> Add Items</NavLink></li>

                                <li className='text-xl'><NavLink to={"/dashboard/manageItems"}> <FaListUl></FaListUl>Manage Items</NavLink></li>

                                <li className='text-xl'><NavLink to={"/dashboard/bookings"}> <FaBook></FaBook>Manage bookings</NavLink></li>

                                <li className='text-xl'><NavLink to={"/dashboard/users"}> <FaUsers></FaUsers>All Users</NavLink></li>
                            </>
                            :
                            <>
                                <li className='text-xl'><NavLink to={"/dashboard/userHome"}> <FaHome></FaHome> User Home</NavLink></li>

                                <li className='text-xl'><NavLink to={"/dashboard/reservation"}> <FaCalendar></FaCalendar> Reservation</NavLink></li>

                                <li className='text-xl'><NavLink to={"/dashboard/cart"}> <FaShoppingCart></FaShoppingCart>My cart ({cart.length})</NavLink></li>

                                <li className='text-xl'><NavLink to={"/dashboard/review"}> <FaAddressCard></FaAddressCard>Add a Review</NavLink></li>

                                <li className='text-xl'><NavLink to={"/dashboard/bookings"}> <FaList></FaList>My bookings</NavLink></li>
                            </>
                    }

                    {/* shared nav link */}
                    <div className="divider"></div>

                    <li className='text-xl'><NavLink to={"/"}> <FaHome></FaHome>Home</NavLink></li>

                    <li className='text-xl'><NavLink to={"/order/salad"}> <IoMdMenu></IoMdMenu>Menu</NavLink></li>

                    <li className='text-xl'><NavLink to={"/order/contact"}> <FaInbox></FaInbox>Contact</NavLink></li>

                </ul>
            </div>
            {/* dashboard content */}
            <div className='flex-1 bg-[#F6F6F6]'>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;