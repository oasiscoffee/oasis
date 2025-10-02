import React from "react";
import '../css/Menu-list.css';

const AvocadoToast = {
    "Option 1": "avocado spread, everything seasoning, tomato, parsely, spinach",
    "Option 2": "cream cheese spread, avocado spread, everything seasoning, egg, parsley, red pepper flakes",
    "Option 3": "choice of bread, avocado spread, everything seasoning"
}

const Others = {
    "Option 4": "sweet toast, almond butter, strawberries, banana"
}

const BagelOptions = {
  "Option 1": "everything bagel, cream cheese spread, red pepper flakes, honey, turkey, red onion, spinach",
  "Option 2": "avocado spread, baby spinach, pesto, egg, honey mustard, red pepper flakes",
  "Option 3": "choice of bagel, cream cheese spread",
  "Option 4": "eggs, sausage, cheese and maple"
}

export default function MenuList() {
    return (
        <div className="actual-menu-container">
            <div className="actual-menu-left-side">
                <div className="actual-menu-left-list-container">
                    <h1>Avocado Toast</h1>
                    <p>Sourdough, wheat</p>
                    {Object.entries(AvocadoToast).map((val) => (
                        <>
                            <h2>{val[0]}</h2>
                            <p>{val[1]}</p>
                        </>
                    ))}
                </div>
                <div className="actual-menu-left-list-container">
                    <h1>Other</h1>
                    {Object.entries(Others).map((val) => (
                        <>
                            <h2>{val[0]}</h2>
                            <p>{val[1]}</p>
                        </>
                    ))}
                </div>
            </div>
            <div className="actual-menu-right-side">
                <div className="actual-menu-right-list-container">
                    <h1>Bagel Sandwiches</h1>
                    <p>everything, asiago, plain, cinnamon</p>
                    {Object.entries(BagelOptions).map((val) => (
                        <>
                            <h2>{val[0]}</h2>
                            <p>{val[1]}</p>
                        </>
                    ))}
                </div>
            </div>
            <div className="actual-menu-bottom-text">
                <h2>MORE TO COME :)</h2>
            </div>
        </div>
    )
}