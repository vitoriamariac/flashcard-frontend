// Importando o React
import React from "react";
// Importando os components necessários da lib react-materialize
import { Row, Col, Card } from 'react-materialize';
// Importando o component Experience
import Experience from '../experience/experience'
// Importando o avatar da empresa 1
import mec from '../../images/mec.png';
// Importando o avatar da empresa 1
import company_avatar2 from '../../images/company2.png';

const Home = () => (
  <Row>
    <Col m={11} s={11}>
        <h5 className="subtitle">Nossa história</h5>
        <Card>
          <div>
            <p><b>Trajetória</b></p>
            <p>Somos uma instituição de ensino superior brasileira, sediada em São Paulo, com diversos cursos de técnico, graduação, pós-graduação, mestrado e doutorado. Buscamos através de um método de ensino focado na execução prática das atividades ajudar nossos alunos a evoluírem cada vez mais.</p>
            <br/>
            <p><b>Missão</b></p>
            <p>Participação no processo de construção e difusão do conhecimento e da cultura, de forma criativa e inovadora, tornando-os acessíveis à sociedade e contribuindo para o desenvolvimento do ser humano em todas as suas potencialidades, promovendo, assim, mudanças regionais e interlocução nacional e internacional, por meio do ensino, da pesquisa e da extensão.</p>
          </div>
        </Card>
        <h5 className="subtitle">Qualificações</h5>
   

        {/* Passando os parâmetros title, company, description e avatar para o component Experience */}
        <Experience title="Nota do MEC"
                    description="Para comprovar ainda mais a excelência e efetividade de nossa instituição, possuímos nota 4 de acordo com o MEC (Ministério da Educação)."
                    avatar={mec}
        />
        <Experience title="Campus"
                    description="Possuímos um campus com uma extensa área verde para que nossos alunos se sintam o mais confortáveis possível."
                    avatar={company_avatar2}                    
        /> 
    </Col>
  </Row>
);

export default Home;