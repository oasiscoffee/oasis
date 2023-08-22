import React, { useState } from "react";
import '../css/Home.css';
import logo from '../image/oasis.png';
import instagram from '../image/instagram.png';

import MenuBar from "../components/menuBar";
import MenuPages from "../components/menu-pages";

function Home() {

    const [open, setOpen] = useState(false);

    const setMenuHandler = () => {
        setOpen(!open)
    }

    return (
        <div className="home-container">
            <div className="top-bar-container">
                <div className="top-bar-instagram-container">
                    <a href="https://www.instagram.com/oasiscoffee.shop/" target="_blank" rel="noreferrer">
                        <img className="top-bar-instagram-logo" src={instagram} alt="home-instagram-logo"></img>
                    </a>
                </div>
                <div className="top-bar-logo-container">
                    <img className="top-bar-logo" src={logo} alt="home-logo"></img>
                </div>
                <MenuBar setting={setMenuHandler} />
            </div>
            <div className="oasis-big-text-container">
                <p>Welcome to Oasis.</p>
            </div>
            <div className="oasis-direction-text-container">
                <p>1017 Main St, Winfield, KS</p>
            </div>
            <MenuPages setting={open} />
        </div>
    )
}

export default Home;