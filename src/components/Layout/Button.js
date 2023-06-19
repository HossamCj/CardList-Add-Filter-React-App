import React from "react";

import styles from './Form.module.css'


const Button = (props) => {
    return (
        <button
            type={`${props.type ? props.type : 'button'}`}
            className={`${styles.uniqueBtn} ${props.className}`}
            onClick={props.onClick}
        >
            { props.children }
        </button>
    )
}

export default Button