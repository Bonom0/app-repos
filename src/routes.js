import { BrowserRouter, Route, Routes as RoutesRD } from "react-router-dom";
import React from "react";

import Main from "./pages/Main";
import Repositorio from "./pages/Repositorio";

export default function Routes(){
  return(
    <BrowserRouter>
      <RoutesRD>
        <Route exact path="/" Component={Main}/>
        <Route exact path="/repositorio/:repositorio" Component={Repositorio}/>
      </RoutesRD>
    </BrowserRouter>
  )
}