import React, { useState } from "react"

import styles from "./FilterInput.module.css"


const FilterInput = ({ filtration }) => {

    const [filter, setFilter] = useState("")
    
    const filterHandler = (e) => {
        const name = e.target.value

        setFilter(name)
        filtration(name)
    }
    
    return (
        <div>
            <input 
                type="text"
                className={ styles.refInput }
                placeholder="إبحث بالاسم"
                onChange={ filterHandler }
            />
        </div>
    )
}

export default FilterInput


