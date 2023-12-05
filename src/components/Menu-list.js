import React from "react";
import '../css/Menu-list.css';

export default function MenuList() {
    return (
        <div className="actual-menu-container">
            <div className="actual-menu-left-side">
                <div className="actual-menu-left-list-container">
                    <h1>Avocado Toast</h1>
                    <p>Sourdough, wheat</p>
                    <h2>Option 1</h2>
                    <p>avocado spread, everything seasoning, tomato, parsely, spinach</p>
                    <h2>Option 2</h2>
                    <p>cream cheese spread, avocado spread, everything seasoning, egg, parsley, red pepper flakes</p>
                    <h2>Option 3</h2>
                    <p>choice of bread, avocado spread, everything seasoning</p>
                </div>
            </div>
            <div className="actual-menu-right-side">
                <div className="actual-menu-right-list-container">
                    <h1>Bagel Sandwiches</h1>
                    <p>everything, asiago, plain, cinnamon</p>
                    <h2>Option 1</h2>
                    <p>everything bagel, cream cheese spread, red pepper flakes, honey, turkey, red onion, spinach</p>
                    <h2>Option 2</h2>
                    <p>avocado spread, baby spinach, pesto, egg, honey mustard, red pepper flakes</p>
                    <h2>Option 3</h2>
                    <p>choice of bagel, cream cheese spread</p>
                </div>
            </div>
            <div className="actual-menu-bottom-text">
                <h2>MORE TO COME :)</h2>
            </div>
        </div>
    )
}