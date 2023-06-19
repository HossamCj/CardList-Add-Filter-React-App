import React, {useState} from 'react'

import Form from '../Layout/Form'
import Button from '../Layout/Button'
import styles from './AddUser.module.css'



const AddUser = ({ addNewUserHandler, closeModal }) => {
    // const [input, setInput] = useState({
    //     name: '',
    //     age: '',
    //     address: '',
    //     phone: ''
    // })
    
    // const inputHandler = (e) => {
    //     setInput((prevState) => {
    //         return { ...prevState, [e.target.id]: e.target.value }
    //     })
    // }

    const [name, setName] = useState('')
    const [age, setAge] = useState('')
    const [gender, setGender] = useState('')
    const [address, setAddress] = useState('')
    const [phone, setPhone] = useState('')
    
    const onSbumitHandler = (e) => {
        e.preventDefault()

        addNewUserHandler({
            id: Math.round(Math.random() * 100),
            name,
            age,
            gender,
            address,
            phone
        })

        setName('')
        setAge('')
        setGender('')
        setAddress('')
        setPhone('')
        closeModal()
    }
    
    return (
        <div>
            <Form onSubmit={onSbumitHandler}>	
                <Form.Controller>
                    <label htmlFor='name'>الإسم: </label>
                    <input 
                        type='name'
                        id='name' 
                        placeholder='أدخل الإسم' 
                        // value={name} 
                        onChange={ (e) => setName(e.target.value)}
                    />
                </Form.Controller>

                <Form.Controller>
                    <label htmlFor='age'>العمر: </label>
                    <input 
                        type='age' 
                        id='age' 
                        placeholder='أدخل العمر' 
                        // value={age}
                        onChange={(e) => setAge(e.target.value)}
                    />
                </Form.Controller>

                <Form.Controller>
                    <label htmlFor='gender'>الجنس: </label>
                    <input
                        type='gender'
                        id='gender'
                        placeholder='أدخل الجنس'
                        // value={gender}
                        onChange={(e) => setGender(e.target.value)}
                    />
                </Form.Controller>

                <Form.Controller>
                    <label htmlFor='address'>العنوان: </label>
                    <input 
                        type='address' 
                        id='address' 
                        placeholder='أدخل العنوان' 
                        // value={address} 
                        onChange={(e) => setAddress(e.target.value)}
                    />
                </Form.Controller>

                <Form.Controller>
                    <label htmlFor='phone'>رقم المحمول: </label>
                    <input 
                        type='phone' 
                        id='phone'
                        placeholder='رقم المحمول' 
                        // value={phone} 
                        onChange={(e) => setPhone(e.target.value)}
                    />
                </Form.Controller>

                <div className={styles.submitDiv}>
                    <Button type= 'submit' className={styles.formSaveBtn}>إحفظ البيانات</Button>
                    <Button type='reset' className={styles.formResetBtn}>أعِد إدخال البيانات</Button>
                </div>
            </Form>
        </div>
    )
}

export default AddUser
