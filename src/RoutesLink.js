import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { useAuth0 } from '@auth0/auth0-react';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import OrderFood from './OrderFood';
import Lunch from './Lunch';
import FastFood from './FastFood';
import IceCreamDrinks from './IceCreamDrinks';
import Cart from './Cart';
import BookRoom from './BookRoom';
import BookTable from './BookTable';
import RegularRoom from './RegularRooms';
import StandardRoom from './StandardRooms';
import LuxuriousRoom from './LuxuriousRooms';
import BookingDetails from './BookingDetails';
import SignIn from './SignIn';
import Login from './Login';
import { ClipLoader } from "react-spinners";

const PrivateRoute = ({ element }) => {
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    const isSignedIn = localStorage.getItem('isSignedIn');

    return isLoggedIn || isSignedIn ? element : <Navigate to="/Login" />;
};

// Public Route - Redirect to home if already logged in
const AuthRoute = ({ element }) => {
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    const isSignedIn = localStorage.getItem('isSignedIn');
    return !isLoggedIn || !isSignedIn ? element : <Navigate to="/" />;
};

const RoutesLink = () => {
    const { loginWithRedirect, isAuthenticated, isLoading } = useAuth0();

    if (isLoading) {
        return <div className="loader" style={{marginTop:"20%"}}>
            <ClipLoader color="#36d7b7" size={100} />
        </div>
    }

    // if (!isAuthenticated) {
    //     loginWithRedirect();
    //     return null; // Prevent rendering until authenticated
    // }

    return (
        <div>
            <Router>
                <Routes>
                    <Route path="/" element={<PrivateRoute element={<Home />} />} />
                    <Route path="/About" element={<PrivateRoute element={<About />} />} />
                    <Route path="/Contact" element={<PrivateRoute element={<Contact />} />} />
                    <Route path="/orderFood" element={<PrivateRoute element={<OrderFood />} />} />
                    <Route path="/Lunch" element={<PrivateRoute element={<Lunch />} />} />
                    <Route path="/FastFood" element={<PrivateRoute element={<FastFood />} />} />
                    <Route path="/IceCreamDrinks" element={<PrivateRoute element={<IceCreamDrinks />} />} />
                    <Route path="/cart/:userEmail" element={<PrivateRoute element={<Cart />} />} />
                    <Route path="/BookRoom" element={<PrivateRoute element={<BookRoom />} />} />
                    <Route path="/RegularRoom" element={<PrivateRoute element={<RegularRoom />} />} />
                    <Route path="/StandardRoom" element={<PrivateRoute element={<StandardRoom />} />} />
                    <Route path="/LuxuriousRoom" element={<PrivateRoute element={<LuxuriousRoom />} />} />
                    <Route path="/BookingDetails/:userEmail" element={<PrivateRoute element={<BookingDetails />} />} />
                    <Route path="/BookTable" element={<PrivateRoute element={<BookTable />} />} />
                    <Route path="/SignIn" element={<AuthRoute element={<SignIn />} />} />
                    <Route path="/Login" element={<AuthRoute element={<Login />} />} />
                </Routes>
            </Router>
        </div>
    );
}

export default RoutesLink;