import React from 'react';
import './Footer.css';

const Footer = ({ isVip = false }) => {
    return (
        <footer className={`footer ${isVip ? 'footer-vip' : ''}`}>
            <div className="footer-container">
                <div className="footer-brand">
                    <span className="footer-logo">SHINING WHEELS</span>
                    <p className="footer-desc">
                        Premium mobile detailing service for those who expect nothing but excellence. Miami's finest finish.
                    </p>
                    <div className="footer-socials">
                        {/* Dummy Icons */}
                        <div className="social-icon">IG</div>
                        <div className="social-icon">FB</div>
                        <div className="social-icon">WA</div>
                    </div>
                </div>

                <div className="footer-links">
                    <div className="footer-col">
                        <h4>Services</h4>
                        <ul>
                            <li><a href="#services">Essentials</a></li>
                            <li><a href="#services">Standard</a></li>
                            <li><a href="#services">Pro</a></li>
                            <li><a href="#services">First Class</a></li>
                        </ul>
                    </div>
                    <div className="footer-col">
                        <h4>Company</h4>
                        <ul>
                            <li><a href="#">About Us</a></li>
                            <li><a href="#">Contact</a></li>
                            <li><a href="#">Privacy Policy</a></li>
                            <li><a href="#">Terms of Service</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} Shining Wheels. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
