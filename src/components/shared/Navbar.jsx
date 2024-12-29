import { ModeToggle } from "../dark-toggle";


const Navbar = () => {
    const navLinks = <>

        <li><a>Item 1</a></li>
        <li><a>Item no 4</a></li>
        <li><a>Item 3</a></li>

    </>
    return (
        <div className="navbar">
            <div className="navbar-start">
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
            <div className="navbar-center hidden lg:flex">
                <ul className="menu  bg-none menu-horizontal px-1">
                {navLinks}
                </ul>
            </div>
            <div className="navbar-end">
                <ModeToggle></ModeToggle>
            </div>
        </div>
    );
};

export default Navbar;