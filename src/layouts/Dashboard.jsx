import React from 'react';
import { FaAddressCard, FaCalendar, FaHome, FaList, FaShoppingCart } from 'react-icons/fa';
import { NavLink, Outlet } from 'react-router-dom';
import { IoMdMenu } from "react-icons/io";
import useCart from '@/hooks/useCart';


const Dashboard = () => {
    const [cart] = useCart()
    return (
        <div className='flex'>
            {/* side bar */}
            <div className="w-64 min-h-screen bg-[#D1A054]">
                <ul className="menu p-4" >
                    
                    <li className='text-xl'><NavLink to={"/dashboard/userHome"}> <FaHome></FaHome> Admin Home</NavLink></li>

                    <li className='text-xl'><NavLink to={"/dashboard/reservation"}> <FaCalendar></FaCalendar> Reservation</NavLink></li>
                    
                    <li className='text-xl'><NavLink to={"/dashboard/cart"}> <FaShoppingCart></FaShoppingCart>My cart ({cart.length})</NavLink></li>

                    <li className='text-xl'><NavLink to={"/dashboard/review"}> <FaAddressCard></FaAddressCard>Add a Review</NavLink></li>

                    <li className='text-xl'><NavLink to={"/dashboard/bookings"}> <FaList></FaList>My bookings</NavLink></li>

                    <div className="divider"></div>

                    <li className='text-xl'><NavLink to={"/"}> <FaHome></FaHome>Home</NavLink></li>

                    <li className='text-xl'><NavLink to={"/order/salad"}> <IoMdMenu></IoMdMenu>All Menu</NavLink></li>

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