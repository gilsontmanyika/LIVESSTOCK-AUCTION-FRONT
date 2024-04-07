import { createBrowserRouter } from "react-router-dom";
import Layout from "../Components/Layout/Layout";
import Auctions from "../pages/Auctions";
import Directions from "../pages/Directions";
import About from "../pages/About";
import Browsing from "../pages/Browsing"
import Listing from "../pages/Listing"
import SignIn from "../pages/SignIn"

const router = createBrowserRouter([
    { element: <Layout />, index: true, path: "/" },
    { element: <Auctions />, path: "/auctions" },
    { element: <About />, path: "/about" },
    { element: <Directions />, path: "/directions" },
    { element: <Browsing />, path: "/browsing" },
    { element: <Listing />, path: "/listing" },
    {element: <SignIn/>, path: "/signin"},
])


export default router;