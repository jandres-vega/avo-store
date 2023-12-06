import {FC} from "react";
import {Children} from "@/types/Children/Children";
import NavBar from "@/components/NavBar/NavBar";
import Footer from "@/components/Footer/Footer";

const Layout:FC<Children> = ({children}) => {
    return (
        <>
            <NavBar />
            {children}
            <Footer />
        </>
    );
};

export default Layout;
