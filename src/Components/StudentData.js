import React from "react";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { DeleteStudent } from "../features/StudentSlice";

const StudentData = () => {
    const data = useSelector(state => state.Student)
    const dispatch = useDispatch()
    // const navigate = useNavigate()
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
                                    <td><Link state={{ data: `${element.id}`}} to="/student/editstudent">Edit</Link></td>
                                    <td onClick={() => dispatch(DeleteStudent({index}))}><i className="fa fa-trash" style={{cursor:'pointer'}}></i></td>
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