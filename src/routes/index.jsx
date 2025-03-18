import React from 'react'
import Home from "../pages/Home";
import AppLayout from "../pages/AppLayout"
import { Route, Routes } from 'react-router-dom';
import CompanyDetails from '../pages/CompanyDetails';
import Products from '../pages/Products';

function RouterContainer() {
    return (
        <Routes>
            <Route path="/" element={<AppLayout/>} >
                <Route index element={<Home/>}/>
                <Route path="/products" element={<Products/>}/>
                <Route path="/company/:ticker" element={<CompanyDetails/>}/>
            </Route>
        </Routes>
    )
}

export default RouterContainer;

