import React from "react";
import '../css/Menu-list.css';

export default function MenuList() {
    return (
        <div className="actual-menu-container">
            <div className="actual-menu-left-side">
                <div className="actual-menu-left-list-container">
                    <h2>Avocado Toast</h2>
                    <p>Sourdough, wheat</p>
                    <h2>Option 1</h2>
                    <p>sourdough, avocado, microgreens, hem seeds</p>
                    <h2>Option 2</h2>
                    <p>sourdough, cream cheese, avocado spread, egg, microgreen, red pepper flakes</p>
                    <h2>Option 3</h2>
                    <p>sourdough, avocado spread</p>
                </div>
            </div>
            <div className="actual-menu-right-side">
                <div className="actual-menu-right-list-container">
                    <h2>Bagel Sandwiches</h2>
                    <p>everything, asiago, cinnamon</p>
                    <h2>Option 1</h2>
                    <p>everything bagel, homemade cream cheese, turkey, red onion, lettuce</p>
                    <h2>Option 2</h2>
                    <p>regular bagel, avocado, baby spinach, pesto, egg, sauce of choice</p>
                    <h2>Option 3</h2>
                    <p>choice of bagel, cream cheese</p>
                </div>
            </div>
        </div>
    )
}