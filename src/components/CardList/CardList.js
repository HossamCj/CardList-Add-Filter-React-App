import React from "react"

import Card from '../Card/Card'
// import styles from "./CardList.module.css"


const CardList = ({ namesList, deleteFunc }) => {
    const cards = namesList.map(({id, ...otherProps}) => (
		<Card key={ id } id={ id } {...otherProps} deleteFunc={deleteFunc} />
	))

	console.log(namesList)

    return <div>{ cards }</div>
}

export default CardList