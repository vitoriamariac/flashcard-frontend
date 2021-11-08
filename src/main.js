// Importantando o React
import React from "react";
// Importantando o component Home
import Home from "./components/home/home";
// Importantando o component Contact
import Contact from "./components/contact/cursos";

import Formulario from './components/contact/formulario'

import { Container } from 'react-materialize';
// Importanto o component <Switch /> e <Route /> da nossa Lib de rotas
import { Routes, Route } from 'react-router-dom'

const Main = (props) => (
  <main>
    <Container>
      <Routes>
        <Route exact path='/' element={ <Home/> }/>
        <Route path='/cursos' element={ <Contact coursesData={props.coursesData}/> }/>
        <Route path='/formulario' element={ <Formulario /> }/>
      </Routes>
    </Container>
  </main>  
);

export default Main;