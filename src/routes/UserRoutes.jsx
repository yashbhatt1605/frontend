import { Routes, Route } from "react-router-dom";

import Home from "../pages/user/Home";
import Cars from "../pages/user/Cars";
import Bikes from "../pages/user/Bikes";
import CarDetails from "../pages/user/CarDetails";
import BikeDetails from "../pages/user/BikeDetails";
import Brands from "../pages/user/Brands";
import Categories from "../pages/user/Categories";
import Search from "../pages/user/Search";
import Wishlist from "../pages/user/Wishlist";
import Cart from "../pages/user/Cart";
import Checkout from "../pages/user/Checkout";
import MyOrders from "../pages/user/MyOrders";
import Profile from "../pages/user/Profile";
import Contact from "../pages/user/Contact";
import About from "../pages/user/About";
import NotFound from "../pages/user/NotFound";

const UserRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cars" element={<Cars />} />
            <Route path="/bikes" element={<Bikes />} />
            <Route path="/car/:id" element={<CarDetails />} />
            <Route path="/bike/:id" element={<BikeDetails />} />
            <Route path="/brands" element={<Brands />} />
            <Route path="/categories" element={<Categories />} />
            <Route path="/search" element={<Search />} />
            <Route path="/wishlist" element={<Wishlist />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/orders" element={<MyOrders />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    );
};

export default UserRoutes;