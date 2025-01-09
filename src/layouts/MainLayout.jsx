import Navbar from '@/components/shared/Navbar';
import Footer from '@/components/shared/Footer';
import { Outlet, useLocation } from 'react-router-dom';

const MainLayout = () => {
    const { pathname } = useLocation()

    const isLogin = pathname.includes("login") || pathname.includes("signup")
    return (
        <div className=''>
            {isLogin || <nav className=''>
                <Navbar></Navbar>
            </nav>}
            <div className=''>
                <Outlet></Outlet>
            </div>

            {
                isLogin ||
                <footer >
                    <Footer></Footer>
                </footer>
            }
            
        </div>
    );
};

export default MainLayout;