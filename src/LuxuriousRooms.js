import React from 'react';
import Header from './Header';
import Footer from './Footer';
import './OrderFood.css';
import './RegularRooms.css'
import LuxuriousRoom2 from './Images/hotel_rooms_images/LuxuriousRoom2.jpg';
import LuxuriousRoom3 from './Images/hotel_rooms_images/LuxuriousRoom3.jpg';
import LuxuriousRoom4 from './Images/hotel_rooms_images/LuxuriousRoom4.jpg';
import LuxuriousRoom5 from './Images/hotel_rooms_images/LuxuriousRoom5.jpg';
import LuxuriousRoom6 from './Images/hotel_rooms_images/LuxuriousRoom6.jpg';
import LuxuriousRoom7 from './Images/hotel_rooms_images/LuxuriousRoom7.jpg';
import LuxuriousRoom8 from './Images/hotel_rooms_images/LuxuriousRoom8.jpg';

const StandardRoom = () => {
    return (
        <div>
            <Header />
            <div className="room-container">
                {/* Room Title */}
                <h1 className="room-title">Luxurious Room</h1>

                {/* Image */}
                <div id="carouselExampleCaptions" className="carousel slide">
                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active visually-hidden" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" className='visually-hidden' data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" className='visually-hidden' data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                        <button type="button" className='visually-hidden' data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button>
                        <button type="button" className='visually-hidden' data-bs-target="#carouselExampleCaptions" data-bs-slide-to="4" aria-label="Slide 5"></button>
                        <button type="button" className='visually-hidden' data-bs-target="#carouselExampleCaptions" data-bs-slide-to="5" aria-label="Slide 6"></button>
                        <button type="button" className='visually-hidden' data-bs-target="#carouselExampleCaptions" data-bs-slide-to="6" aria-label="Slide 7"></button>
                    </div>
                    <div className="carousel-inner" style={{ maxWidth: '800px', margin: 'auto' }}>
                        <div className="carousel-item active">
                            <img src={LuxuriousRoom2} className="d-block w-100" alt="Regular Room 1" style={{ maxHeight: '450px', objectFit: 'cover' }} />
                        </div>
                        <div className="carousel-item">
                            <img src={LuxuriousRoom3} className="d-block w-100" alt="Regular Room 2" style={{ maxHeight: '450px', objectFit: 'cover' }} />
                        </div>
                        <div className="carousel-item">
                            <img src={LuxuriousRoom4} className="d-block w-100" alt="Regular Room 3" style={{ maxHeight: '450px', objectFit: 'cover' }} />
                        </div>
                        <div className="carousel-item">
                            <img src={LuxuriousRoom5} className="d-block w-100" alt="Regular Room 3" style={{ maxHeight: '450px', objectFit: 'cover' }} />
                        </div>
                        <div className="carousel-item">
                            <img src={LuxuriousRoom6} className="d-block w-100" alt="Regular Room 3" style={{ maxHeight: '450px', objectFit: 'cover' }} />
                        </div>
                        <div className="carousel-item">
                            <img src={LuxuriousRoom7} className="d-block w-100" alt="Regular Room 3" style={{ maxHeight: '450px', objectFit: 'cover' }} />
                        </div>
                        <div className="carousel-item">
                            <img src={LuxuriousRoom8} className="d-block w-100" alt="Regular Room 3" style={{ maxHeight: '450px', objectFit: 'cover' }} />
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon bg-dark" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                        <span className="carousel-control-next-icon bg-dark" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>

                {/* Highlights */}
                <div className="room-section">
                    <div className="section-header">
                        <span className="icon">&#9733;</span>
                        <h2 className="section-title">Room Highlights</h2>
                        <div className="underline"></div>
                    </div>
                    <ul className="highlight-list">
                        <li><span>&#10003;</span> King-sized bed with luxury linens</li>
                        <li><span>&#10003;</span> Private balcony with stunning views</li>
                        <li><span>&#10003;</span> High-end entertainment system</li>
                        <li><span>&#10003;</span> Jacuzzi and rain shower in bathroom</li>
                        <li><span>&#10003;</span> Complimentary gourmet snacks and drinks</li>
                        <li><span>&#10003;</span> Personalized concierge service</li>
                    </ul>
                </div>

                {/* Location */}
                {/* <div className="room-section">
                    <div className="section-header">
                        <span className="icon">&#9733;</span>
                        <h2 className="section-title">Location</h2>
                        <div className="underline"></div>
                    </div>
                    <p className="location-description">
                        Our luxurious room is located in a prime area of the city, offering breathtaking views and easy access to high-end shopping, dining, and entertainment.
                    </p>
                    <p className="location-address">Address: 123 Luxury Lane, Upscale District, ZIP 00000</p>
                </div> */}

                {/* Facilities */}
                <div className="room-section">
                    <div className="section-header">
                        <span className="icon">&#9733;</span>
                        <h2 className="section-title">Room Facilities</h2>
                        <div className="underline"></div>
                    </div>
                    <ul className="facilities-list">
                        <li><span>&#10003;</span> Smart TV with streaming services</li>
                        <li><span>&#10003;</span> Nespresso coffee machine</li>
                        <li><span>&#10003;</span> Mini fridge stocked with premium beverages</li>
                        <li><span>&#10003;</span> Luxury bathrobes and slippers</li>
                        <li><span>&#10003;</span> High-speed Wi-Fi</li>
                        <li><span>&#10003;</span> In-room safe for valuables</li>
                        <li><span>&#10003;</span> 24-hour butler service</li>
                    </ul>
                </div>

                {/* Reviews */}
                <div className="room-section">
                    <div className="section-header">
                        <span className="icon">&#9733;</span>
                        <h2 className="section-title">Guest Reviews</h2>
                        <div className="underline"></div>
                    </div>
                    <div className="reviews">
                        <p className="review">4.9/5</p>
                        <div className="stars" style={{ marginTop: "-20px" }}>
                            <span className="star">&#9733;</span>
                            <span className="star">&#9733;</span>
                            <span className="star">&#9733;</span>
                            <span className="star">&#9733;</span>
                            <span className="star">&#9733;</span>
                        </div>
                        <p className="review">(150)</p>
                    </div>
                </div>

                {/* Booking Information */}
                <div className="room-section">
                    <div className="section-header">
                        <span className="icon">&#9733;</span>
                        <h2 className="section-title">Booking Information</h2>
                        <div className="underline"></div>
                    </div>
                    <p className="booking-info">Check-in Time: <strong>11:00 AM</strong></p>
                    <p className="booking-info">Check-out Time: <strong>10:00 AM</strong></p>
                    <p className="booking-info">Price per night: <strong>$250</strong></p>
                </div>

                {/* Contact Information */}
                <div className="room-section contact-section">
                    <div className="section-header">
                        <span className="icon">&#9733;</span>
                        <h2 className="section-title">Contact for Booking</h2>
                        <div className="underline"></div>
                    </div>
                    <p>To book this room, please contact our reservations team at:</p>
                    <p>Email: <a href="mailto:reservations@foodmania.com" className="contact-link">reservations@foodmania.com</a></p>
                    <p>Phone: <a href="tel:+11234567890" className="contact-link">+1 (123) 456-7890</a></p>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default StandardRoom;