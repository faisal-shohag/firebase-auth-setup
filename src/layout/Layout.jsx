import { Outlet } from "react-router";
import Navbar from "../components/Navbar";
import { Toaster } from "react-hot-toast";

const Layout = () => {
    return (
        <div>
            <Navbar/>
            <Outlet/>

            <Toaster/>
        </div>
    );
};

export default Layout;