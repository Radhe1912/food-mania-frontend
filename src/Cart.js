import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { PDFDocument, rgb } from 'pdf-lib';
import Header from './Header';
import Footer from './Footer';
import './Cart.css';

const Cart = () => {
    const [cartItems, setCartItems] = useState([]);
    const [showOrderForm, setShowOrderForm] = useState(false);
    const [orderDetails, setOrderDetails] = useState({ name: '', email: '', phone: '', address: '' });
    const [estimatedTime, setEstimatedTime] = useState(null);
    const [isInvoiceVisible, setIsInvoiceVisible] = useState(false);
    const { userEmail } = useParams();
    const hotelCoordinates = { lat: 23.23486274132175, lon: 72.65336560000003 }; // Replace with your hotel's actual coordinates

    useEffect(() => {
        axios.get(`https://food-mania-backend-3yzs.onrender.com/api/cart?email=${userEmail}`)
            .then((response) => {
                setCartItems(response.data);
            })
            .catch((error) => {
                console.error('Error fetching cart items:', error);
            });
    }, [userEmail]);

    const calculateTotalCost = () => {
        return cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
    };

    const updateCartItemQuantity = (itemId, action) => {
        axios.patch(`https://food-mania-backend-3yzs.onrender.com/api/cart/${itemId}`, { action })
            .then((response) => {
                setCartItems(response.data); // Update the cart items with the updated data
            })
            .catch((error) => {
                console.error('Error updating cart item quantity:', error);
            });
    };

    const handleOrderInputChange = (e) => {
        const { name, value } = e.target;
        setOrderDetails({ ...orderDetails, [name]: value });
    };

    const handleOrderSubmit = () => {
        localStorage.setItem('orderDetails', JSON.stringify(orderDetails));
        calculateDistance();
    };

    const calculateDistance = async () => {
        const destinationAddress = orderDetails.address;
        try {
            const geocodeResponse = await axios.get(
                `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(destinationAddress)}`
            );

            if (geocodeResponse.data.length === 0) {
                alert('Invalid address. Please try again.');
                return;
            }

            const { lat, lon } = geocodeResponse.data[0];

            const osrmResponse = await axios.get(
                `https://router.project-osrm.org/route/v1/driving/${hotelCoordinates.lon},${hotelCoordinates.lat};${lon},${lat}?overview=false`
            );

            if (osrmResponse.data.routes.length === 0) {
                alert('Unable to calculate distance. Please try again.');
                return;
            }

            const distanceInMeters = osrmResponse.data.routes[0].distance;
            const distanceInKm = distanceInMeters / 1000;

            if (distanceInKm > 50) {
                alert('Food cannot be delivered to distances over 50 kilometers.');
            } else {
                const durationInMinutes = (osrmResponse.data.routes[0].duration / 60)+10;
                setEstimatedTime(durationInMinutes.toFixed(2)); // Set the estimated time
                setIsInvoiceVisible(true); // Show the "Generate Invoice" button
            }
        } catch (error) {
            console.error('Error calculating distance:', error);
            alert('An error occurred while calculating the distance. Please try again.');
        }
    };

    const generatePDF = async () => {
        const hotelName = "Food Mania";
        const message = "Thank you for choosing Food Mania. We hope you enjoyed your order experience!";
        const { name, email, phone } = orderDetails;
    
        const pdfDoc = await PDFDocument.create();
        const page = pdfDoc.addPage([595, 842]);
        const fontSize = 20;
        const messageFontSize = 14;
        const tableFontSize = 12;
        const totalFontSize = 16;
        const lineHeight = 20;
    
        let currentY = page.getHeight() - 50;
    
        page.drawText(hotelName, {
            x: 250,
            y: currentY,
            size: fontSize,
            color: rgb(0, 0.53, 0.71),
        });
    
        currentY -= 30;
        page.drawText(message, {
            x: 50,
            y: currentY,
            size: messageFontSize,
            color: rgb(0, 0, 0),
        });
    
        // Adding receiver's details
        currentY -= 40;
        page.drawText(`Name: ${name}`, {
            x: 50,
            y: currentY,
            size: messageFontSize,
            color: rgb(0, 0, 0),
        });
    
        currentY -= 20;
        page.drawText(`Email: ${email}`, {
            x: 50,
            y: currentY,
            size: messageFontSize,
            color: rgb(0, 0, 0),
        });
    
        currentY -= 20;
        page.drawText(`Phone: ${phone}`, {
            x: 50,
            y: currentY,
            size: messageFontSize,
            color: rgb(0, 0, 0),
        });
    
        currentY -= 40;
    
        // Adding the table headers for cart items
        page.drawText("Item", { x: 50, y: currentY, size: tableFontSize });
        page.drawText("Price", { x: 250, y: currentY, size: tableFontSize });
        page.drawText("Quantity", { x: 350, y: currentY, size: tableFontSize });
        page.drawText("Total", { x: 450, y: currentY, size: tableFontSize });
    
        currentY -= lineHeight;
    
        // Adding cart items
        cartItems.forEach(item => {
            if (currentY < 100) {
                currentY = page.getHeight() - 50;
                const newPage = pdfDoc.addPage([595, 842]);
                page.drawText("Item", { x: 50, y: currentY, size: tableFontSize });
                page.drawText("Price", { x: 250, y: currentY, size: tableFontSize });
                page.drawText("Quantity", { x: 350, y: currentY, size: tableFontSize });
                page.drawText("Total", { x: 450, y: currentY, size: tableFontSize });
                currentY -= lineHeight;
            }
    
            page.drawText(item.name, { x: 50, y: currentY, size: tableFontSize });
            page.drawText(`$${item.price.toFixed(2)}`, { x: 250, y: currentY, size: tableFontSize });
            page.drawText(item.quantity.toString(), { x: 350, y: currentY, size: tableFontSize });
            page.drawText(`$${(item.price * item.quantity).toFixed(2)}`, { x: 450, y: currentY, size: tableFontSize });
            currentY -= lineHeight;
        });
    
        const totalCost = calculateTotalCost();
    
        currentY -= 20;
        page.drawText(`Total Cost: $${totalCost}`, {
            x: 350,
            y: currentY,
            size: totalFontSize,
            color: rgb(0, 0.53, 0.71),
        });
    
        const pdfBytes = await pdfDoc.save();
        const blob = new Blob([pdfBytes], { type: 'application/pdf' });
        const url = URL.createObjectURL(blob);
    
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', 'cart-invoice.pdf');
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };    

    return (
        <div>
            <Header/>
            <h1 style={{ marginTop: "100px" }}>Your Cart</h1>
            <div className="cart-container">
                {cartItems.length === 0 ? (
                    <p className="empty-cart">Your cart is empty.</p>
                ) : (
                    <>
                        <ul className="cart-items">
                        {cartItems.map((item) => (
                            <li key={item._id} className="cart-item">
                                <img src={item.image} alt={item.name} className="cart-item-image" />
                                <div className="cart-item-details">
                                    <p className="cart-item-name">{item.name}</p>
                                    <p className="cart-item-price">Price: ${item.price.toFixed(2)}</p>
                                    <p className="cart-item-quantity">Quantity: {item.quantity}</p>
                                    <p className="cart-item-total">Total: ${(item.price * item.quantity).toFixed(2)}</p>
                                    <div className="cart-item-buttons">
                                        <button onClick={() => updateCartItemQuantity(item._id, 'add')}>Add</button>
                                        <button onClick={() => updateCartItemQuantity(item._id, 'remove')}>Remove</button>
                                    </div>
                                </div>
                            </li>
                        ))}
                        </ul>

                        <div className="cart-summary">
                            <h3>Total Cost: ${calculateTotalCost()}</h3>
                        </div>

                        <div className="cart-summary">
                            <button className="btn custom-btn" onClick={() => setShowOrderForm(true)}>
                                Order Now
                            </button>
                        </div>
                        
                        {showOrderForm && (
                            <div className="order-form">
                                <h2>Order Details</h2>
                                <div className="form-group">
                                    <label htmlFor="name">Receiver Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        placeholder="Enter receiver's name"
                                        onChange={handleOrderInputChange}
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="email">Email</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        placeholder="Enter email address"
                                        onChange={handleOrderInputChange}
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="phone">Phone Number</label>
                                    <input
                                        type="text"
                                        id="phone"
                                        name="phone"
                                        placeholder="Enter phone number"
                                        onChange={handleOrderInputChange}
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="address">Delivery Address</label>
                                    <input
                                        type="text"
                                        id="address"
                                        name="address"
                                        placeholder="Enter delivery address"
                                        onChange={handleOrderInputChange}
                                    />
                                </div>
                                <button onClick={handleOrderSubmit} className="btn custom-btn">Submit Order</button>
                            </div>
                        )}

                        {estimatedTime && (
                            <div className="delivery-time">
                                <p className=''>Estimated Delivery Time: {estimatedTime} minutes</p>
                            </div>
                        )}

                        {isInvoiceVisible && (
                            <div className="cart-summary">
                                <button className="btn custom-btn" onClick={generatePDF}>
                                    Generate Invoice
                                </button>
                            </div>
                        )}
                    </>
                )}
            </div>
            <Footer/>
        </div>
    );
};

export default Cart;