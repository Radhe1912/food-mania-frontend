import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './SignIn.css'; // Import the CSS file

const SignIn = () => {
    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState(false);

    const handleRedirectToLogin = () => {
        navigate('/Login');
    };

    const handleSignup = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('https://food-mania-backend-3yzs.onrender.com/api/SignIn', { name, email, pwd: password });
            if (response.data.status) {
                setSuccess(true);
                localStorage.setItem('isSignedIn', true);
                localStorage.setItem('userEmail', email); // Store user email after login
                setError('');
                navigate('/');
            } else {
                setError('User already exists');
                setSuccess(false);
            }
        } catch (err) {
            setError('Error in signing up');
        }
    };

    return (
        <div className="signin-container">
            <h2 className="signin-title">Sign Up</h2>
            <form className="signin-form" onSubmit={handleSignup}>
                <input
                    type="text"
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    className="input-field"
                />
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="input-field"
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    className="input-field"
                />
                <button type="submit" className="signup-button">Sign Up</button>
                <p className="redirect-text">If you already have an account, click the button below to log in:</p>
                <button type="button" onClick={handleRedirectToLogin} className="login-button">Login Here</button>
            </form>
            {error && <p className="error-message">{error}</p>}
        </div>
    );
};

export default SignIn;