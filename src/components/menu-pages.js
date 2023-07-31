import React from "react";
import '../css/menu-pages.css';

import logo from '../image/oasis.png';

export default function MenuPages(props) {
    return (
        <div className={(props.setting) ? "menu-container-open" : "menu-container-closed"}>
            <div className="menu-routes-logo-container">
                <img className="menu-routes-logo" src={logo}></img>
            </div>
            <div className="menu-routes-container">
                <div className={(props.setting) ? "menu-routes-list-container-open" : "menu-routes-list-container-closed"}>
                        <p>Menu</p>
                        <p>About us</p>
                        <p>Our coffee</p>
                        <p>Contact</p>
                </div>
            </div>
        </div>
    )
}