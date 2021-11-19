// Importando o React
import React from "react";
// Importando os components necessários da lib react-materialize
import { Row, Col, Card, Input, Button } from 'react-materialize';

import { NavLink} from 'react-router-dom'

import Curso_card from "./curso_card";


const Contact = (props) => {
  return (
    <div>
      <Row>
        <div class="row">
          <div class="rowc">
            <h5>Cursos</h5>
            <NavLink to="/formulario"><a class="grey waves-effect waves-light btn">Adicionar</a></NavLink>
          </div>
            {props.coursesData.map(course => (
              <Curso_card 
                course={course} 
              />
            ))}
          </div>
      </Row>
      <Row>
        <Col s={12}>
          <h5>Envie-nos um comentário ou sugestão</h5>
          <Card>
            <Row>
              <Input placeholder="Ex@Email.com" type="email" label="Email" s={12} />
              <Input placeholder="Digite aqui..." label="Message" s={12} />
              <Col s={12} m={12}>
                <Button waves='light' className="right grey darken-2">Concluir</Button>
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
    </div>
  )
};

export default Contact;