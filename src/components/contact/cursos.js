// Importando o React
import React from "react";
// Importando os components necessários da lib react-materialize
import { Row, Col, Card, Input, Button } from 'react-materialize';
// Importando o component Experience
import Experience from '../experience/experience'

import img1 from '../../images/img1.jpg';

import img2 from '../../images/img2.jpg';

import img3 from '../../images/img3.jpg';

import img4 from '../../images/img4.jpg';

import img5 from '../../images/img5.jpg';

import img6 from '../../images/img6.jpg';

const Contact = () => (
  <Row>
    <Col m={12} s={12}>
        <h5>Cursos</h5>

        <Experience title="Biologia"
                    description=""
                    avatar={img1}                    
        />
        <Experience title="Geografia"
                    description=""
                    avatar={img2}                    
        />
        <Experience title="Física"
                    description=""
                    avatar={img3}                    
        />
        <Experience title="História"
                    description=""
                    avatar={img4}                    
        />
        <Experience title="Matemática"
                    description=""
                    avatar={img5}                    
        />
        <Experience title="Química"
                    description=""
                    avatar={img6}                    
        />

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
);

export default Contact;