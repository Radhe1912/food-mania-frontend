import React, { useEffect, useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import './BookingDetails.css'; // Optional: Create a CSS file for styling
import html2canvas from 'html2canvas';
import { PDFDocument, rgb } from 'pdf-lib';

const roomPrices = {
    Regular: 100,
    Standard: 150,
    Luxurious: 250,
};

const BookingDetails = () => {
    const [bookings, setBookings] = useState([]);
    const userEmail = localStorage.getItem('userEmail'); // Get the logged-in user's email

    useEffect(() => {
        const fetchBookings = async () => {
            const userEmail = localStorage.getItem('userEmail'); // Retrieve user email from localStorage
            try {
                const response = await fetch(`https://food-mania-backend-3yzs.onrender.com/api/bookings?email=${userEmail}`); // Include userEmail in query
                if (!response.ok) {
                    throw new Error('Failed to fetch bookings');
                }
                const data = await response.json();
                setBookings(data);
            } catch (error) {
                console.error('Error fetching bookings:', error);
            }
        };
    
        fetchBookings();
    }, []);    

    const calculateTotalPrice = (booking) => {
        const start = new Date(booking.startDate);
        const end = new Date(booking.endDate);
        const numberOfNights = (end - start) / (1000 * 60 * 60 * 24);

        return numberOfNights > 0 ? roomPrices[booking.roomType] * booking.numRooms * numberOfNights : 0;
    };

    const generatePDF = async () => {
        const hotelName = "Food Mania";  // Set your hotel name here
        const message = "Thank you for choosing Food Mania. We hope you have a wonderful stay!";

        // Calculate the total cost of all bookings
        const totalCost = bookings.reduce((total, booking) => total + calculateTotalPrice(booking), 0);

        const element = document.getElementById('booking-table'); // Get the table element
        const canvas = await html2canvas(element); // Create a canvas from the element
        const imgData = canvas.toDataURL('image/png'); // Get image data as base64 string

        const pdfDoc = await PDFDocument.create(); // Create a new PDF document
        const page = pdfDoc.addPage(); // Add a page to the document

        // Set font and size for the hotel name, message, and total cost
        const fontSize = 20;
        const messageFontSize = 14;
        const totalFontSize = 16;
        const imgMarginTop = 40;  // Margin from the top for the image

        // Draw hotel name
        page.drawText(hotelName, {
            x: 50,
            y: page.getHeight() - 50,  // Adjust this as needed
            size: fontSize,
            color: rgb(0, 0.53, 0.71),  // You can change the color if needed
        });

        // Draw custom message
        page.drawText(message, {
            x: 50,
            y: page.getHeight() - 80,  // Adjust this as needed
            size: messageFontSize,
            color: rgb(0, 0, 0),  // Black color
        });

        // Convert the base64 image data to a Uint8Array
        const imgBytes = await fetch(imgData).then(res => res.arrayBuffer());
        const pngImage = await pdfDoc.embedPng(imgBytes); // Embed the PNG image

        const imgWidth = page.getWidth() - 100;  // Leave some padding on sides
        const imgHeight = (canvas.height * imgWidth) / canvas.width;

        // Draw the embedded image onto the PDF page
        const imageYPosition = page.getHeight() - imgHeight - imgMarginTop - 100;
        page.drawImage(pngImage, {
            x: 50,
            y: imageYPosition,  // Position below the message
            width: imgWidth,
            height: imgHeight,
        });

        // Draw the total cost right after the table image
        const totalCostYPosition = imageYPosition - 30;  // Adjust as needed to create space after the table
        page.drawText(`Total Cost: $${totalCost.toFixed(2)}`, {
            x: 50,
            y: totalCostYPosition,  // Position right after the image
            size: totalFontSize,
            color: rgb(0, 0, 0),  // Black color
        });

        const pdfBytes = await pdfDoc.save(); // Save the PDF document
        const blob = new Blob([pdfBytes], { type: 'application/pdf' }); // Create a blob from the PDF bytes
        const url = URL.createObjectURL(blob); // Create a URL for the blob

        // Create a link element to download the PDF
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', 'booking-details.pdf');
        document.body.appendChild(link);
        link.click(); // Trigger the download
        document.body.removeChild(link); // Remove the link
    };

    return (
        <div>
            <Header />
            <div className="container" style={{ marginTop: '100px' }}>
                <h2>Your Booked Rooms</h2>
                {bookings.length === 0 ? (
                    <p>No bookings found.</p>
                ) : (
                    <>
                        <div id="booking-table"> {/* Wrap the table in a div with an ID */}
                            <table className="tab">
                                <thead>
                                    <tr>
                                        <th>Room Type</th>
                                        <th>Number of Rooms</th>
                                        <th>Number of Persons</th>
                                        <th>Booking Date From</th>
                                        <th>Booking Date To</th>
                                        <th>Total Price</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {bookings.map((booking) => (
                                        <tr key={booking._id}>
                                            <td>{booking.roomType}</td>
                                            <td>{booking.numRooms}</td>
                                            <td>{booking.numPersons}</td>
                                            <td>{new Date(booking.startDate).toLocaleDateString()}</td>
                                            <td>{new Date(booking.endDate).toLocaleDateString()}</td>
                                            <td>${calculateTotalPrice(booking).toFixed(2)}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                        <div style={{ marginTop: '20px' }}>
                            <button className="btn custom-btn" onClick={generatePDF}>
                                Generate Invoice (PDF)
                            </button>
                        </div>
                    </>
                )}
            </div>
            <Footer />
        </div>
    );
};

export default BookingDetails;