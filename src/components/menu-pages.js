import React from "react";
import '../css/menu-pages.css';

import logo from '../image/oasis.png';
import Shameless from "../components/Shameless.js";

export default function MenuPages(props) {
    return (
        <div className={(props.setting) ? "menu-routes-container-open" : "menu-routes-container-closed"}>
            <div className="menu-routes-logo-container">
                <img className={(props.setting) ? "menu-routes-logo-open" : "menu-routes-logo-closed"}  src={logo}></img>
            </div>
            <div className="menu-routes-container">
                <div className={(props.setting) ? "menu-routes-list-container-open" : "menu-routes-list-container-closed"}>
                        <a href="/menu" style={{textDecoration : "none" }}><p>Menu</p></a>
                        <p>About us</p>
                        <p>Our coffee</p>
                        <p>Contact</p>
                </div>
            </div>
            <Shameless setting={props.setting}/>
        </div>
    )
}