import React, { useState, useEffect } from 'react';
import axios from 'axios';  // Import axios for API requests
import Header from './Header';
import Footer from './Footer';
import './FastFood.css';
import FastFood1 from './Images/food_images/FastFood1.jpg';
import FastFood2 from './Images/food_images/FastFood2.jpg';
import FastFood3 from './Images/food_images/FastFood3.jpg';
import FastFood4 from './Images/food_images/FastFood4.jpg';
import FastFood5 from './Images/food_images/FastFood5.jpg';
import FastFood6 from './Images/food_images/FastFood6.jpg';
import FastFood7 from './Images/food_images/FastFood7.jpg';
import FastFood8 from './Images/food_images/FastFood8.jpg';
import FastFood9 from './Images/food_images/FastFood9.jpg';
import FastFood10 from './Images/food_images/FastFood10.jpg';
import FastFood11 from './Images/food_images/FastFood11.jpg';
import FastFood12 from './Images/food_images/FastFood12.jpg';
import FastFood13 from './Images/food_images/FastFood13.jpg';
import FastFood14 from './Images/food_images/FastFood14.jpg';
import FastFood15 from './Images/food_images/FastFood15.jpg';
import FastFood16 from './Images/food_images/FastFood16.jpg';
import Modal from './Modal'

// Food items array
const foodItems = [
    { name: "Margherita Pizza", price: 12.99, image: FastFood6 },
    { name: "Cheese Burger", price: 8.99, image: FastFood2 },
    { name: "Caesar Salad", price: 7.99, image: FastFood3 },
    { name: "Tacos", price: 9.49, image: FastFood4 },
    { name: "Samosa", price: 10.99, image: FastFood5 },
    { name: "Italian Pizza", price: 11.99, image: FastFood7 },
    { name: "French Fries", price: 4.99, image: FastFood8 },
    { name: "Sushi Rolls", price: 15.49, image: FastFood9 },
    { name: "Pad Thai", price: 13.99, image: FastFood10 },
    { name: "Seven Cheese Pizza", price: 18.99, image: FastFood11 },
    { name: "Pancakes", price: 5.99, image: FastFood12 },
    { name: "Ice Cream Sundae", price: 6.49, image: FastFood13 },
    { name: "Dabeli", price: 14.99, image: FastFood14 },
    { name: "Vada Pav", price: 16.99, image: FastFood15 },
    { name: "Veggie Burger", price: 9.99, image: FastFood16 }
];

const ITEMS_PER_PAGE = 6;

const FastFood = () => {
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

export default FastFood;