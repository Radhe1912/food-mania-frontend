import React from 'react';
import Header from './Header';
import Footer from './Footer';
import './OrderFood.css';
import './RegularRooms.css'
import RegularRoom1 from './Images/hotel_rooms_images/RegularRoom1.jpg';
import RegularRoom2 from './Images/hotel_rooms_images/RegularRoom2.jpg';
import RegularRoom3 from './Images/hotel_rooms_images/RegularRoom3.jpg';
import RegularRoom4 from './Images/hotel_rooms_images/RegularRoom4.jpg';
import RegularRoom5 from './Images/hotel_rooms_images/RegularRoom5.jpg';

const RegularRoom = () => {
    return (
        <div>
            <Header />
            <div className="room-container">
                {/* Room Title */}
                <h1 className="room-title">Regular Room</h1>

                {/* Image */}
                <div id="carouselExampleCaptions" className="carousel slide">
                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active visually-hidden" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" className='visually-hidden' data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" className='visually-hidden' data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                        <button type="button" className='visually-hidden' data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button>
                        <button type="button" className='visually-hidden' data-bs-target="#carouselExampleCaptions" data-bs-slide-to="4" aria-label="Slide 5"></button>
                    </div>
                    <div className="carousel-inner" style={{ maxWidth: '800px', margin: 'auto' }}>
                        <div className="carousel-item active">
                            <img src={RegularRoom1} className="d-block w-100" alt="Regular Room 1" style={{ maxHeight: '450px', objectFit: 'cover' }} />
                        </div>
                        <div className="carousel-item">
                            <img src={RegularRoom2} className="d-block w-100" alt="Regular Room 2" style={{ maxHeight: '450px', objectFit: 'cover' }} />
                        </div>
                        <div className="carousel-item">
                            <img src={RegularRoom3} className="d-block w-100" alt="Regular Room 3" style={{ maxHeight: '450px', objectFit: 'cover' }} />
                        </div>
                        <div className="carousel-item">
                            <img src={RegularRoom4} className="d-block w-100" alt="Regular Room 3" style={{ maxHeight: '450px', objectFit: 'cover' }} />
                        </div>
                        <div className="carousel-item">
                            <img src={RegularRoom5} className="d-block w-100" alt="Regular Room 3" style={{ maxHeight: '450px', objectFit: 'cover' }} />
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

                {/* <div className="room-section">
                    <div className="section-header">
                        <h2 className="section-title">Book Regular Rooms Now</h2>
                    </div>
                    <div style={{float: "left"}}>
                        <button>Book Room</button>
                    </div>
                </div> */}

                {/* Highlights */}
                <div className="room-section">
                    <div className="section-header">
                        <span className="icon">&#9733;</span>
                        <h2 className="section-title">Room Highlights</h2>
                        <div className="underline"></div>
                    </div>
                    <ul className="highlight-list">
                        <li><span>&#10003;</span> Cozy bed with premium bedding</li>
                        <li><span>&#10003;</span> Free Wi-Fi and flat-screen TV</li>
                        <li><span>&#10003;</span> En-suite bathroom with toiletries</li>
                        <li><span>&#10003;</span> Complimentary breakfast</li>
                        <li><span>&#10003;</span> 24-hour room service</li>
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
                        Our hotel is located in the heart of the city, close to popular tourist attractions, shopping centers, and public transportation.
                    </p>
                    <p className="location-address">Address: 123 City Center, Downtown, ZIP 00000</p>
                </div> */}

                {/* Facilities */}
                <div className="room-section">
                    <div className="section-header">
                        <span className="icon">&#9733;</span>
                        <h2 className="section-title">Room Facilities</h2>
                        <div className="underline"></div>
                    </div>
                    <ul className="facilities-list">
                        <li><span>&#10003;</span> Air Conditioning</li>
                        <li><span>&#10003;</span> Mini Bar</li>
                        <li><span>&#10003;</span> Tea/Coffee Maker</li>
                        <li><span>&#10003;</span> Wardrobe</li>
                        <li><span>&#10003;</span> Work Desk</li>
                        <li><span>&#10003;</span> 24/7 Housekeeping</li>
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
                        <p className="review">4.3/5</p>
                        <div className="stars" style={{ marginTop: "-20px" }}>
                            <span className="star">&#9733;</span>
                            <span className="star">&#9733;</span>
                            <span className="star">&#9733;</span>
                            <span className="star">&#9733;</span>
                            <span className="star-half">&#9734;</span>
                        </div>
                        <p className="review">(78)</p>
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
                    <p className="booking-info">Price per night: <strong>$80</strong></p>
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

export default RegularRoom;