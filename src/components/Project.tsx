import React from "react";
import mock01 from '../assets/images/mock01.png';
import mock03 from '../assets/images/mock03.png';
import mock04 from '../assets/images/mock04.png';
import mock06 from '../assets/images/mock06.png';
import mock09 from '../assets/images/mock09.png';
import mock10 from '../assets/images/mock10.png';
import '../assets/styles/Project.scss';

function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1>Personal Projects</h1>
        <div className="projects-grid">
            <div className="project">
                <a href="https://github.com/bhavyarangu333/chatbot.git" target="_blank" rel="noreferrer"><img src={mock10} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/bhavyarangu333/chatbot.git" target="_blank" rel="noreferrer"><h2>Chat Mate</h2></a>
                <p>Developed an intelligent chatbot using React, Node.js, OpenAI API, and MongoDB for seamless conversational experiences.</p>
            </div>
            <div className="project">
                <a href="https://github.com/bhavyarangu333/Decentralized-voting-application-blockchain.git" target="_blank" rel="noreferrer"><img src={mock09} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/bhavyarangu333/Decentralized-voting-application-blockchain.git" target="_blank" rel="noreferrer"><h2>Decentralized Voting Application</h2></a>
                <p>Developed a decentralized voting application using Hardhat, MongoDB, Volta faucet, and JavaScript, ensuring secure, transparent, and tamper-proof elections.</p>
            </div>
            <div className="project">
                <a href="https://github.com/bhavyarangu333/FaceRecog-API.git" target="_blank" rel="noreferrer"><img src={mock06} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/bhavyarangu333/FaceRecog-API.git" target="_blank" rel="noreferrer"><h2>FaceRecog-API</h2></a>
                <p>Collaborated on developing a Face Recognition API, enhancing authentication and security features for seamless integration into applications.</p>
            </div>
            <div className="project">
                <a href="https://github.com/bhavyarangu333/Real-Time-Data-Processing-of-Split-wise-Data-using-Big-Data-Technologies-.git" target="_blank" rel="noreferrer"><img src={mock04} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/bhavyarangu333/Real-Time-Data-Processing-of-Split-wise-Data-using-Big-Data-Technologies-.git" target="_blank" rel="noreferrer"><h2>Real-Time Data Processing of Splitwise Data</h2></a>
                <p>Developed a real-time data processing system for analyzing Splitwise data, leveraging Hadoop for storage, Spark for distributed processing, and Kafka for data streaming, enabling efficient handling of large-scale financial datasets.</p>
            </div>
            <div className="project">
                <a href="https://github.com/bhavyarangu333/e-commerce-bookstore.git" target="_blank" rel="noreferrer"><img src={mock03} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/bhavyarangu333/e-commerce-bookstore.git" target="_blank" rel="noreferrer"><h2>E-Commerce-Bookstore</h2></a>
                <p>
                Developed an e-commerce bookstore platform using ASP.NET Core 8, .NET Core MVC, and SQL Server for seamless product management and secure transactions.</p>
            </div>
            <div className="project">
                <a href="https://github.com/bhavyarangu333/Restaurant-Menu.git" target="_blank" rel="noreferrer"><img src={mock01} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/bhavyarangu333/Restaurant-Menu.git" target="_blank" rel="noreferrer"><h2>Restaurant Menu</h2></a>
                <p>Developed a dynamic restaurant menu application featuring interactive UI and real-time updates using React Native and Expo.</p>
            </div>
        </div>
    </div>
    );
}

export default Project;