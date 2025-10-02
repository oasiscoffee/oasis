import React, { useState } from "react";
import '../css/Contact.css';

import logo from '../image/oasis.png';
import MenuBar from "../components/menuBar";
import MenuPages from "../components/menu-pages";
import { useNavigate } from "react-router-dom";

import email from '../icons/email.png';
import facebook from '../icons/facebook.png';
import instagram from '../icons/instagram.png';


const Contact = () => {

    const [open, setOpen] = useState(false);

    const navigate = useNavigate();

    const setMenuHandler = () => {
        setOpen(!open);
    }

    return (
        <div className="contact-container">
            <div className="coffee-about-top-navigation-container">
                <div className="coffee-about-logo-container">
                    <img src={logo} onClick={() => { navigate("/") }} alt="coffee-about-oasis-logo" />
                </div>
                <div className="coffee-menu-bar-container">
                    <MenuBar setting={setMenuHandler} />
                </div>
            </div>
            <div className="contact-content-container">
                <div style={{
                    border: 'white 2px ', 
                    display: 'flex',
                    justifyContent: 'center',
                    width: 'auto',
                    }}>
                        <link
                            rel="stylesheet"
                            href="https://cdn6.localdatacdn.com/badges/restaurantji/css/circle_v5_2025.css?v=51295"
                        />

                        <div
                            id="circle_v5_2025_wrap"
                            style={{ width: "calc(250px * 1)", height: "calc(250px * 1)" }}
                        >
                            <div id="circle_v5_2025" tabIndex={0}>
                                <div
                                    id="circletype_v5_2025_brand_name"
                                    className="autoFontSize"
                                    style={{ fontSize: "calc(12.5px * 1)" }}
                                >
                                    <a
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        href="https://www.restaurantji.com/ks/winfield/oasis-coffee-shop-/"
                                        className="ahref_emprty_area"
                                        style={{ color: "#000" }}
                                    >
                                        Oasis Coffee Shop
                                    </a>
                                    <hr id="restaurantji_badge_separator" />
                                    <div
                                        className="circle_badge_category"
                                        style={{ fontSize: "calc(13px * 1)" }}
                                    >
                                        Coffee
                                    </div>
                                </div>
                                <a
                                    href="https://www.restaurantji.com/ks/winfield/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    id="rewards_link"
                                >
                                    Restaurantji
                                </a>
                            </div>
                        </div>
                    </div>
                <div className="contact-top-section-container">
                    <div className="contact-top-section-center-container">
                        <p>Monday-Friday<br></br>Saturday</p>
                        <p>7am-4:00pm<br></br>8am-2:00pm</p>
                    </div>
                </div>
                <div className="contact-bottom-section-container">
                    <div className="contact-top-sentence-container">
                        <p>Check us out on social media to see what we are up to!
                        </p>
                    </div>
                    <div className="contact-icons-container">
                        <a href="mailto:oasiscoff33shop@gmail.com" className="contact-icon-image-container">
                            <img className="email-target" alt="email" src={email}></img>
                        </a>
                        <a href="https://www.facebook.com/profile.php?id=100094599481365" target="_blank" rel="noreferrer" className="contact-icon-image-container">
                            <img src={facebook} alt="facebook-logo"></img>
                        </a>
                        <a href="https://www.instagram.com/oasiscoffee.shop/" target="blank_" className="contact-icon-image-container">
                            <img src={instagram} alt="instagram-logo"></img>
                        </a>
                    </div>
                    <div className="contact-bottom-sentence-container">
                        <p>
                            Hey! As new business owners we would love to hear any of your feedback!
                        </p>
                    </div>
                </div>
            </div>
            <MenuPages setting={open} />
        </div>
    )
}

export default Contact;
