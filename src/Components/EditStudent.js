import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { EditedStudent } from "../features/StudentSlice";

const EditStudent = () => {
    const studentId = useLocation().state.data
    // console.log(studentId)

    const student = useSelector(state => state.Student.filter((stud) => stud.id == studentId))
    // console.log(student)

    const navigate = useNavigate()
    const [Name, setName] = useState(student[0].Name)
    const [Age, setAge] = useState(student[0].Age)
    const [Course, setCourse] = useState(student[0].Course)
    const [Batch, setBatch] = useState(student[0].Batch)

    const dispatch = useDispatch()
    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(EditedStudent({
            id: studentId,
            Name,
            Age,
            Course,
            Batch
        }))
        console.log(Name, Age, Course, Batch)
        navigate('/student')
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <fieldset>
                    <legend><label htmlFor="name">Name</label></legend>
                    <input type="text" name="Name" value={Name} onChange={(e) => setName(e.target.value)} autoComplete="off" />
                </fieldset>

                <fieldset>
                    <legend><label htmlFor="age">Age</label></legend>
                    <input type="number" name="Age" value={Age} onChange={(e) => setAge(e.target.value)} autoComplete="off" />
                </fieldset>

                <fieldset>
                    <legend><label htmlFor="course">Course</label></legend>
                    <input type="text" name="Course" value={Course} onChange={(e) => setCourse(e.target.value)} autoComplete="off" />
                </fieldset>

                <fieldset>
                    <legend><label htmlFor="batch">Batch</label></legend>
                    <input type="text" name="Batch" value={Batch} onChange={(e) => setBatch(e.target.value)} autoComplete="off" />
                </fieldset>

                <div className="btnStyle">
                    <button type="button" onClick={() => { navigate('/student') }} style={{ backgroundColor: 'gray' }} className="updateBtn">Cancel</button>
                    <button type="submit" className="updateBtn">Update</button>
                </div>
            </form>
        </>
    )
}

export default EditStudent