import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { AddStudent } from "../features/StudentSlice";
import { useNavigate } from "react-router-dom";
import './AddStudent.css'

const AddNewStudent = () => {
    const dispatch = useDispatch()
    const student = useSelector(state => state.Student)

    const [Name, setName] = useState('')
    const [Age, setAge] = useState('')
    const [Course, setCourse] = useState('')
    const [Batch, setBatch] = useState('')

    const navigate = useNavigate()
    const handleSubmit = (e) => {
        e.preventDefault()
        // console.log(Name)
        // console.log(Age)
        // console.log(Course)
        // console.log(Batch)
        dispatch(AddStudent({
            id: student.length, Name, Age, Course, Batch
        }))
        navigate('/student')
    }
    const resetForm =() =>{
        setName('')
        setAge('')
        setCourse('')
        setBatch('')
    }
    return (
        <>
            <form onSubmit={handleSubmit}>

                <div className="inputBox">
                    <input type="text" autoComplete="off" value={Name} name='Name' onChange={(e) => setName(e.target.value)} required />
                    <label htmlFor="Name">Name</label>
                </div>

                <div className="inputBox">
                    <input type="number" autoComplete="off" value={Age} name='Age' onChange={(e) => setAge(e.target.value)} required />
                    <label htmlFor="Age">Age</label>
                </div>

                <div className="inputBox">
                    <input type="text" autoComplete="off" value={Course} name='Course' onChange={(e) => setCourse(e.target.value)} required />
                    <label htmlFor="Course">Course</label>
                </div>

                <div className="inputBox">
                    <input type="text" autoComplete="off" value={Batch} name='Batch' onChange={(e) => setBatch(e.target.value)} required />
                    <label htmlFor="Batch">Batch</label>
                </div>

                <div className='btnStyle'>
                    <button style={{ backgroundColor: 'gray' }} onClick={resetForm} type="button">Cancel</button>
                    <button type='submit'>Submit</button>
                </div>

            </form>
        </>
    )
}

export default AddNewStudent