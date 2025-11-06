import { Outlet } from "react-router-dom";
import  Header  from "./headerComponent/Header";
import Footer from "./footerComponent/Footer"

export function Layout() {
    return(
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    )
}