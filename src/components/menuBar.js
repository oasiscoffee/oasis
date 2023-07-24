import React, { useState } from "react";
import '../css/MenuBar.css';

export default function MenuBar(props){

    return(
        <div className="top-bar-menu-button-container">
                    <input type="checkbox" id="checkbox1" className="checkbox1 visuallyHidden"/>
                        <label htmlFor="checkbox1">
                            <div onClick={props.setting} className="hamburger hamburger1">
                                <span className="bar bar1"></span>
                                <span className="bar bar2"></span>
                                <span className="bar bar3"></span>
                                <span className="bar bar4"></span>
                            </div>

                        </label>
                </div>
    )
}