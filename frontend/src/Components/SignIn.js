import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './SignInpagecss.css';

const SignIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const togglePassword = () => {
        setShowPassword(!showPassword);
    };

    const handleLogin = async (e) => {
        e.preventDefault(); // prevent page reload
        alert("You're welcome");
    };

    return (
        <div className="signinpage-body">
            <div className="signinpage-container">
                <h2>Sign In</h2>
                <form onSubmit={handleLogin}>
                    <div className="form-group email-group">
                        <label htmlFor="email">Email:</label>
                        <input 
                            type="email" 
                            id="email" 
                            name="email" 
                            placeholder="👤 Enter your Email" 
                            onChange={(e) => setEmail(e.target.value)} 
                            value={email} 
                            required 
                        />
                    </div>
                    <div className="form-group password-group">
                        <label htmlFor="password">Password:</label>
                        <div className="password-wrapper">
                            <input 
                                type={showPassword ? 'text' : 'password'} 
                                id="password" 
                                name="password" 
                                placeholder="🔐 Enter your password" 
                                onChange={(e) => setPassword(e.target.value)} 
                                value={password} 
                                required 
                            />
                            <span className="eye-icon" onClick={togglePassword}>
                                <img 
                                    src={showPassword ? '/eye_open.png' : '/eye-close.svg'} 
                                    alt="Toggle password visibility" 
                                    className="eye-icon-img" 
                                />
                            </span>
                        </div>
                    </div>
                    <div className="forgot-password">
                        <Link to="/forgotpassword">Forgot Password?</Link>
                    </div>
                    <button className="signin-btn" type="submit">Sign In</button>
                    <div className="googlelogin-btn">
                        <img src="/google-icon.png" alt="Google" />
                        Continue with Google
                    </div>
                    <div className='already-account'>
                        <p>
                            Do you not have an account? <Link to="/signuppage">Signup</Link>
                        </p>
                    </div>
                </form>
                <p>
                    <Link className="back-btn" to="/">← Back to Home</Link>
                </p>
            </div>
        </div>
    );
};

export default SignIn;
