import React, { useEffect, useRef } from "react";
import "./GetStarted.css";
import { useNavigate } from "react-router-dom";

const features = [
  {
    img: "/autoquiz.png",
    title: "Auto Quiz Generator",
    desc: "Upload notes and let AI generate multiple-choice & true/false questions instantly."
  },
  {
    img: "/googlelogin.png",
    title: "Google Sign-In",
    desc: "Secure login via Google without any password hassle."
  },
  {
    img: "/realtime.png",
    title: "Real-time Group Play",
    desc: "Compete live with friends and track fastest answers."
  },
  {
    img: "/topicquiz.png",
    title: "Topic-Based Quiz Generation",
    desc: "Pick subjects/topics & get customized AI quizzes."
  },
  {
    img: "/Leaderboard.png",
    title: "Leaderboard & Rankings",
    desc: "See how you rank among your peers in real time."
  },
  {
    img: "/Quiz-import.png",
    title: "Export Quiz as PDF",
    desc: "Download quizzes with answers for offline practice."
  }
];

const GetStartedPage = () => {
  const navigate = useNavigate();
  const scrollRef = useRef(null);

  useEffect(() => {
    const container = scrollRef.current;
    if (container) {
      // Duplicate feature cards for seamless loop
      const clone = container.innerHTML;
      container.innerHTML += clone;
    }
  }, []);

  return (
    <div className="get-started-container">
      {/* Hero Section */}
      <section className="hero-section">
        <h1>
          🚀 Welcome to <span>Smart Preparation AI</span>
        </h1>
        <p className="typewriter">
          Your AI-powered companion for smarter, faster, and more effective learning.
        </p>
        <div className="getstarted-button-group">
          <button className="start-btn" onClick={() => navigate("/signin")}>
            Sign In
          </button>
          <button className="start-btn" onClick={() => navigate("/signuppage")}>
            Sign Up
          </button>
          <button className="start-btn" onClick={() => navigate("/")}>
            Back to home
          </button>
        </div>
      </section>

      {/* How It Works */}
      <section className="how-it-works">
        <h2>🛠 How It Works</h2>
        <div className="steps">
          <div className="step">
            <span>1️⃣</span>
            <h4>Sign In</h4>
            <p>Use your Google account to securely log in without any passwords.</p>
          </div>
          <div className="step">
            <span>2️⃣</span>
            <h4>Upload Notes</h4>
            <p>Upload your study materials — PDFs, Word files, or plain text.</p>
          </div>
          <div className="step">
            <span>3️⃣</span>
            <h4>Generate Quizzes</h4>
            <p>AI instantly creates multiple-choice and true/false questions for you.</p>
          </div>
          <div className="step">
            <span>4️⃣</span>
            <h4>Play & Compete</h4>
            <p>Join group quiz battles and see how you rank on the leaderboard.</p>
          </div>
        </div>
      </section>

      {/* Features Overview */}
      <section className="features-section">
        <h2> Features Overview</h2>
        <div className="features-scroll-wrapper">
          <div className="features-scroll" ref={scrollRef}>
            {features.map((feature, index) => (
              <div className="feature-card" key={index}>
                <img src={feature.img} alt={feature.title} />
                <h4>{feature.title}</h4>
                <p>{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default GetStartedPage;
