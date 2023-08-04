import React from "react";
import Home from "./Home";
import Student from "./Student";
import Contactus from "./Contactus";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Header";
import AddNewStudent from "./AddNewStudent";
import EditStudent from "./EditStudent";

const RoutingCompo = () =>{
    return(
        <>
            <BrowserRouter>
            <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/student" element={<Student />} />
                    <Route path="/contact" element={<Contactus />} />
                    <Route path="/student/addstudent" element={<AddNewStudent />} />
                    <Route path="/student/editstudent" element={<EditStudent />} />
                </Routes>
            </BrowserRouter>

        </>
    )
}
export default RoutingCompo
