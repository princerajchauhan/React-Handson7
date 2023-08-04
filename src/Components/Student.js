import React from "react";
import StudentData from "./StudentData";
import { useNavigate } from "react-router-dom";
import './style.css'

const Student = () => {
    const navigate = useNavigate()
    return (
        <div style={{ width: '90%', margin: '50px auto' }}>
            <div className="head">
                <h1>Students Details</h1>
                <button onClick={() => navigate("/student/addstudent")} id='headBtn'>Add New Student</button>
            </div>
            <div>
                <StudentData />
            </div>
        </div>
    )
}

export default Student