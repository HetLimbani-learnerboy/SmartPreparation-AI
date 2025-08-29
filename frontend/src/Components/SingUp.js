import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './SignupPage.css';

const SignupPage = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const navigate = useNavigate();

    // Email validation rules
    const emailValid = {
        lowercase: /^[a-z0-9@.]+$/.test(email) && email.length > 0,
        containsAt: email.includes('@'),
        hasNumber: /\d/.test(email),
        validDomain: /\.[a-z]{2,}$/.test(email)
    };

    // Password validation rules
    const passwordValid = {
        minLength: password.length >= 8,
        uppercase: /[A-Z]/.test(password),
        lowercase: /[a-z]/.test(password),
        number: /\d/.test(password),
        specialChar: /[!@#$%^&*(),.?":{}|<>]/.test(password)
    };

    const togglePassword = () => setShowPassword(!showPassword);
    const toggleConfirmPassword = () => setShowConfirmPassword(!showConfirmPassword);

    const handleSignup = (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            alert('Passwords do not match!');
            return;
        }
        alert('Signup successful 🎉');
        navigate('/mainpage');
    };

    return (
        <div className="signup-body">
            <div className="signup-container">
                <h2>Create an Account</h2>
                <form onSubmit={handleSignup}>
                    <div className="form-group">
                        <label>First Name:</label>
                        <input
                            type="text"
                            placeholder="👤 Enter your first name"
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label>Last Name:</label>
                        <input
                            type="text"
                            placeholder="👤 Enter your last name"
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label>Email:</label>
                        <input
                            type="email"
                            placeholder="📧 Enter your email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                        <div className="validation-list">
                            <p className={emailValid.lowercase ? "valid" : "invalid"}>✔ Only lowercase letters, numbers & @</p>
                            <p className={emailValid.containsAt ? "valid" : "invalid"}>✔ Contains "@"</p>
                            <p className={emailValid.hasNumber ? "valid" : "invalid"}>✔ Contains a number</p>
                            <p className={emailValid.validDomain ? "valid" : "invalid"}>✔ Has a valid domain (e.g. .com)</p>
                        </div>
                    </div>
                    <div className="form-group password-group">
                        <label>Password:</label>
                        <div className="password-wrapper">
                            <input
                                type={showPassword ? 'text' : 'password'}
                                placeholder="🔐 Enter password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                            <span className="eye-icon" onClick={togglePassword}>
                                <img
                                    src={showPassword ? '/eye_open.png' : '/eye-close.svg'}
                                    alt="Toggle"
                                    className="eye-icon-img"
                                />
                            </span>
                        </div>
                        <div className="validation-list">
                            <p className={passwordValid.minLength ? "valid" : "invalid"}>✔ At least 8 characters</p>
                            <p className={passwordValid.uppercase ? "valid" : "invalid"}>✔ At least 1 uppercase letter</p>
                            <p className={passwordValid.lowercase ? "valid" : "invalid"}>✔ At least 1 lowercase letter</p>
                            <p className={passwordValid.number ? "valid" : "invalid"}>✔ At least 1 number</p>
                            <p className={passwordValid.specialChar ? "valid" : "invalid"}>✔ At least 1 special character</p>
                        </div>
                    </div>
                    <div className="form-group password-group">
                        <label>Confirm Password:</label>
                        <div className="password-wrapper">
                            <input
                                type={showConfirmPassword ? 'text' : 'password'}
                                placeholder="🔐 Confirm password"
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                required
                            />
                            <span className="eye-icon" onClick={toggleConfirmPassword}>
                                <img
                                    src={showConfirmPassword ? '/eye_open.png' : '/eye-close.svg'}
                                    alt="Toggle"
                                    className="eye-icon-img"
                                />
                            </span>
                        </div>
                        {confirmPassword && confirmPassword !== password && (
                            <p className="error-msg">Passwords do not match</p>
                        )}
                    </div>
                    <button
                        className="signup-btn"
                        type="submit"
                        disabled={
                            !firstName || !lastName || !email || !password ||
                            password !== confirmPassword ||
                            Object.values(emailValid).includes(false) ||
                            Object.values(passwordValid).includes(false)
                        }
                    >
                        Sign Up
                    </button>

                    <div className="google-btn">
                        <img src="/google-icon.png" alt="Google" />
                        Continue with Google
                    </div>

                    <div className="already-account">
                        <p>Already have an account? <Link to="/signin">Sign In</Link></p>
                    </div>
                </form>

                <p>
                    <Link className="back-btn" to="/">← Back to Home</Link>
                </p>
            </div>
        </div>
    );
};

export default SignupPage;
