// Importantando o React
import React from "react";
// Importantando o component Home
import Home from "./components/home/home";
import Contact from "./components/contact/cursos";
import Formulario from './components/contact/formulario'
import Editar from './components/contact/editar'
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
        <Route path='/editar/:colecaoId' element={ <Editar /> }/>
      </Routes>
    </Container>
  </main>  
);

export default Main;