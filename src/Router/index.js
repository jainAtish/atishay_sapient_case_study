import React from 'react'
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from "react-router-dom";
// import {
//     Switch,
//     Route
// } from "react-router";
import Home from '../components/Home';
import Login from '../components/auth/Login';
import Register from '../components/auth/Register';
import Footer from '../common/Footer';
import Header from '../common/Header';

function RouterNavigation() {
    return (
        <Router>
            <div>
                <div>
                    <Header />

                    <Routes>
                        <Route path="/" element={<Login />} />
                        <Route path="/Register" element={<Register />} />
                        <Route path="/Login" element={<Login />} />
                        <Route path="/Home" element={<Home />} />
                    </Routes>
                </div>
                <Footer />
            </div>
        </Router>
    )
}

export default RouterNavigation