import React from 'react'
import Home from "../pages/Home";
import AppLayout from "../pages/AppLayout"
import { Route, Routes } from 'react-router-dom';

function RouterContainer() {
    return (
        <Routes>
            <Route path="/" element={<AppLayout/>} >
                <Route index element={<Home/>}/>
            </Route>
        </Routes>
    )
}

export default RouterContainer;

