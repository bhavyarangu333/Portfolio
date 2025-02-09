import React from 'react';
import '../assets/styles/Resume.scss' // Import styles for the Resume component

function Resume() {
    return (
        <div id="resume" className="resume-container">
            <h1>My Resume</h1>
            <p>You can view or download my resume below:</p>
            <div className="resume-actions">
                <a 
                    href="https://drive.google.com/file/d/1sH_r-g5og8CIq9Li64X3xq7ftMA8U1c4/view?usp=drive_link" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="view-button"
                >
                    View Resume
                </a>

                <a 
                    href="/Resume.pdf" 
                    download="Bhavya_Rangu_Resume.pdf" 
                    className="download-button"
                >
                    Download Resume
                </a>
            </div>
        </div>
    );
}

export default Resume;
