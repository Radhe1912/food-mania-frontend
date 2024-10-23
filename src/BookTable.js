import React, { useState, useEffect } from 'react';
import Header from './Header';
import Footer from './Footer';
import axios from 'axios';
import './BookTable.css';

const BookTable = () => {
    const [numTables, setNumTables] = useState(1);
    const [bookingTime, setBookingTime] = useState('');
    const [availableTables, setAvailableTables] = useState(0);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [mobile, setMobile] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    // Fetch available tables from the backend
    useEffect(() => {
        const fetchAvailableTables = async () => {
            try {
                const response = await axios.get('https://food-mania-backend-3yzs.onrender.com/api/availableTables');
                setAvailableTables(response.data.totalTables - response.data.bookedTables);
            } catch (err) {
                console.error('Error fetching available tables:', err);
            }
        };
        fetchAvailableTables();
    }, []);

    const handleBookTable = async () => {
        if (!name || !email || !mobile) {
            setError('Please fill in all fields.');
            return;
        }

        try {
            const response = await axios.post('https://food-mania-backend-3yzs.onrender.com/api/bookTable', {
                numTables,
                bookingTime,
                name,
                email,
                mobile
            });
            setSuccess(response.data);
            setError('');
        } catch (err) {
            setError(err.response ? err.response.data : 'Error booking table');
            setSuccess('');
        }
    };

    return (
        <div>
            <Header />
            <div className="book-table-container" style={{marginTop:"100px"}}>
                <div className="book-table-form">
                    <h2>Book a Table</h2>
                    <p>Available tables: {availableTables}</p>

                    <div className="form-group">
                        <label>Name:</label>
                        <input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="Enter your name"
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label>Email:</label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Enter your email"
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label>Mobile:</label>
                        <input
                            type="tel"
                            value={mobile}
                            onChange={(e) => setMobile(e.target.value)}
                            placeholder="Enter your mobile number"
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label>Number of Tables:</label>
                        <input
                            type="number"
                            value={numTables}
                            onChange={(e) => setNumTables(parseInt(e.target.value))}
                            min="1"
                            max={availableTables}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label>Booking Time:</label>
                        <input
                            type="datetime-local"
                            value={bookingTime}
                            onChange={(e) => setBookingTime(e.target.value)}
                            required
                        />
                    </div>

                    <button className="book-button" onClick={handleBookTable}>Book Table</button>

                    {error && <p className="error-message">{error}</p>}
                    {success && <p className="success-message">{success}</p>}
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default BookTable;