import React from "react";
import '../css/Menu-drinks.css';

export default function MenuDrinks(){

    const coffee_list = [
        "cappuccino",
        "latte",
        "macchiato",
        "mocha",
        "americano",
        "cortado",
        "cold brew",
        "drip",
        "pour over",
        "decaf"
    ]

    const smoothie_list = [
        "strawberry banana",
        "green smoothie",
        "protein smoothie"
    ]

    const other_list = [
        "strawberry lemonade",
        "hot chocolate"
    ]

    return(
        <div className="menu-drinks-container">
            <div className="menu-drinks-content-container">
                <h1>Coffee</h1>
                {coffee_list.map((value) => {
                    return(
                        <p>{value}</p>
                    )
                })}
                <h1>Smoothies</h1>
                {smoothie_list.map((value) => {
                    return(
                        <p>{value}</p>
                    )
                })}
                <h1>Others</h1>
                {other_list.map((value) => {
                    return(
                        <p>{value}</p>
                    )
                })}
            </div>
        </div>
    )
}