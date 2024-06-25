import React, { useState } from 'react';
import './Login.css';


const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rememberMe, setRememberMe] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
        // Handle form submission logic here
        console.log('Email:', email);
        console.log('Password:', password);
        console.log('Remember Me:', rememberMe);
    };

    return (
        <div className="login-container">
            <div className="login-image">
                <img src="./pic3.jpg" alt="Login" />
            </div>
            <form className="login-form" onSubmit={handleSubmit}>
                <div >
                    <img src="./logo.jpg" class="logo-img" alt="logo"></img>
                </div>
                <h2>Welcome Back!</h2>
                <p class="text-first">Please enter your details</p>
                <div className="form-group">
                    <label htmlFor="email">Email Address</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    <div className="form-options">
                        <div className="remember-me">
                            <input
                                type="checkbox"
                                id="rememberMe"
                                class="checkbox"
                                checked={rememberMe}
                                onChange={(e) => setRememberMe(e.target.checked)}
                            />
                            <label htmlFor="rememberMe">Remember Me</label>
                        </div>
                        <a href="#" className="forgot-password">Forgot password?</a>
                    </div>
                </div>
                <button type="submit" className="login-button">Login </button>
                <div >
                    <p className="terms">
                        By creating an account, you agree to our <a href="#">Terms of Services</a> and <a href="#">Privacy Policy</a>
                    </p>
                    <p className="signup">
                        Don't have an account? <a href="#">Sign Up</a>
                    </p>
                </div>
            </form>
        </div>
    );
};

export default Login;
