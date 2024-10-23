import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import './OrderFood.css';
import Lunch3 from './Images/food_images/Lunch3.jpg'
import FastFood1 from './Images/food_images/FastFood1.jpg'
import Drinks1 from './Images/food_images/Drinks1.jpg'

// OrderFood component with search functionality
const OrderFood = () => {

    const handleRedirect = (url) => {
        setTimeout(() => {
            window.location.href = url; // Redirect to the specific page
        }, 200); // 200ms delay
    };

    return (
        <div>
            <Header />
            <div style={{ marginTop: "100px" }}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-6 mb-4">
                            <div className="card h-100">
                                <div className="team-item position-relative">
                                    <div className="position-relative overflow-hidden rounded">
                                        <img className="img-fluid w-100" src={Lunch3} alt="" style={{ height: "400px", borderRadius: "5px" }} />
                                    </div>
                                </div>
                                <div className="card-body">
                                    <h5 className="card-title">Delightful Lunch</h5>
                                    <p className="card-text">
                                        Savor a variety of delectable dishes, freshly prepared with the finest ingredients, at our lunch service. Whether you're in the mood for local favorites or international cuisine, our menu caters to every palate. Enjoy your meal in a relaxed and elegant setting, perfect for unwinding during your day.
                                    </p>
                                    <button className="btn custom-btn" onClick={() => handleRedirect('/Lunch')}>Lunch Menu</button>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 mb-4">
                            <div className="card h-100">
                                <div className="team-item position-relative">
                                    <div className="position-relative overflow-hidden rounded">
                                        <img className="img-fluid w-100" src={FastFood1} alt="" style={{ height: "400px", borderRadius: "5px" }} />
                                    </div>
                                </div>
                                <div className="card-body">
                                    <h5 className="card-title">Tasty Fast Food</h5>
                                    <p className="card-text">
                                        Craving something quick and delicious? Our fast food menu offers a selection of popular favorites like burgers, fries, pizzas, and more! Perfect for when you're on the go or simply want a casual meal, our fast food items are prepared fresh to ensure maximum flavor in every bite.
                                    </p>
                                    <button className="btn custom-btn" onClick={() => handleRedirect('/FastFood')}>Grab a Quick Bite</button>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 mb-4">
                            <div className="card h-100">
                                <div className="team-item position-relative">
                                    <div className="position-relative overflow-hidden rounded">
                                        <img className="img-fluid w-100" src={Drinks1} alt="" style={{ height: "400px", borderRadius: "5px" }} />
                                    </div>
                                </div>
                                <div className="card-body">
                                    <h5 className="card-title">Refreshing Drinks and Ice creams</h5>
                                    <p className="card-text">
                                        Quench your thirst with our wide range of refreshing drinks and Ice creams! From fresh juices and smoothies to classic chocobars and candies, we've got something for everyone. Whether you need a refreshing beverage with your meal or a relaxing drink by itself, our drinks menu will hit the spot.
                                    </p>
                                    <button className="btn custom-btn" onClick={() => handleRedirect('/IceCreamDrinks')}>Sip & Refresh</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default OrderFood;