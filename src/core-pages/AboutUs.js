import React, { useState } from "react";

import '../css/AboutUs.css';

import logo from '../image/oasis.png';
import MenuBar from "../components/menuBar";
import MenuPages from "../components/menu-pages";
import { useNavigate } from "react-router-dom";

const AboutUs = () => {

    const [open, setOpen] = useState(false);

    const navigate = useNavigate();

    const setMenuHandler = () => {
        setOpen(!open);
    }

    return (
        <div className="about-container">
            <div className="coffee-about-top-navigation-container">
                <div className="coffee-about-logo-container">
                    <img src={logo} onClick={() => { navigate("/")}}alt="coffee-about-oasis-logo" />
                </div>
                <div className="coffee-menu-bar-container">
                    <MenuBar setting={setMenuHandler} />
                </div>
            </div>
            <div className="about-content-container">
                <div className="about-text-container">
                    <div className="about-text-title-container">
                        <h2>Hello</h2>
                    </div>
                    <div className="about-text-paragraph-container">
                        <p>
                        Welcome to Oasis Coffee Shop, brought to life by siblings Rubi, Lesly, and Emmanuel. As a tight-knit family, we're thrilled to invite you into our coffee haven, nestled right here in our hometown of Winfield. With shared laughter, dreams, and a passion for crafting delightful experiences, we're joyfully serving up more than just coffee and delicious food items - we're sharing a piece of our hearts with every sip and bite.<br></br><br></br>

Growing up together in Winfield, we've seen the power of community firsthand, and it's with immense excitement that we step into this role of serving you. Our coffee shop isn't just a place to grab a quick drink; it's an oasis where connections are nurtured, conversations flow, and smiles are exchanged.<br></br><br></br>

The credit for our journey goes to our parents, who instilled in us the values of hard work, dedication, and the importance of fostering relationships. Their guidance has shaped Oasis Coffee Shop into what it is today – a warm, welcoming space that pays homage to our roots while embracing the future. So whether you're seeking a serene spot to unwind or a vibrant space to meet with friends, we invite you to join us at Oasis Coffee Shop. Together, we'll continue the tradition of community, family, and a shared love for the simple joys of life – all in the heart of Winfield.<br></br><br></br>
                        </p>
                    </div>
                    <div className="about-text-subtext-container">
                        <p>
                            Big thanks to our help!
                        </p>
                    </div>
                </div>
                <div className="about-big-image-container">
                    <div className="img-placeholder"></div>
                </div>
            </div>
            <MenuPages setting={open}/>
        </div>
    )
}

export default AboutUs;