import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';
import Header from './Header';
import Footer from './Footer';
import Img1 from './Images/Img1.jpg';
import Img2 from './Images/Img2.jpg';
import Img3 from './Images/Img3.jpg';
import Img4 from './Images/Img4.jpg';
import Img5 from './Images/Img5.jpg';
import Img6 from './Images/Img6.jpg';
import Img7 from './Images/Img7.jpg';
import Room1 from './Images/hotel_rooms_images/Room1.jpg'
import Table1 from './Images/hotel_rooms_images/Table1.jpg'
import Food1 from './Images/food_images/Food1.jpg'
import Event4 from './Images/hotel_rooms_images/Event4.jpg'
import Meeting1 from './Images/hotel_rooms_images/Meeting1.jpg'
import Wedding1 from './Images/hotel_rooms_images/Wedding1.jpg'

const Counter = ({ target }) => {
    const [count, setCount] = useState(0);
    const speed = 200; // Adjust the speed of the counter

    useEffect(() => {
        const updateCount = () => {
            const increment = target / speed;

            if (count < target) {
                setCount(Math.ceil(count + increment));
            }
        };

        const timer = setTimeout(updateCount, 20); // Adjust the interval timing

        return () => clearTimeout(timer);
    }, [count, target]);

    return <h1 className="display-5 text-white mb-0">{count}</h1>;
};

