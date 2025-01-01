import { Link } from "react-router-dom";
import { ModeToggle } from "../dark-toggle";
import { useContext } from "react";
import { AuthContext } from "@/provider/AuthProvider";


const Navbar = () => {
    const { user, logOut } = useContext(AuthContext)
    const navLinks = <>

        <li><Link to={"/"}>Home</Link></li>
        <li><Link to={"/menu"}>Our menu</Link></li>
        <li><Link to={"/order/salad"}>Order Food</Link></li>
    </>

    const handleLogout = () =>{
        logOut()
        .then(res=>{
            console.log(res.user)
        })
        .catch(err=>{
            console.log(err)
        })
    }
    return (
        <div className="navbar fixed z-10 bg-black/30 ">
            <div className="navbar-start text-white">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        {navLinks}
                    </ul>
                </div>
                <a href="/" className="flex-col flex justify-center items-center">
                    <p className="text-2xl uppercase tracking-[0.4rem]">Bistro boss</p>
                    <p className="tracking-[0.7rem]">RESTAURANT</p>
                </a>
            </div>
            <div className="navbar-center hidden text-white lg:flex">
                <ul className="menu  bg-none menu-horizontal px-1">
                    {navLinks}
                </ul>
            </div>
            <div className="navbar-end">
                <button className="mr-20 text-white ">
                    {
                        user
                            ?
                            <>
                                <Link onClick={handleLogout}>Logout</Link>
                            </>
                            :
                            <>
                                <Link to={"/login"}>Login</Link>
                            </>
                    }
                </button>

                {/* <div  className="top-4 right-4 fixed">
                <ModeToggle></ModeToggle>
                </div> */}
            </div>
        </div>
    );
};

export default Navbar;