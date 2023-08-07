import React from "react";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { DeleteStudent } from "../features/StudentSlice";

const StudentData = () => {
    const data = useSelector(state => state.Student)
    const dispatch = useDispatch()
    // const navigate = useNavigate()

    const editStyle = {
        textDecoration: 'none',
        color: 'white',
        backgroundColor:'green',
        borderRadius: '5px',
        padding: '3px 8px'
    }
    
    const delStyle = {
        cursor: 'pointer',
        backgroundColor:'tomato',
        padding:'5px 10px',
        color: 'black'
    }

    return (
        <>
            <table id='tblStyle' cellSpacing='1'>
                <thead style={{ backgroundColor: 'lightgray' }}>
                    <tr>
                        <th style={{ textAlign: 'left' }}>Name</th>
                        <th>Age</th>
                        <th>Course</th>
                        <th>Batch</th>
                        <th>Change</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((element, index) => {
                            return (
                                <tr key={index}>
                                    <td style={{ textAlign: 'left' }}>{element.Name}</td>
                                    <td>{element.Age}</td>
                                    <td>{element.Course}</td>
                                    <td>{element.Batch}</td>
                                    {/* <button onClick={() => { navigate('/student/editstudent', { state: `${element.id}` }) }} style={{ cursor: 'pointer' }}>Edit</button> */}
                                    <td><Link state={{ data: `${element.id}`}} to="/student/editstudent" style={editStyle}>Edit</Link></td>
                                    <td onClick={() => dispatch(DeleteStudent({index}))}><i className="fa fa-trash" style={{...editStyle, ...delStyle}}></i></td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </>
    )
}

export default StudentData