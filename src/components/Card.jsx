// import { useState } from "react";
import classes from "./Styles.module.css"
import "./Card.css"
const Card = props => {
    function func(e) {
        console.log(e.target.style);
    }
    return (
        <li
            className={`Card ${(props.activeKey === props.val) ? `Card_Active` : ""}`}
            style={{ "--bh": `${props.BG.bh}`, "--ah": `${props.BG.ah}` }}
            onMouseEnter={func}
        >
            <h1>{props.val}</h1>
        </li>
    )
}
export default Card;