import React from "react";
import mock02 from '../assets/images/mock02.png';
import mock05 from '../assets/images/mock05.png';
import '../assets/styles/Achievements.scss';

function Achievements() {
    return (
        <div className="achievements-container" id="achievements">
            <h1>Achievements</h1>
            <div className="achievements-grid">
                {/* First Cert */}
                <div className="achievement">
                    <a href="https://www.credly.com/badges/c9fbe9bd-e4e8-48b0-9dda-f837d84f3b46/linked_in_profile" target="_blank" rel="noreferrer">
                        <img src={mock02} className="zoom" alt="Screenshot of the AWS Certified Solutions Architect " width="100%" />
                    </a>
                    <a href="https://www.credly.com/badges/c9fbe9bd-e4e8-48b0-9dda-f837d84f3b46/linked_in_profile" target="_blank" rel="noreferrer">
                        <h2>AWS Certified Solutions Architect</h2>
                    </a>
                </div>
                
                {/* Second Cert */}
                <div className="achievement">
                    <a href="https://catalog-education.oracle.com/ords/certview/sharebadge?id=F0D2154E089363845B816EC265C92A2DF85D4F1B987A9380589AECC6EFD588C8" target="_blank" rel="noreferrer">
                        <img src={mock05} className="zoom" alt="Screenshot of the Generative AI Certified" width="100%" />
                    </a>
                    <a href="https://catalog-education.oracle.com/ords/certview/sharebadge?id=F0D2154E089363845B816EC265C92A2DF85D4F1B987A9380589AECC6EFD588C8" target="_blank" rel="noreferrer">
                        <h2>Oracle Cloud Infrastructure 2024 Generative AI Certified Professional </h2>
                    </a>
                </div>
                
                {/* You can add more project blocks here... */}
            </div>
        </div>
    );
}
export default Achievements;