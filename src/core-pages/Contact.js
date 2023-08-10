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
                <div className="contact-top-sentence-container">
                    <h1>Please contact us anytime!</h1>
                </div>
                <div className="contact-icons-container">
                    <a href="mailto:oasiscoff33shop@gmail.com" className="contact-icon-image-container">
                        <img className="email-target" src={email}></img>
                        </a>
                    <a href="https://www.facebook.com/profile.php?id=100094599481365" target="_blank"className="contact-icon-image-container">
                        <img src={facebook}></img>
                        </a>
                    <a href="https://www.instagram.com/oasiscoffee.shop/" target="blank_" className="contact-icon-image-container">
                        <img src={instagram}></img>
                        </a>
                </div>
                <div className="contact-bottom-sentence-container">
                    <h3>
                    Hey! As new business owners we would love to hear any of your feedback!
                    </h3>
                </div>
            </div>
            <MenuPages setting={open} />
        </div>
    )
}

export default Contact;