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
                <div className="contact-top-section-container">
                    <div className="contact-top-section-center-container">
                        <p>Monday-Friday<br></br>Saturday</p>
                        <p>7am-5:00pm<br></br>7am-4:00pm</p>
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