import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Homepage.css';

const Homepage = () => {
  useEffect(() => {
    const sections = document.querySelectorAll('.scroll-section');
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          } else {
            entry.target.classList.remove('visible');
          }
        });
      },
      { threshold: 0.5 }
    );

    sections.forEach(section => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="homepage-main">

      <section className="homepage-wrapper scroll-section">
        <div className="left-content">
          <h2>SmartPreparation-AI</h2>
          <h4>
            SmartPrep AI is an intelligent study companion that allows students to create or join virtual study groups,
            upload notes, and automatically generate quizzes using AI. With Google Sign-In, real-time multiplayer quiz battles,
            and performance analytics, SmartPrep AI transforms traditional learning into a smart, engaging, and collaborative experience.
          </h4>
          <div className="button-group">
            <Link className="btn-primary" to='/signin'>Sign In</Link>
            <Link className="btn-primary" to='/signuppage'>Sign Up</Link><br/><br/>
            <Link className="btn-secondary" to='/getstarted'>Get Started</Link>
          </div>
        </div>
        <div className="right-image">
          <img src="/Homeimage.png" alt="Study AI" />
        </div>
      </section>

      {/* Section 2 - Features */}
      <section className="section-2 scroll-section">
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
            <img src="/Leaderboard.png" alt="Group Quiz" />
            <h4>Leaderboard & Rankings</h4>
            <p>See how you rank among your peers in real time based on quiz performance.</p>
          </div>
          <div className="feature-card">
            <img src="/Quiz-import.png" alt="Analytics" />
            <h4>Export Quiz as PDF</h4>
            <p>Download generated quizzes with answers in a clean printable format for offline practice.</p>
          </div>
        </div>
      </section>

      {/* Section 3 - About Us */}
      <section className="section-3 scroll-section">
        <h2>👨‍💻 About Us</h2>
        <div className="about-grid">
          <table className="about-table">
            <thead>
              <tr>
                <th>Type</th>
                <th>Details</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Name</td>
                <td>Het Limbani</td>
              </tr>
              <tr>
                <td>Email</td>
                <td>hetlimbani61@gmail.com</td>
              </tr>
              <tr>
                <td>College</td>
                <td>Adani University</td>
              </tr>
              <tr>
                <td>Address</td>
                <td>Ahmedabad, Gujarat, India</td>
              </tr>
              <tr>
                <td>Role</td>
                <td>Full Stack Developer & AI Enthusiast</td>
              </tr>
              <tr>
                <td>Expertise</td>
                <td>React, Node.js, AI/ML, NLP-based applications</td>
              </tr>
              <tr>
                <td>Project Goal</td>
                <td>To revolutionize learning through AI-powered collaboration</td>
              </tr>
            </tbody>
          </table>
        </div>
        <br />
        <h4>Project Info</h4>
        <p class="typewriter-multiline">
  🚀 This platform empowers students to create or join 🤖 AI-driven study groups where they can 📚 upload notes,
  auto-generate quizzes using 🧠 NLP, and compete with friends 🏆 in real-time. Designed for collaborative 🤝 smart learning.
</p>



      </section>

    </div>
  );
};

export default Homepage;
