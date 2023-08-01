import React, { useState } from "react";
import '../css/Menu.css';
import MenuBar from "../components/menuBar";
import logo from '../image/oasis.png';
import MenuList from "../components/Menu-list";

export default function Menu() {

    const [open, setOpen] = useState(false);

    const setMenuHandler = () => {
        setOpen(!open)
    }

    return (
        <div className="menu-container">
            <div className="menu-title-container">
                <p>FOOD</p>
            </div>
            <div className="menu-right-side-container">
                <div className="menu-logo-navigation-container">
                    <div className="menu-logo-container">
                        <img src={logo}></img>
                    </div>
                    <div className="menu-menu-bar-container">
                        <MenuBar settings={setMenuHandler} />
                    </div>
                </div>
                <div className="menu-content-container">
                    <div className="menu-content-position-container">
                        <div className="menu-content-filter-container">
                            <p>
                                Main
                            </p>
                            <p>
                                Specials
                            </p>
                        </div>
                        <MenuList/>
                    </div>
                </div>
            </div>
        </div>
    )
}