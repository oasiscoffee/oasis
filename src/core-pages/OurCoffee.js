import React, { useState } from "react";

import '../css/OurCoffee.css';

import logo from '../image/oasis.png';
import MenuBar from "../components/menuBar";
import nameless from '../image/nameless .png';
import MenuPages from "../components/menu-pages";
import { useNavigate } from "react-router-dom";

const OurCoffee = () => {

    const [open, setOpen] = useState(false);

    const navigate = useNavigate();

    const setMenuHandler = () => {
        setOpen(!open);
    }
    return (
        <div className="coffee-container">
            <div className="coffee-about-top-navigation-container">
                <div className="coffee-about-logo-container">
                    <img src={logo} onClick={() => navigate("/")} alt="coffee-about-oasis-logo" />
                </div>
                <div className="coffee-menu-bar-container">
                    <MenuBar setting={setMenuHandler} />
                </div>
            </div>
            <div className="coffee-content-container">
                <div className="coffee-big-image-container">
                    <img src={nameless} />
                </div>
                <div className="coffee-text-container">
                    <div className="coffee-text-title-container">
                        <h2>Coffee</h2>
                    </div>
                    <div className="coffee-text-paragraph-container">
                        <p>At our coffee shop, we proudly use the services of Nameless Coffee's speciality single origin beans sourced from the lush landscapes of Guatemala.
                            These carefully selected beans undergo an impeccable roasting process that accentuates their inherent sweetness.
                            Our dedicated coffee roasters at Nameless Coffee have perfected the art of crafting a cup of coffee that embodies the distinct flavors of the region,
                            delivering a truly delightful and sweeter coffee experience for our discerning customers. We also are 100% are onboard with their mission statement to
                            give the farmers the compensation they deserve and create a relationship with them.</p>
                    </div>
                </div>
            </div>
            <MenuPages setting={open}/>
        </div>
    )
}

export default OurCoffee;

