import React, { useEffect, useRef } from 'react';
import {Link} from 'react-router-dom';
import './Homepage.css';

const Homepage = () => {
    const featuresRef = useRef(null);
    useEffect(() => {
        const handleScroll = () => {
            document.querySelectorAll('.scroll-section').forEach(section => {
                const rect = section.getBoundingClientRect();
                if (rect.top < window.innerHeight - 100) {
                    section.classList.add('visible');
                } else {
                    section.classList.remove('visible');
                }
            });
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll();

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToFeatures = () => {
        if (featuresRef.current) {
            featuresRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className="homepage-main">

            <div className="homepage-wrapper">
                <div className="left-content">
                    <h2>SmartPreparation-AI</h2>
                    <h4>
                        SmartPrep AI is an intelligent study companion that allows students to create or join virtual study groups,
                        upload notes, and automatically generate quizzes using AI. With Google Sign-In, real-time multiplayer quiz battles,
                        and performance analytics, SmartPrep AI transforms traditional learning into a smart, engaging, and collaborative experience.
                    </h4>
                    <div className="button-group">
                        <Link className="btn-primary" to='/signin'>Sign In</Link>
                        <button className="btn-primary">Sign Up</button>
                    </div>
                    <div className="button-below">
                        <button className="btn-secondary" onClick={scrollToFeatures}>Features</button>
                    </div>
                </div>
                <div className="right-image">
                    <img src="/Homeimage.png" alt="Study AI" />
                </div>
            </div>


            <div className="scroll-section section-2" ref={featuresRef}>
                <h2>⚙️ Features Overview</h2>
                <div className="feature-cards">
                    <div className="feature-card">
                        <img src="/autoquiz.png" alt="Upload Notes" />
                        <h4>Auto Quiz Generator</h4>
                        <p>Upload your notes and let the AI generate multiple-choice and true/false questions instantly.</p>
                    </div>
                    <div className="feature-card">
                        <img src="/googlelogin.png" alt="Group Quiz" />
                        <h4>Google Sign-In</h4>
                        <p>Securely sign in using your Google account without any password hassle.</p>
                    </div>
                    <div className="feature-card">
                        <img src="/realtime.png" alt="Analytics" />
                        <h4>Real-time Group Play</h4>
                        <p>Play quiz battles with your study group. Compete live and track who answers fastest.</p>
                    </div>
                    <div className="feature-card">
                        <img src="/topicquiz.png" alt="Upload Notes" />
                        <h4>Topic-Based Quiz Generation</h4>
                        <p>Select specific subjects or topics and generate customized quizzes instantly using AI.</p>
                    </div>
                    <div className="feature-card">
                        <img src="/leaderboard.png" alt="Group Quiz" />
                        <h4>Leaderboard & Rankings</h4>
                        <p>See how you rank among your peers in real time based on quiz performance.</p>
                    </div>
                    <div className="feature-card">
                        <img src="/pdf.png" alt="Analytics" />
                        <h4>Export Quiz as PDF</h4>
                        <p>Download generated quizzes with answers in a clean printable format for offline practice.</p>
                    </div>
                </div>
            </div>

            <div className="scroll-section section-3">
  <h2>👨‍💻 About Us</h2>
  <div className="about-grid">
    <div className="about-card">
      <p><strong>Name:</strong> Het Limbani</p>
      <p><strong>Email:</strong> hetlimbani61@gmail.com</p>
      <p><strong>College:</strong> Adani University</p>
      <p><strong>Address:</strong> Ahmedabad, Gujarat, India</p>
    </div>
    <div className="about-card">
      <p><strong>Name:</strong> Harsh Patel</p>
      <p><strong>Email:</strong> harsh.patel99@gmail.com</p>
      <p><strong>College:</strong> Adani University</p>
      <p><strong>Address:</strong> Ahmedabad, Gujarat, India</p>
    </div>
  </div>
  <br />
  <h4>Project Info</h4>
  <p>
    This platform empowers students to create or join AI-driven study groups where they can upload notes,
    auto-generate quizzes using NLP, and compete with friends in real-time. Designed for collaborative, smart learning.
  </p>
</div>

        </div>
    );
};

export default Homepage;
