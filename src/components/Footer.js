import React from "react";

// Styles object
const styles = {
  footer: {
    backgroundColor: "silver",
    color: "black",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px",
  },
  ul: {
    listStyle: "none",
    display: "flex",
    margin: 0, // Remove default margin
    padding: 0, // Remove default padding
  },
  li: {
    marginRight: "15px",
  },
  lastLi: {
    marginRight: 0, // Last item doesn't need right margin
  }
};

const Footer = () => {
    return (
        <footer style={styles.footer}>
            <p>© 2023 DKE Psi Omega</p>
            <nav>
                <ul style={styles.ul}>
                    <li style={styles.li}>Privacy Policy</li>
                    <li style={styles.lastLi}>Terms of Service</li>
                </ul>
            </nav>
        </footer>
    );
};

export default Footer;