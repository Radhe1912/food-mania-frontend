import React, { useState, useEffect } from 'react';
import axios from 'axios';  // Import axios for API requests
import Header from './Header';
import Footer from './Footer';
import './FastFood.css';
import Lunch2 from './Images/food_images/Lunch2.jpg';
import Lunch4 from './Images/food_images/Lunch4.jpg';
import Lunch6 from './Images/food_images/Lunch6.jpg';
import Lunch7 from './Images/food_images/Lunch7.jpg';
import Lunch10 from './Images/food_images/Lunch10.jpg';
import Lunch11 from './Images/food_images/Lunch11.jpg';
import Lunch12 from './Images/food_images/Lunch12.jpg';
import Lunch13 from './Images/food_images/Lunch13.jpg';
import Lunch14 from './Images/food_images/Lunch14.jpg';
import Lunch15 from './Images/food_images/Lunch15.jpg';
import Lunch16 from './Images/food_images/Lunch16.jpg';
import Lunch17 from './Images/food_images/Lunch17.jpg';
import Lunch18 from './Images/food_images/Lunch18.jpg';
import Lunch19 from './Images/food_images/Lunch19.jpg';
import Lunch20 from './Images/food_images/Lunch20.jpg';
import Modal from './Modal';

// Food items array
const foodItems = [
    { name: "Shahee Paneer", price: 18.99, image: Lunch2 },
    { name: "Curry Rice", price: 14.99, image: Lunch4 },
    { name: "South Indian Special", price: 29.49, image: Lunch6 },
    { name: "Mango Juice", price: 10.99, image: Lunch7 },
    { name: "Kashmiri Kofta", price: 17.99, image: Lunch10 },
    { name: "Paneer Tadka", price: 14.99, image: Lunch11 },
    { name: "Fried Dal Rice", price: 15.49, image: Lunch12 },
    { name: "Gulab Jamun", price: 15.99, image: Lunch13 },
    { name: "Jalebi", price: 15.99, image: Lunch14 },
    { name: "Dal Dhokli", price: 14.99, image: Lunch15 },
    { name: "Veg Salad", price: 16.49, image: Lunch16 },
    { name: "Gujarati Thaali", price: 14.99, image: Lunch17 },
    { name: "Pulaaw", price: 16.99, image: Lunch18 },
    { name: "Chhole Bhaturey", price: 19.99, image: Lunch19 },
    { name: "Butter Paneer", price: 14.99, image: Lunch20 },
];

const ITEMS_PER_PAGE = 6;

const Lunch = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const [selectedItem, setSelectedItem] = useState(null);  // For modal
    const [quantity, setQuantity] = useState(1);  // Store quantity

    // Filter food items based on the search query
    const filteredItems = foodItems.filter(item =>
        item.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    // Reset page to 1 if search query changes
    useEffect(() => {
        setCurrentPage(1);
    }, [searchQuery]);

    // Pagination calculation
    const totalItems = filteredItems.length;
    const totalPages = Math.ceil(totalItems / ITEMS_PER_PAGE);
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;
    const currentItems = filteredItems.slice(startIndex, endIndex);

    // Handle page change
    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    // Handle Previous and Next buttons
    const handlePrevPage = () => {
        if (currentPage > 1) setCurrentPage(currentPage - 1);
    };

    const handleNextPage = () => {
        if (currentPage < totalPages) setCurrentPage(currentPage + 1);
    };

    // Add to Cart function
    const addToCart = (item, quantity) => {
        const userEmail = localStorage.getItem('userEmail');  // Retrieve user email from localStorage
    
        if (!userEmail) {
            alert('You must be logged in to add items to the cart.');
            return;
        }
    
        axios.post('https://food-mania-backend-3yzs.onrender.com/api/cart', {
            userEmail,  // Include user email in the request
            name: item.name,
            price: item.price,
            quantity: quantity,
            image: item.image
        })
        .then((response) => {
            console.log('Item added to cart:', response.data);
            alert('Item added to cart successfully!');  // Simple feedback for now
        })
        .catch((error) => {
            console.error('Error adding item to cart:', error);
            alert('Failed to add item to cart. Please try again.');  // Error feedback
        });
    };    
    

    // Modal handler to show selected item and add quantity
    const openModal = (item) => {
        setSelectedItem(item);
        setQuantity(1);  // Reset quantity when modal opens
    };

    const closeModal = () => {
        setSelectedItem(null);
    };

    const handleAddToCart = () => {
        if (selectedItem) {
            addToCart(selectedItem, quantity);
            closeModal();  // Close modal after adding
        }
    };

    return (
        <div>
            <Header />
            <div style={{ marginTop: "100px" }}>
                <h1>Food Menu</h1>

                {/* Search Input */}
                <div className="search-bar">
                    <input type="text" placeholder="Search food..." value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
                </div>

                <div className="food-menu">
                    {currentItems.map((item, index) => (
                        <div key={index} className="food-item">
                            <img className='img-item' src={item.image} alt={item.name} />
                            <h2>{item.name}</h2>
                            <p>Price: ${item.price.toFixed(2)}</p>
                            <button onClick={() => openModal(item)}>Add to Cart</button>
                        </div>
                    ))}
                </div>

                {/* No items found */}
                {filteredItems.length === 0 && <p>No items found</p>}

                {/* Pagination Controls */}
                {filteredItems.length > ITEMS_PER_PAGE && (
                    <div className="pagination">
                        <button onClick={handlePrevPage} disabled={currentPage === 1}>&lt;</button>
                        {Array.from({ length: totalPages }, (_, index) => (
                            <button key={index} onClick={() => handlePageChange(index + 1)} className={index + 1 === currentPage ? "active" : ""}>{index + 1}</button>
                        ))}
                        <button onClick={handleNextPage} disabled={currentPage === totalPages}>&gt;</button>
                    </div>
                )}

                {/* Modal for adding to cart */}
                {selectedItem && (
                    <div className="modal">
                        <div className="modal-content">
                            <h2>{selectedItem.name}</h2>
                            <p>Price: ${selectedItem.price.toFixed(2)}</p>
                            <label>Quantity:</label>
                            <input 
                                type="number" 
                                value={quantity} 
                                min="1" 
                                onChange={(e) => setQuantity(Number(e.target.value))}  // Update quantity state
                            />
                            <button onClick={handleAddToCart}>Add to Cart</button>
                            <button onClick={closeModal}>Close</button>
                        </div>
                    </div>
                )}
            </div>
            <Footer />
        </div>
    );
};

export default Lunch;