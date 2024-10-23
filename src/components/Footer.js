import React from "react";

// Styles object to handle inline CSS
const styles = {
  footer: {
    backgroundColor: "silver", // Background color of the footer
    color: "black", // Text color in the footer
    display: "flex", // Flexbox for layout
    justifyContent: "space-between", // Spreads items evenly across the footer
    alignItems: "center", // Vertically centers items
    padding: "10px", // Padding inside the footer for spacing
  },
  ul: {
    listStyle: "none", // Removes bullets from the list
    display: "flex", // Aligns list items in a row
    margin: 0, // Removes the default margin
    padding: 0, // Removes the default padding
  },
  li: {
    marginRight: "15px", // Adds space between list items
  },
  lastLi: {
    marginRight: 0, // No margin on the last item to keep alignment neat
  }
};

const Footer = () => {
  return (
    <footer style={styles.footer}>
      {/* Footer text with the year */}
      <p>© 2023 DKE Psi Omega</p>
      
      {/* Navigation links for policies */}
      <nav>
        <ul style={styles.ul}>
          {/* List item for Privacy Policy */}
          <li style={styles.li}><a href="/privacy-policy">Privacy Policy</a></li>
          {/* Last list item for Terms of Service */}
          <li style={styles.lastLi}><a href="/terms-of-service">Terms of Service</a></li>
        </ul>
      </nav>
    </footer>
  );
};

export default Footer;
