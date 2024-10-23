import React from 'react';
import './About.css'; // Make sure to create a corresponding CSS file for styling
import Logo2 from './Images/Logo2.png'; // Replace with the actual path of your about image
import Header from './Header';
import Footer from './Footer';

const About = () => {
    return (
        <div>
            <Header/>
            <div className="pt-20" style={{paddingTop:"70px"}}>
                <h1 className="about-title">About Us</h1>
                <div className="about-content" style={{}}>
                    <div className="about-image">
                        <img src={Logo2} alt="About Us" className="img-fluid" />
                    </div>
                    <div className="about-description" style={{paddingRight:"20px", paddingLeft:"0"}}>
                        <h2>Welcome to Food Mania!</h2>
                        <p>
                            At Food Mania, we believe in providing our guests with an unparalleled experience that combines luxury, comfort, and delicious culinary delights. Nestled in the heart of the city, our hotel offers a perfect retreat for travelers seeking relaxation and adventure.
                        </p>
                        <p>
                            Our mission is to create memorable moments for our guests through exceptional service, exquisite dining, and luxurious accommodations. Whether you are here for a business trip, a family vacation, or a romantic getaway, we have something special for everyone.
                        </p>
                        <h2>Our Services</h2>
                        <ul>
                            <li>Luxurious Rooms: Our accommodations are designed to provide you with the utmost comfort and relaxation.</li>
                            <li>Fine Dining: Indulge in a culinary journey with our gourmet restaurant featuring a diverse menu.</li>
                            <li>Event Spaces: From weddings to corporate meetings, our versatile event spaces cater to all occasions.</li>
                            <li>Personalized Service: Our dedicated staff is committed to making your stay unforgettable.</li>
                        </ul>
                        <h2>Why Choose Us?</h2>
                        <p>
                            With a focus on guest satisfaction and attention to detail, Food Mania stands out as a premier destination. Our beautiful ambiance, delicious food, and friendly staff create a welcoming atmosphere that will make you feel right at home.
                        </p>
                        <p>
                            We invite you to experience the best that hospitality has to offer. Join us at Food Mania for an unforgettable stay!
                        </p>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
};

export default About;