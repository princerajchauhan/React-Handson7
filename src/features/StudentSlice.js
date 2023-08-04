import { createSlice } from "@reduxjs/toolkit";
import Student from "../Data";

const StudentSlice = createSlice({
    name: 'student',
    initialState: Student,
    reducers:{
        AddStudent: (state, action)=>{
            state.push(action.payload)
        },
        EditedStudent:(state, action)=>{
            const {id, Name, Age, Course, Batch} = action.payload
            const existingStudent = state.find(student => student.id == id)
            existingStudent.Name = Name
            existingStudent.Age = Age
            existingStudent.Course = Course
            existingStudent.Batch = Batch
        },
        DeleteStudent: (state, action)=>{
            state.splice(action.payload.index,1)
        }
    }
})

export default StudentSlice.reducer
export const {AddStudent, EditedStudent, DeleteStudent} = StudentSlice.actions