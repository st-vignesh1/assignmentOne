import React from 'react'
import Home from "../pages/Home";
import AppLayout from "../pages/AppLayout"
import { Route, Routes } from 'react-router-dom';
import CompanyDetails from '../pages/CompanyDetails';

function RouterContainer() {
    return (
        <Routes>
            <Route path="/" element={<AppLayout/>} >
                <Route index element={<Home/>}/>
                <Route path="/company/:ticker" element={<CompanyDetails/>}/>
            </Route>
        </Routes>
    )
}

export default RouterContainer;

