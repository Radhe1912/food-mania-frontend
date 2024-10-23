import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import './Contact.css'; // Ensure to create a corresponding CSS file for styling

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here (e.g., send form data to an API)
        console.log('Form Data:', formData);
        // Reset form after submission
        setFormData({ name: '', email: '', message: '' });
        alert("Your message has been sent!");
    };

    return (
        <div>
            <Header />
            <div className="contact-container mt-5">
                <div className="contact-info">
                    <h2>Get in Touch</h2>
                    <p>
                        We would love to hear from you! If you have any questions, comments, or feedback,
                        please feel free to reach out to us.
                    </p>
                    <form className="contact-form" onSubmit={handleSubmit}>
                        <h2>Contact Form</h2>
                        <div className="form-group">
                            <label htmlFor="name">Name:</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email:</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="message">Message:</label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                required
                            ></textarea>
                        </div>
                        <button type="submit" className="submit-button">Send Message</button>
                    </form>
                    <h3>Email:</h3>
                    <p><a href="mailto:info@foodmania.com" className="ms-2" style={{textDecoration:"none"}}>info@foodmania.com</a></p>
                    <h3>Phone:</h3>
                    <p><a href="tel:+4823456788" className="ms-2" style={{textDecoration:"none"}}>+48 234 567 88</a></p>
                    <h3>Our Address:</h3>
                    <div>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d14665.127517107374!2d72.65148676239625!3d23.232827482906227!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1728924817389!5m2!1sen!2sin" width="1000" height="450" style={{ border: "0" }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                    <p>Warsaw, 00-967, Poland</p>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Contact;