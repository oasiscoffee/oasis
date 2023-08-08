import React, { useState } from "react";

import '../css/AboutUs.css';

import logo from '../image/oasis.png';
import MenuBar from "../components/menuBar";
import MenuPages from "../components/menu-pages";

const AboutUs = () => {

    const [open, setOpen] = useState(false);

    const setMenuHandler = () => {
        setOpen(!open);
    }

    return (
        <div className="about-container">
            <div className="coffee-about-top-navigation-container">
                <div className="coffee-about-logo-container">
                    <img src={logo} alt="coffee-about-oasis-logo" />
                </div>
                <div className="coffee-menu-bar-container">
                    <MenuBar setting={setMenuHandler} />
                </div>
            </div>
            <div className="about-content-container">
                <div className="about-text-container">
                    <div className="about-text-title-container">
                        <h2>Hello</h2>
                    </div>
                    <div className="about-text-paragraph-container">
                        <p>
                            fkjslanfklknaldnflsanfkldsanfls
                        </p>
                    </div>
                </div>
                <div className="about-big-image-container">
                    <div className="img-placeholder"></div>
                </div>
            </div>
            <MenuPages setting={open}/>
        </div>
    )
}

export default AboutUs;