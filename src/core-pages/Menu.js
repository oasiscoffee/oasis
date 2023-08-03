import React, { useState } from "react";
import '../css/Menu.css';
import MenuBar from "../components/menuBar";
import logo from '../image/oasis.png';
import MenuList from "../components/Menu-list";
import MenuPages from "../components/menu-pages";
import { useNavigate } from "react-router-dom";
import MenuSpecials from "../components/Menu-Specials";

export default function Menu() {

    const [open, setOpen] = useState(false);

    const [category, setCategory] = useState(false);

    const navigate = useNavigate();

    const setMenuHandler = () => {
        setOpen(!open);
    }

    const setCategoryHandler = (category) => {
        setCategory(category);
    }

    return (
        <div className="menu-container">
            <div className="menu-title-container">
                <p>FOOD</p>
            </div>
            <div className="menu-right-side-container">
                <div className="menu-logo-navigation-container">
                    <div className="menu-logo-container">
                        <img onClick={() => navigate("/")} src={logo}></img>
                    </div>
                    <div className="menu-menu-bar-container">
                        <MenuBar setting={setMenuHandler} />
                    </div>
                </div>
                <div className="menu-title-container-mobile">
                    <p>FOOD</p>
                </div>
                <div className="menu-content-container">
                    <div className="menu-content-position-container">
                        <div className="menu-content-filter-container">
                            <p style={(category) ? {} : { color: "rgba(256, 256, 256, 0.5)" }} onClick={() => setCategoryHandler(true)}>
                                Main
                            </p>
                            <p style={(category) ? { color: "rgba(256, 256, 256, 0.5)" } : {}} onClick={() => setCategoryHandler(false)}>
                                Specials
                            </p>
                        </div>
                        {(category) ? <MenuList /> : <MenuSpecials/>}
                    </div>
                </div>
            </div>
            <MenuPages setting={open}/>
        </div>
    )
}