import React from "react";
import '../css/Shameless.css'

export default function Shameless(props){
    return(
        <div className={(props.setting) ? "shameless-container-open" : "shameless-container-closed"}>
            <p>designed & developed - <a href="https://emmanuelpaz.netlify.app" target="_blank">emmanuel paz</a></p>
        </div>
    )
}