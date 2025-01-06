import React from "react";
import "./Portfolio.css";

function Portfolio() {
    return (
        <div className="portfolio">
            <header className="header">
                <h1>Welcome to My Portfolio</h1>
            </header>

            <section className="section">
                <h2>Introduction</h2>
                <p>
                    Hi! I'm [Your Name], a passionate developer skilled in web development, data structures, and algorithms.
                </p>
            </section>

            <section className="section">
                <h2>Skills</h2>
                <ul>
                    <li>React.js</li>
                    <li>Node.js</li>
                    <li>Docker & Kubernetes</li>
                    <li>DevOps Tools</li>
                    <li>Git & Version Control</li>
                </ul>
            </section>

            <section className="section">
                <h2>Resume</h2>
                <a href="resume.pdf" target="_blank" rel="noopener noreferrer">Download My Resume</a>
            </section>

            <section className="section">
                <h2>Contact</h2>
                <div className="contact-buttons">
                    <a href="https://linkedin.com/in/shruti-varshney-5823a0220" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                    <a href="https://github.com/Shruti-Varshney" target="_blank" rel="noopener noreferrer">GitHub</a>
                    <a href="mailto:2002shrutivarshney@gmail.com">Email Me</a>
                </div>
            </section>

            <section className="section">
                <h2>Chatbot</h2>
                <iframe
                    src="https://your-chatbot-embedded-url"
                    title="Chatbot"
                    width="100%"
                    height="400px"
                ></iframe>
            </section>
        </div>
    );
}

export default Portfolio;
