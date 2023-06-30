import React from "react";
import '../stylessheets/button.css'

function Button(props) {
    const itsOperator = value => {
        return isNaN(value) && (value != '.') && (value != '=');
    }
    return (
        <div
            className={`button-container ${itsOperator(props.children) ? 'operator' : null}`}
            onClick={() => props.handleClick(props.children)}>
            {props.children}
        </div>
    )
}

export default Button;