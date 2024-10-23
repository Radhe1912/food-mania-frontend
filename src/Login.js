import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Login.css'

const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleRedirectToLogin = () => {
        navigate('/SignIn');
    };

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('https://food-mania-backend-3yzs.onrender.com/api/Login', { email, pwd: password });
            if (response.data.status) {
                localStorage.setItem('isLoggedIn', true);
                localStorage.setItem('userEmail', email); // Store user email after login
                setError('');
                navigate('/');
            } else {
                setError('Invalid credentials');
            }
        } catch (err) {
            setError('Error in logging in');
        }
    };

    return (
        <div>
            <div className="login-container">
                <h2 className="login-title">Login</h2>
                <form className="login-form" onSubmit={handleLogin}>
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
                    <button type="submit" className="login-button">Login</button>
                    <p className="redirect-text">If you don't have an account, click the button below to sign up:</p>
                    <button type="button" onClick={handleRedirectToLogin} className="sign-in-button">Sign In Here</button>
                </form>
                {error && <p className="error-message">{error}</p>}
            </div>
        </div>
    );
};

export default Login;