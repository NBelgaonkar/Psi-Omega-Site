import React from "react";

const Footer = () => {
    return (
        <footer style={{backgroundColor: "silver", color: "black", display: "flex", justifyContent: "space-between", alignItems: "center", padding: "10px"}}>
            <p>© 2023 RPI CogSci</p>
            <nav>
                <ul style={{listStyle: "none", display: "flex"}}>
                    <li style={{marginRight: "15px"}}>Privacy Policy</li>
                    <li>Terms of Service</li>
                </ul>
            </nav>
        </footer>
    );
};

export default Footer;
