import React from "react";
import "./Footer.css";
import { Button } from "./Button";
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
            <div class="footer-links">
                <div className="footer-link-wrapper">
                    <div class="vl"></div>
                    <div class="footer-link-items">
                        <h4>MLS</h4>
                        <Link to="/">About Us</Link>
                        <Link to="/">Contact Us</Link>
                        <Link to="/">Our Team</Link>
                    </div>
                    <div class="vl"></div>
                    <div class="footer-link-items">
                        <h4>LEGAL</h4>
                        <Link to="/">Privacy Policy</Link>
                        <Link to="/">Terms & Conditions</Link>
                        <Link to="/">Copyright Compliance Policy</Link>
                    </div>
                </div>
                <div className="footer-link-wrapper">
                    <div class="vl"></div>
                    <div class="footer-link-items">
                        <h4>Parters</h4>
                        <Link to="/">University 1</Link>
                        <Link to="/">NPO 1</Link>
                    </div>
                    <div class="vl"></div>
                    <div class="footer-link-items">
                        <h4>Social Media</h4>
                        <Link to="/">Instagram</Link>
                        <Link to="/">Facebook</Link>
                        <Link to="/">LinkedIn</Link>
                        <Link to="/">WeChat</Link>
                        <Link to="/">Twitter</Link>
                    </div>
                </div>
            </div>

            <section class="social-media">
                <div class="social-media-wrap">
                    <div class="footer-logo">
                        <Link to="/" className="social-logo">
                            MLS
                        </Link>
                    </div>
                    <div class="social-icons">
                        <Link
                            class="social-icon-link facebook"
                            to="/"
                            target="_blank"
                            aria-label="Facebook"
                        >
                            <i class="fab fa-facebook-f" />
                        </Link>
                        <Link
                            class="social-icon-link instagram"
                            to="/"
                            target="_blank"
                            aria-label="Instagram"
                        >
                            <i class="fab fa-instagram" />
                        </Link>
                        <Link
                            class="social-icon-link weixin"
                            to="/"
                            target="_blank"
                            aria-label="Wexin"
                        >
                            <i class="fab fa-weixin" />
                        </Link>
                        <Link
                            class="social-icon-link twitter"
                            to="/"
                            target="_blank"
                            aria-label="Twitter"
                        >
                            <i class="fab fa-twitter" />
                        </Link>
                        <Link
                            class="social-icon-link twitter"
                            to="/"
                            target="_blank"
                            aria-label="LinkedIn"
                        >
                            <i class="fab fa-linkedin" />
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Footer;
