import React, { useState, useEffect } from 'react';
import axios from 'axios';  // Import axios for API requests
import Header from './Header';
import Footer from './Footer';
import './FastFood.css';
import IceCreamDrink1 from './Images/food_images/IceCreamDrink1.jpg'
import IceCreamDrink2 from './Images/food_images/IceCreamDrink2.jpg'
import IceCreamDrink3 from './Images/food_images/IceCreamDrink3.jpg'
import IceCreamDrink4 from './Images/food_images/IceCreamDrink4.jpg'
import IceCreamDrink5 from './Images/food_images/IceCreamDrink5.jpg'
import IceCreamDrink6 from './Images/food_images/IceCreamDrink6.jpg'
import IceCreamDrink7 from './Images/food_images/IceCreamDrink7.jpg'
import IceCreamDrink8 from './Images/food_images/IceCreamDrink8.jpg'
import IceCreamDrink9 from './Images/food_images/IceCreamDrink9.jpg'
import IceCreamDrink10 from './Images/food_images/IceCreamDrink10.jpg'
import IceCreamDrink11 from './Images/food_images/IceCreamDrink11.jpg'
import IceCreamDrink12 from './Images/food_images/IceCreamDrink12.jpg'
import IceCreamDrink13 from './Images/food_images/IceCreamDrink13.jpg'
import IceCreamDrink14 from './Images/food_images/IceCreamDrink14.jpg'
import IceCreamDrink15 from './Images/food_images/IceCreamDrink15.jpg'
import IceCreamDrink16 from './Images/food_images/IceCreamDrink16.jpg'
import IceCreamDrink17 from './Images/food_images/IceCreamDrink17.jpg'
import IceCreamDrink18 from './Images/food_images/IceCreamDrink18.jpg'
import IceCreamDrink19 from './Images/food_images/IceCreamDrink19.jpg'
import IceCreamDrink20 from './Images/food_images/IceCreamDrink20.jpg'
import IceCreamDrink21 from './Images/food_images/IceCreamDrink21.jpg'
import IceCreamDrink22 from './Images/food_images/IceCreamDrink22.jpg'
import IceCreamDrink23 from './Images/food_images/IceCreamDrink23.jpg'
import Modal from './Modal';

// Food items array
const foodItems = [
    { name: "Blue Berry Ice cream", price: 9.99, image: IceCreamDrink1 },
    { name: "Butterscotch Ice Cream", price: 9.99, image: IceCreamDrink2 },
    { name: "Strawberry Lassi", price: 10.49, image: IceCreamDrink3 },
    { name: "Gelato Corn", price: 18.99, image: IceCreamDrink4 },
    { name: "Pineapple Cake", price: 20.99, image: IceCreamDrink5 },
    { name: "Choco Almond Cake", price: 25.99, image: IceCreamDrink6 },
    { name: "Raspberry Ice Cream", price: 8.49, image: IceCreamDrink7 },
    { name: "Cherry Berry Ice Cream", price: 9.99, image: IceCreamDrink8 },
    { name: "Strawberry Pastry", price: 15.99, image: IceCreamDrink9 },
    { name: "Crunchy Vanilla Bar Corn", price: 14.99, image: IceCreamDrink10 },
    { name: "Rose Berries Cake", price: 19.49, image: IceCreamDrink11 },
    { name: "Fruity Rubdi", price: 14.99, image: IceCreamDrink12 },
    { name: "Pistah Almond Ice Cream", price: 10.99, image: IceCreamDrink13 },
    { name: "Fruity Candies", price: 8.99, image: IceCreamDrink14 },
    { name: "Strawberry Mocktail", price: 10.99, image: IceCreamDrink15 },
    { name: "Orange Shake", price: 10.99, image: IceCreamDrink16 },
    { name: "Pepsi", price: 7.99, image: IceCreamDrink17 },
    { name: "Chocobar", price: 11.49, image: IceCreamDrink18 },
    { name: "Watermelon Juice", price: 12.49, image: IceCreamDrink19 },
    { name: "Coca Cola", price: 7.99, image: IceCreamDrink20 },
    { name: "Berries Combo Cake", price: 16.99, image: IceCreamDrink21 },
    { name: "ChocoRolls Crunchy Ice Cream", price: 15.49, image: IceCreamDrink22 },
    { name: "White Forest Cake", price: 22.49, image: IceCreamDrink23 },
];

const ITEMS_PER_PAGE = 6;

const IceCreamDrinks = () => {
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

export default IceCreamDrinks;