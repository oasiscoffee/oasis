import React, { useState } from "react";
import '../css/Menu.css';
import MenuBar from "../components/menuBar";
import logo from '../image/oasis.png';
import MenuList from "../components/Menu-list";
import MenuPages from "../components/menu-pages";
import { useNavigate } from "react-router-dom";
import MenuSpecials from "../components/Menu-Specials";
import MenuDrinks from "../components/menu-drinks";
import Events from "../components/events";

export default function Menu() {

    const menuComponents = {
        mains: <MenuList />,
        specials: <MenuSpecials />,
        drinks: <MenuDrinks />,
        events: <Events />,
    };

    const titles = {
        mains: "FOOD",
        specials: "FOOD",
        drinks: "DRINKS",
        events: "EVENTS"
    }

    const [open, setOpen] = useState(false);

    const [category, setCategory] = useState("drinks");

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
                <p style={{fontSize : '13vw'}}>{titles[category]}</p>
            </div>
            <div className="menu-right-side-container">
                <div className="menu-logo-navigation-container">
                    <div className="menu-logo-container">
                        <img onClick={() => navigate("/")} src={logo} alt="menu-logo"></img>
                    </div>
                    <div className="menu-menu-bar-container">
                        <MenuBar setting={setMenuHandler} />
                    </div>
                </div>
                <div className="menu-title-container-mobile">
                    <p>{titles[category]}</p>
                </div>
                <div className="menu-content-container">
                    <div className="menu-content-position-container">
                        <div className="menu-content-filter-container">
                            <p style={(category === "drinks") ? {} : { color: "rgba(256, 256, 256, 0.5)" }} onClick={() => setCategoryHandler("drinks")}>
                                Coffee&More
                            </p>
                            <p style={(category === "mains") ? {} : { color: "rgba(256, 256, 256, 0.5)" }} onClick={() => setCategoryHandler("mains")}>
                                Main
                            </p>
                            <p style={(category === "specials") ? {} : { color: "rgba(256, 256, 256, 0.5)" }} onClick={() => setCategoryHandler("specials")}>
                                Specials
                            </p>
                            <p style={(category === "events") ? {} : { color: "rgba(256, 256, 256, 0.5)" }} onClick={() => setCategoryHandler("events")}>
                                Events
                            </p>
                        </div>
                        {menuComponents[category] || <></>}
                    </div>
                </div>
            </div>
            <MenuPages setting={open} />
        </div>
    )
}