import React from "react"

import styles from './Card.module.css'

const Card = ({ id, name, age,  address, phone, gender, deleteFunc }) => {
    return ( 
        <div>
            <div 
                className={ styles.cardWrapper }
                style={{backgroundColor: gender === "ذكر" ? "lightgreen" : "pink"}}
            >

                <div>الاسم: { name }</div>
                <div>العمر: { age }</div>
                <div>العنوان: { address }</div>
                <div>رقم المحمول: { phone }</div>
                <div>الجنس: { gender }</div>
                <div className={ styles.deleteBtn } onClick={(e) => deleteFunc(e, id)}>x</div>
                
            </div>
        </div>
     );
}
 
export default Card;