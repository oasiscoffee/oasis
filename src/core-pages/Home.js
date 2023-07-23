import React from "react";
import '../css/Home.css';
import logo from '../image/oasis.png';
import instagram from '../image/instagram.png';

function Home() {

    return (
        <div className="home-container">
            <div className="top-bar-container">
                <div className="top-bar-instagram-container">
                    <img className="top-bar-instagram-logo" src={instagram}></img>
                </div>
                <div className="top-bar-logo-container">
                    <img className="top-bar-logo" src={logo}></img>
                </div>
                <div className="top-bar-menu-button-container">
                    <input type="checkbox" id="checkbox1" class="checkbox1 visuallyHidden"/>
                        <label for="checkbox1">
                            <div class="hamburger hamburger1">
                                <span class="bar bar1"></span>
                                <span class="bar bar2"></span>
                                <span class="bar bar3"></span>
                                <span class="bar bar4"></span>
                            </div>

                        </label>
                </div>
            </div>
        </div>
    )
}

export default Home;