const Home = () => {

    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('isLoggedIn');
        localStorage.removeItem('loggedInUser');
        navigate('/Login');
    };

    const handleRedirect = (url) => {
        setTimeout(() => {
            window.location.href = url; // Redirect to the specific page
        }, 200); // 200ms delay
    };

    return (
        <div>

            <Header />

            <div id="intro" className="bg-image" style={{ backgroundImage: `url(${Img6})`, height: "100vh" }}>
                <div className="mask" style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}>
                    <div className="d-flex justify-content-center align-items-center h-100">
                        <div className="row align-items-center">
                            <div className="col-12">
                                <h1 className="mb-0 text-white display-1" style={{ fontFamily: "Cinzel, Palatino Linotype,sans-serif" }}>Food Mania</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <main>
                <div className="container my-5 py-5"></div>
            </main>

            <div className='justify-content-center' style={{ marginTop: "-100px", marginBottom: "50px" }}>
                <h1 style={{ fontFamily: "Cinzel,Palatino Linotype,sans-serif" }}>Savor the Flavors: A Taste Experience Like No Other</h1>
            </div>

            <div id="carouselExampleCaptions" className="carousel slide">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active visually-hidden" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" className='visually-hidden' data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" className='visually-hidden' data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    <button type="button" className='visually-hidden' data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button>
                    <button type="button" className='visually-hidden' data-bs-target="#carouselExampleCaptions" data-bs-slide-to="4" aria-label="Slide 5"></button>
                </div>
                <div className="carousel-inner" style={{ maxWidth: '1100px', margin: 'auto' }}>
                    <div className="carousel-item active">
                        <img src={Img1} className="d-block w-100" alt="Regular Room 1" style={{ maxHeight: '550px', objectFit: 'cover' }} />
                        <div className="carousel-caption d-none d-md-block" style={{ bottom: '5%', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.8)', fontFamily: 'Georgia, serif', color: '#fff' }}>
                            <h3 style={{ fontWeight: 'bold', fontSize: '2em' }}>Deliciously Crafted Cuisine</h3>
                            <p style={{ fontSize: '1.2em', fontWeight: 'bold', color:"#000" }}>Experience the finest flavors, crafted with fresh, locally-sourced ingredients that make every meal a delight.</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src={Img2} className="d-block w-100" alt="Regular Room 2" style={{ maxHeight: '550px', objectFit: 'cover' }} />
                        <div className="carousel-caption d-none d-md-block" style={{ bottom: '5%', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.8)', fontFamily: 'Georgia, serif', color: '#005' }}>
                            <h3 style={{ fontWeight: 'bold', fontSize: '2em' }}>Gourmet Taste in Every Bite</h3>
                            <p style={{ fontSize: '1.2em', fontWeight: 'bold', color:"#000" }}>Our chefs ensure each dish is a perfect blend of taste and aesthetics, offering a dining experience to remember.</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src={Img3} className="d-block w-100" alt="Regular Room 3" style={{ maxHeight: '550px', objectFit: 'cover' }} />
                        <div className="carousel-caption d-none d-md-block" style={{ bottom: '5%', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.8)', fontFamily: 'Georgia, serif', color: '#fff' }}>
                            <h3 style={{ fontWeight: 'bold', fontSize: '2em' }}>World-Class Presentation</h3>
                            <p style={{ fontSize: '1.2em', fontWeight: 'bold', color:"#000" }}>Every dish is not just a meal, but a piece of art, designed to please your palate and your eyes.</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src={Img7} className="d-block w-100" alt="Regular Room 3" style={{ maxHeight: '550px', objectFit: 'cover' }} />
                        <div className="carousel-caption d-none d-md-block" style={{ bottom: '5%', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.8)', fontFamily: 'Georgia, serif', color: '#fff' }}>
                            <h3 style={{ fontWeight: 'bold', fontSize: '2em' }}>Unparalleled Dining Ambiance</h3>
                            <p style={{ fontSize: '1.2em', fontWeight: 'bold', color:"#000" }}>Dine in comfort with our sophisticated atmosphere, where every detail is tailored to enhance your culinary experience.</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src={Img5} className="d-block w-100" alt="Regular Room 3" style={{ maxHeight: '550px', objectFit: 'cover' }} />
                        <div className="carousel-caption d-none d-md-block" style={{ bottom: '5%', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.8)', fontFamily: 'Georgia, serif', color: '#fff' }}>
                            <h3 style={{ fontWeight: 'bold', fontSize: '2em' }}>Signature Dishes Await</h3>
                            <p style={{ fontSize: '1.2em', fontWeight: 'bold', color:"#000" }}>Indulge in our signature dishes, prepared to perfection, ensuring a memorable dining experience with every visit.</p>
                        </div>
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


            <div style={{ height: "150px", width: "100%", textAlign: "center", marginTop: "50px", marginBottom: "-40px" }}>
                <h1 style={{ textAlign: "center", fontFamily: "Cinzel,Palatino Linotype,sans-serif" }}>Luxurious Stays, Fine Dining, and Easy Food Orders</h1>
            </div>

            {/* Images */}
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 col-md-6 mb-4">
                        <div className="card h-100">
                            <div className="team-item position-relative">
                                <div className="position-relative overflow-hidden rounded">
                                    <img className="img-fluid w-100" src={Room1} alt="" style={{ height: "400px", borderRadius: "5px" }} />
                                </div>
                            </div>
                            <div className="card-body">
                                <h5 className="card-title">Book Rooms</h5>
                                <p className="card-text">
                                    Experience ultimate comfort and luxury in our well-appointed rooms, designed to make your stay memorable. Each room features modern amenities, including free Wi-Fi, air conditioning, and a spacious bed, ensuring relaxation after a long day of exploring the city or attending business meetings.
                                </p>
                                <button className="btn custom-btn"><Link className='nav-link' to='/BookRoom'>Explore Rooms</Link></button>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 mb-4">
                        <div className="card h-100">
                            <div className="team-item position-relative">
                                <div className="position-relative overflow-hidden rounded">
                                    <img className="img-fluid w-100" src={Table1} alt="" style={{ height: "400px", borderRadius: "5px" }} />
                                </div>
                            </div>
                            <div className="card-body">
                                <h5 className="card-title">Book Table</h5>
                                <p className="card-text">
                                    Reserve a table at our elegant restaurant and indulge in a fine dining experience. Whether you're planning a romantic dinner, a family gathering, or a business lunch, our cozy ambiance and attentive service will make your meal unforgettable. Book your table today and enjoy a delightful dining experience.
                                </p>
                                <button className="btn custom-btn" onClick={() => handleRedirect('/BookTable')}>Reserve a Table</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 mb-4">
                        <div className="card h-100">
                            <div className="team-item position-relative">
                                <div className="position-relative overflow-hidden rounded">
                                    <img className="img-fluid w-100" src={Food1} alt="" style={{ height: "400px", borderRadius: "5px" }} />
                                </div>
                            </div>
                            <div className="card-body">
                                <h5 className="card-title">Order Food</h5>
                                <p className="card-text">
                                    Satisfy your cravings by ordering from our delicious menu, featuring a wide variety of gourmet dishes crafted by our expert chefs. Whether you're in the mood for a quick snack or a full-course meal, we deliver fresh food right to your door. Place your order now and enjoy a taste of luxury in every bite.
                                </p>
                                <button className="btn custom-btn" onClick={() => handleRedirect('/orderFood')}>Order Now</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Events */}
            <div className="events-container">
                <h1 className="events-title">Events and Conferences</h1>

                <p className="events-description">
                    Food Mania elevates every occasion into an awe-inspiring, immersive experience to cherish forever.
                </p>

                <div className="events-grid row">
                    <div className="event-item col-lg-4">
                        <img src={Meeting1} alt="Meetings & Conferences" className="event-image" />
                        <p className="event-label">MEETINGS & CONFERENCES</p>
                    </div>

                    <div className="event-item col-lg-4">
                        <img src={Event4} alt="Events" className="event-image" />
                        <p className="event-label">EVENTS</p>
                    </div>

                    <div className="event-item col-lg-4">
                        <img src={Wedding1} alt="Timeless Weddings" className="event-image" />
                        <p className="event-label">TIMELESS WEDDINGS</p>
                    </div>
                </div>
            </div>

            <div className='justify-content-center'>
                <h1 style={{ fontFamily: "Cinzel, Palatino Linotype, sans-serif", position: "relative", paddingBottom: "20px", paddingTop: "20px" }} className="custom-title">Exceeding Expectations: Our Journey of Accomplishments</h1>
            </div>

            <div className="container-fluid facts p-5 my-5" style={{ backgroundColor: "#113955" }}>
                <div className="row gx-5 gy-4 py-5">
                    <div className="col-lg-3 col-md-6">
                        <div className="d-flex">
                            <div className="rounded-circle d-flex align-items-center justify-content-center mb-3" style={{ width: '60px', height: '60px', backgroundColor: '#ff5722' }}>
                                <i className="fa fa-star fs-4 text-white"></i>
                            </div>
                            <div className="ps-4">
                                <h5 className="text-secondary text-uppercase">Google Review</h5>
                                <Counter target={5} />
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div className="d-flex">
                            <div className="rounded-circle d-flex align-items-center justify-content-center mb-3" style={{ width: '60px', height: '60px', backgroundColor: '#ff5722' }}>
                                <i className="fa fa-check fs-4 text-white"></i>
                            </div>
                            <div className="ps-4">
                                <h5 className="text-secondary text-uppercase">Our Experiance</h5>
                                <span className='counter-text'>
                                    <Counter target={10} /> <h1 style={{ color: "white", marginTop: "7px", marginLeft: "10px" }}>Years</h1>
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div className="d-flex">
                            <div className="rounded-circle d-flex align-items-center justify-content-center mb-3" style={{ width: '60px', height: '60px', backgroundColor: '#ff5722' }}>
                                <i className="fa fa-mug-hot fs-4 text-white"></i>
                            </div>
                            <div className="ps-4">
                                <h5 className="text-secondary text-uppercase">Food Items</h5>
                                <span className='counter-text'>
                                    <Counter target={50} /> <h1 style={{ color: "white", marginTop: "7px", marginLeft: "10px" }}>+</h1>
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div className="d-flex">
                            <div className="rounded-circle d-flex align-items-center justify-content-center mb-3" style={{ width: '60px', height: '60px', backgroundColor: '#ff5722' }}>
                                <i className="fa fa-users fs-4 text-white"></i>
                            </div>
                            <div className="ps-4">
                                <h5 className="text-secondary text-uppercase">Happy Clients</h5>
                                <Counter target={5000} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
}

export default Home;
