import React from "react";
import '../css/menu-pages.css';

import logo from '../image/oasis.png';
import Shameless from "../components/Shameless.js";

export default function MenuPages(props) {
    return (
        <div className={(props.setting) ? "menu-routes-container-open" : "menu-routes-container-closed"}>
            <div className="menu-routes-logo-container">
                <img className={(props.setting) ? "menu-routes-logo-open" : "menu-routes-logo-closed"}  src={logo} alt="menu-pages-logo"></img>
            </div>
            <div className="menu-routes-container">
                <div className={(props.setting) ? "menu-routes-list-container-open" : "menu-routes-list-container-closed"}>
                        <a href="/menu" style={{textDecoration : "none" }}><p>Menu</p></a>
                        <a href="/about" style={{textDecoration : "none" }}><p>About us</p></a>
                        <a href="/coffee" style={{textDecoration : "none" }}><p>Our coffee</p></a>
                        <a href="/contact" style={{textDecoration : "none" }}><p>Hours&Contact</p></a>
                </div>
            </div>
            <Shameless setting={props.setting}/>
        </div>
    )
}