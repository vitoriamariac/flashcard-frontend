import React, { useState } from "react";
import { Row, Col, Input, Button } from 'react-materialize'
import {NavLink, useParams} from 'react-router-dom'
import api from "../../service/api"

const Editar = () => {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const {colecaoId} = useParams('');


    const editar = async () =>{
		await api.put("/" + colecaoId, {nome: name, descricao: description})
        .then(response => setName(response.data))

	}

    return (
        <Row>
            <Input placeholder="Nome do curso..." label="Nome do curso" onChange={event => setName(event.target.value)} s={12} />
            <Input placeholder="Descrição do curso..." label="Descrição" onChange={event => setDescription(event.target.value)} s={12} />
            <Col s={12} m={12}>
                <NavLink to="/cursos" ><Button onClick={editar} waves='light' className="right grey darken-2">Atualizar</Button></NavLink>
            </Col>
        </Row>
    );
}

export default Editar;