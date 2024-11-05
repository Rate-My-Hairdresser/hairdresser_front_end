import React from 'react';
import Copyright from './copyright';
import NavLinks from './nav_links';
import LegalLinks from './legal_links';
import Newsletter from './newsletter';

const Footer = () => {
    return (
      <div style={{ 
      padding: '20px', 
      textAlign: 'center', 
      backgroundColor: '#f1f1f1', 
      borderTop: '1px solid #ddd', 
      margin: '0', // Ensure no margin around the footer
      paddingBottom: '5px' // Adjust padding as needed
    }}>
        <Copyright />
        <NavLinks />
        <LegalLinks />
        <Newsletter />
      </div>
    );
  };
  
  export default Footer;