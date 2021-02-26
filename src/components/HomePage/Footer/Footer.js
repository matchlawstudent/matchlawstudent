import React from "react";
import "./Footer.css";
import { Button } from "../helpers/Button/Button";
import { Link } from "react-router-dom";

function Footer() {
    return (
        <div className="footer-container">
            <section className="footer-subscription">
                <p className="footer-subscription-heading">
                    Join the MLS Community and let us help you!
                </p>
                <p className="footer-subscription-text">
                    You can unsubscribe at any time.
                </p>
                <div className="input-areas">
                    <form>
                        <input
                            className="footer-input"
                            name="email"
                            type="email"
                            placeholder="Your Email"
                        />
                        <Button buttonStyle="btn--whiteOutline">
                            Subscribe
                        </Button>
                    </form>
                </div>
            </section>
            <div className="footer-links">
                <div className="footer-link-wrapper">
                    <div className="vl"></div>
                    <div className="footer-link-items">
                        <h2>MLS</h2>
                        <Link to="/">About Us</Link>
                        <Link to="/">Contact Us</Link>
                        <Link to="/">Our Team</Link>
                    </div>
                    <div className="vl"></div>
                    <div className="footer-link-items">
                        <h2>LEGAL</h2>
                        <Link to="/">Privacy Policy</Link>
                        <Link to="/">Terms & Conditions</Link>
                        <Link to="/">Copyright Compliance Policy</Link>
                    </div>
                </div>
                <div className="footer-link-wrapper">
                    <div className="vl"></div>
                    <div className="footer-link-items">
                        <h2>Parters</h2>
                        <Link to="/">University 1</Link>
                        <Link to="/">NPO 1</Link>
                    </div>
                    <div className="vl"></div>
                    <div className="footer-link-items">
                        <h2>Social Media</h2>
                        <Link to="/">Instagram</Link>
                        <Link to="/">Facebook</Link>
                        <Link to="/">LinkedIn</Link>
                        <Link to="/">WeChat</Link>
                        <Link to="/">Twitter</Link>
                    </div>
                </div>
            </div>

            <section className="social-media">
                <div className="social-media-wrap">
                    <div className="footer-logo">
                        <Link to="/" className="social-logo">
                            MLS
                        </Link>
                    </div>
                    <div className="social-icons">
                        <Link
                            className="social-icon-link facebook"
                            to="/"
                            target="_blank"
                            aria-label="Facebook"
                        >
                            <i className="fab fa-facebook-f" />
                        </Link>
                        <Link
                            className="social-icon-link instagram"
                            to="/"
                            target="_blank"
                            aria-label="Instagram"
                        >
                            <i className="fab fa-instagram" />
                        </Link>
                        <Link
                            className="social-icon-link weixin"
                            to="/"
                            target="_blank"
                            aria-label="Wexin"
                        >
                            <i className="fab fa-weixin" />
                        </Link>
                        <Link
                            className="social-icon-link twitter"
                            to="/"
                            target="_blank"
                            aria-label="Twitter"
                        >
                            <i className="fab fa-twitter" />
                        </Link>
                        <Link
                            className="social-icon-link twitter"
                            to="/"
                            target="_blank"
                            aria-label="LinkedIn"
                        >
                            <i className="fab fa-linkedin" />
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Footer;