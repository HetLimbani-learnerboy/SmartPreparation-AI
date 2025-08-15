import React, { useState, useEffect } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./Dashboardpage.css";

const Dashboard = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [date, setDate] = useState(new Date());

    const toggleSidebar = () => {
        setSidebarOpen(!sidebarOpen);
    };

    // Close sidebar when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (
                sidebarOpen &&
                !event.target.closest(".sidebar") &&
                !event.target.closest(".menu-btn")
            ) {
                setSidebarOpen(false);
            }
        };
        document.addEventListener("click", handleClickOutside);
        return () => {
            document.removeEventListener("click", handleClickOutside);
        };
    }, [sidebarOpen]);

    return (
        <div className="dashboard-container">

            {/* Sidebar */}
            <div className={`sidebar ${sidebarOpen ? "open" : ""}`}>
                <ul>
                    <li>📊 Dashboard</li>
                    <li>🎥 Lectures</li>
                    <li>🤖 Auto Quiz Generator</li>
                    <li>📚 Topic-based Quiz Generator</li>
                    <li>👥 Group</li>
                    <li>💬 Message</li>
                    <li>🏆 Leaderboard</li>
                </ul>
                <div className="profile-section">
                    <img src="/ProfileAcc.png" alt="Profile" />
                    <p>User Account</p>
                </div>
            </div>

            {/* Main Content */}
            <div className="main-content">
                {!sidebarOpen && (
                    <button
                        className="menu-btn"
                        onClick={toggleSidebar}
                    >
                        ☰
                    </button>
                )}

                <h1>Smart Preparation AI Dashboard</h1>

                {/* Info Cards */}
                <div className="info-grid">
                    <div className="information-container">
                        <p><strong>Name:</strong> Het Limbani</p>
                        <p><strong>USN:</strong> 1AUA23BCS063</p>
                        <p><strong>Enroll. No:</strong> 230106</p>
                    </div>
                    <div className="information-container">
                        <p><strong>Course:</strong> CSE-(AI&ML)</p>
                        <p><strong>Batch:</strong> 2023-2027</p>
                    </div>
                </div>

                {/* Add Task */}
                <div className="addtask-container">
                    <button className="add-task-btn">+ Add Task</button>
                </div>

                {/* Task Table */}
                <div className="table-container">
                    <table>
                        <thead>
                            <tr>
                                <th>Your Schedule</th>
                                <th>Details</th>
                                <th>Complete</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Study Session</td>
                                <td>It is work</td>
                                <td><button className="complete-btn">Complete</button></td>
                                <td><button className="delete-btn">Delete</button></td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                {/* Calendar */}
               <div className="calendar-container">
                    <h2>Calendar</h2>
                    <Calendar onChange={setDate} value={date} />
                    <p className="selected-date">
                        Selected Date: {date.toDateString()}
                    </p>
                    </div>
            </div>
        </div>
    );
};

export default Dashboard;
