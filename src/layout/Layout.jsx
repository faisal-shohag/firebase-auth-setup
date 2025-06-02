import { Outlet } from "react-router";
import Navbar from "../components/Navbar";
import { Toaster } from "react-hot-toast";

const Layout = () => {
    return (
        <div>
            <Navbar/>
           <div className="max-w-6xl mx-auto">
             <Outlet/>
           </div>
            <Toaster/>
        </div>
    );
};

export default Layout;