import React, { Fragment, useState } from "react"

import CardList from '../components/CardList/CardList'
import FilterInput from '../components/FilterInput/FilterInput'

import Modal from '../components/Modal/Modal'
import Button from '../components/Layout/Button'

import styles from "./App.module.css"
import AddUser from "../components/AddUser/AddUser"



const App = () => {
	const [state, setState] = useState([
		{
			id: 1000,
			name: "حسام بن حسن",
			age: 26,
			address: "البراجيل",
			phone: "02248482284",
			gender: "ذكر"
		},
		{
			id: 2000,
			name: "نعيمة بنت داوُد",
			age: 28,
			address: "البراجيل",
			phone: "02248482284",
			gender: "انثى"
		},
		{
			id: 3000,
			name: "نوح بن حسام بن حسن",
			age: 4,
			address: "البراجيل",
			phone: "02248482284",
			gender: 'ذكر'
		},
		{
			id: 4000,
			name: "صفيه بنت حسام بن حسن",
			age: 2,
			address: "البراجيل",
			phone: "02248482284",
			gender: 'انثى'
		},

	])
	
	const addNewUserHandler = (data) => {
		setState((prevState) => [...prevState, data])
	}
	
	const [cardToggleState, setCardToggleState ] = useState(true)
	const [filterState, setFilterState] = useState("")
	const [modalState, setModalState] = useState(false)
	
	const deleteHandler = (e, selectedId) => {
		// setState as an Object
		// const deleteOberation = state.filter((el, idx) => idx !== clickedIdx)
		// setState(deleteOberation)

		// setState as a Function()
		setState((prevState) => {
			return prevState.filter(el => el.id !== selectedId)
		})

		console.log('previous_state Inside_Delete_Handler', state)
	}
	
	const toggleHandler = () => setCardToggleState(!cardToggleState)
	/* Filtering the UI of the names list */
	const filterNames = (name) => setFilterState(name)
	
	const namesHandler = () => {
		if (filterState.length !== 0) {
			return state.filter((el) => el.name.includes(filterState))
		}
		
		return state
	}
	
	return (
		<Fragment>

			<div className={ styles.mainContainer }>
				<h1>قائمة البيانات</h1>
				
				<div style={{ display: "flex" }}>
					<Button className={styles.orangeBtn} onClick={toggleHandler}>
						{ cardToggleState ? "قم بٍـإخـفاء الأسماء" : "أظهر الأسماء" }
					</Button>

					<Button 
						className={styles.newRecBtn}
						onClick={() => setModalState(true)} 
						autoFocus
					>
						أضف سجل جديد
					</Button>
				</div>

				<div className={ cardToggleState ? styles.show : styles.hide }>
					<FilterInput filtration={ filterNames } />
					<CardList namesList={ namesHandler() }  deleteFunc={ deleteHandler } />
				</div>
					
			</div>

			<Modal show={ modalState } closeModal={ () => setModalState(false) }>
				<AddUser
					addNewUserHandler={addNewUserHandler} 
					closeModal={ () => setModalState(false)}	
				/>
			</Modal>
		</Fragment>
	)
}

export default App