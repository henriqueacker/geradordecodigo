import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from '../pages/Home'
import Sobre from '../pages/Sobre'


function Rotas(){
    return(
        <Routes>
            <Route element={<Home />} path="/"/>
            <Route element={<Sobre />}  path="/sobre"/>
        </Routes>
    )
}

export default Rotas;