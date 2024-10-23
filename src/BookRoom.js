import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import './BookRoom.css';
import RegularRoom1 from './Images/hotel_rooms_images/RegularRoom1.jpg';
import StandardRoom1 from './Images/hotel_rooms_images/StandardRoom1.jpg';
import LuxuriousRoom1 from './Images/hotel_rooms_images/LuxuriousRoom1.jpg';

// Define prices for each room type
const roomPrices = {
    Regular: 100,
    Standard: 150,
    Luxurious: 250,
};

// Custom modal component for booking rooms
const RoomBookingModal = ({ isOpen, onClose, onBook }) => {
    const [roomType, setRoomType] = useState('');
    const [numRooms, setNumRooms] = useState(1);
    const [numPersons, setNumPersons] = useState(1);
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [error, setError] = useState('');

    const calculateTotalPrice = () => {
        if (!startDate || !endDate || !roomType) return 0;

        const start = new Date(startDate);
        const end = new Date(endDate);
        const numberOfNights = (end - start) / (1000 * 60 * 60 * 24);

        return numberOfNights > 0 ? roomPrices[roomType] * numRooms * numberOfNights : 0;
    };

    const handleBooking = () => {
        const today = new Date();
        const selectedStartDate = new Date(startDate);
        const selectedEndDate = new Date(endDate);
        const dateDiff = (selectedStartDate - today) / (1000 * 60 * 60 * 24);

        // Validation checks
        if (dateDiff < 5) {
            setError('Start date must be at least 5 days from today.');
            return;
        }

        if (selectedEndDate <= selectedStartDate) {
            setError('End date must be after start date.');
            return;
        }

        if (numPersons > numRooms * 4) {
            setError('Number of persons exceeds room capacity (4 per room).');
            return;
        }

        // Log booking details for debugging
        console.log('Booking Details:', { roomType, numRooms, numPersons, startDate, endDate });

        onBook({ roomType, numRooms, numPersons, startDate, endDate });
        setError('');
        onClose();
    };

    const totalPrice = calculateTotalPrice();

    return (
        <div className={`room-modal ${isOpen ? 'show' : ''}`} onClick={onClose}>
            <div className="room-modal-content" onClick={(e) => e.stopPropagation()}>
                <span className="room-close" onClick={onClose}>&times;</span>
                <h2>Book a Room</h2>
                <label>
                    Room Type:
                    <select value={roomType} onChange={(e) => setRoomType(e.target.value)}>
                        <option value="">Select</option>
                        <option value="Regular">Regular Room</option>
                        <option value="Standard">Standard Room</option>
                        <option value="Luxurious">Luxurious Room</option>
                    </select>
                </label>
                <label>
                    Number of Rooms:
                    <input type="number" min="1" value={numRooms} onChange={(e) => setNumRooms(Number(e.target.value))} />
                </label>
                <label>
                    Number of Persons:
                    <input type="number" min="1" max={numRooms * 4} value={numPersons} onChange={(e) => setNumPersons(Number(e.target.value))} />
                </label>
                <label>
                    Start Date:
                    <input type="date" value={startDate} onChange={(e) => setStartDate(e.target.value)} />
                </label>
                <label>
                    End Date:
                    <input type="date" value={endDate} onChange={(e) => setEndDate(e.target.value)} />
                </label>
                {error && <p className="error">{error}</p>}
                <h3>Total Price: ${totalPrice.toFixed(2)}</h3>
                <button onClick={handleBooking}>Book Now</button>
            </div>
        </div>
    );
};

const BookRoom = () => {
    const [modalOpen, setModalOpen] = useState(false); // Modal initially closed

    const handleRedirect = (url) => {
        setTimeout(() => {
            window.location.href = url; // Redirect to the specific page
        }, 200); // 200ms delay
    };

    const handleBook = async (bookingDetails) => {
        const userEmail = localStorage.getItem('userEmail'); // Retrieve userEmail from localStorage
        const bookingData = { ...bookingDetails, userEmail }; // Add userEmail to booking details
    
        const response = await fetch('https://food-mania-backend-3yzs.onrender.com/api/bookRooms', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(bookingData),
        });
    
        const responseData = await response.json();
        console.log(responseData); // Log the response for debugging
    
        if (response.ok) {
            alert('Room booked successfully!');
            setModalOpen(false); // Close modal after successful booking
        } else {
            alert(`Error booking the room: ${responseData.message || response.statusText}`);
        }
    };    

    return (
        <div>
            <Header />
            <div style={{ height: "100px" }}></div>
            <button className="btn custom-btn" onClick={() => setModalOpen(true)}>Book a Room</button>
            <RoomBookingModal isOpen={modalOpen} onClose={() => setModalOpen(false)} onBook={handleBook} />
            <div style={{ marginTop: "100px" }}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-6 mb-4">
                            <div className="card h-100">
                                <div className="team-item position-relative">
                                    <div className="position-relative overflow-hidden rounded">
                                        <img className="img-fluid w-100" src={RegularRoom1} alt="Regular Room" style={{ height: "400px", borderRadius: "5px" }} />
                                    </div>
                                </div>
                                <div className="card-body">
                                    <h5 className="card-title">Regular Rooms</h5>
                                    <p className="card-text">
                                        Our Regular rooms offer comfort and convenience at an affordable rate. Ideal for solo travelers or couples, these rooms are equipped with essential amenities, including a cozy bed, free Wi-Fi, a TV, and an en-suite bathroom. Perfect for a restful night after a day of exploring.
                                    </p>
                                    <button className="btn custom-btn" onClick={() => handleRedirect('/RegularRoom')}>Explore Rooms</button>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 mb-4">
                            <div className="card h-100">
                                <div className="team-item position-relative">
                                    <div className="position-relative overflow-hidden rounded">
                                        <img className="img-fluid w-100" src={StandardRoom1} alt="Standard Room" style={{ height: "400px", borderRadius: "5px" }} />
                                    </div>
                                </div>
                                <div className="card-body">
                                    <h5 className="card-title">Standard Rooms</h5>
                                    <p className="card-text">
                                        The Standard rooms provide extra space and upgraded features for a more comfortable stay. These rooms come with a larger bed, work desk, flat-screen TV, and enhanced double bathroom amenities. Standard Rooms are great for business travelers or those seeking a balance of value and comfort.
                                    </p>
                                    <button className="btn custom-btn" onClick={() => handleRedirect('/StandardRoom')}>Explore Rooms</button>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 mb-4">
                            <div className="card h-100">
                                <div className="team-item position-relative">
                                    <div className="position-relative overflow-hidden rounded">
                                        <img className="img-fluid w-100" src={LuxuriousRoom1} alt="Luxurious Room" style={{ height: "400px", borderRadius: "5px" }} />
                                    </div>
                                </div>
                                <div className="card-body">
                                    <h5 className="card-title">Luxurious Rooms</h5>
                                    <p className="card-text">
                                        Indulge in the ultimate experience with our Luxurious rooms. Designed for those who appreciate the finer things in life, these spacious rooms include premium furnishings, a separate living area, and exclusive access to our VIP lounge. Ideal for romantic getaways or special occasions.
                                    </p>
                                    <button className="btn custom-btn" onClick={() => handleRedirect('/LuxuriousRoom')}>Explore Rooms</button>
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

export default BookRoom;