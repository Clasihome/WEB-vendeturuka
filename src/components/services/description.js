import React, { useContext } from "react";
import context from "../../context";
import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";

import { Section } from "../../styled-components";

const SectionCustom = styled(Section)``;
const Image = styled.img`
  width: 100%;
  height: 50vh;
  object-fit: cover;
  object-position: center;
  @media (min-width: 768px) {
    height: 100%;
  }
`;
const InfoCont = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const Title = styled.h2`
  //width: 50%;
  color: ${(props) => props.theme.primaryColor};
  margin: 2rem 0;
`;
const Description = styled.div`
  white-space: break-spaces;
  text-align: left;
`;

export default () => {
  const state = useContext(context);
  return (
    <SectionCustom>
      <Container>
        <Row>
          <Col xs={12} md={{ span: 7, order: 2 }}>
            <Image alt='historia' src={state.about.history.background} />
          </Col>
          <Col xs={12} md={{ span: 5, order: 1 }}>
            <InfoCont>
              <Title>VENDE TU RUKA</Title>
              <Description>
                <b>TRANSPARENCIA</b> <br />
                No tienes un intermediario, ( corredor) tratas directo con tu
                comprador, agendas visitas. <br /> <br />
                <b>MULTIPUBLICACIÓN</b>
                <br />
                En los principales portales inmobiliarios con ellos logramos una
                máxima visibilidad ya que en cualquiera que hagan un filtro va a
                aparecer tu propiedad. <br />
                <br />
                <b>COMPRADOR Y VENDEDOR NO PAGAN COMISION</b> <br />
                Te ahorras millones y es mucho más atractivo para los
                compradores ya que en el aviso está indicado que no pagan
                comisión lo que los sorprende gratamente y se producen 10 veces
                mas llamados y solicitudes de visitas.
              </Description>
            </InfoCont>
          </Col>
        </Row>
      </Container>
    </SectionCustom>
  );
};
