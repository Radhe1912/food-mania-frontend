import React from 'react';
import './Modal.css';

const Modal = ({ show, onClose, onAddToCart, item, quantity, setQuantity }) => {
    if (!show || !item) return null;

    return (
        <div className="modal">
            <div className="modal-content">
                <h2>{item.name}</h2>
                <p>Price: ${item.price}</p>
                <label>
                    Quantity:<input type="text" value={quantity} onChange={(e) => setQuantity(Number(e.target.value))} />
                </label>
                <button onClick={onAddToCart}>Add to Cart</button>
                <button onClick={onClose}>Close</button>
            </div>
        </div>
    );
};

export default Modal;