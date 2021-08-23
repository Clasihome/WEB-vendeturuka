import React, { useContext } from "react";
import context from "../../context";
import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";

import { Section, Button } from "../../styled-components";
import Link from "../link";

const SectionCustom = styled(Section)`
  background-color: #000;
  border-radius: 5px;
  padding-bottom: 2rem;
`;
const InfoCont = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  padding: 3rem;
  color: #fff;
  @media (min-width: 768px) {
    //max-width: 720px;
    //padding: 2rem 15px;
  }
`;
const Title = styled.h2``;
const SubTitle = styled.p``;
const ImageCont = styled.div`
  display: flex;
  justify-content: center;
`;
const Image = styled.img`
  object-fit: cover;
  object-position: center;
`;

export default () => {
  const state = useContext(context);
  console.log("state", state);
  return (
    <Container>
      <SectionCustom>
        <Row noGutters>
          <Col xs={12} md={12} lg={7}>
            <InfoCont>
              <Title>{state.home.about.banner.title}</Title>
              <br />
              <SubTitle>
                EJEMPLO
                <br /> PRECIO PROPIEDAD $100.000.00 COMISION 4,76% <br />
                $4.760.000 COSTO SERVICIO ( UF 3,5 +IVA) $ 124.000 <br />
                AHORRO $ 4.636.000
                <br />
                <br />
                SERVICIOS COMPLEMENTARIOS <br />
                <br />
                - LEGAL HASTA LA VENTA <br />
                - VIDEOS Y FOTOS PROFESIONALES <br />
                - ACOMPAÑAMIENTO DE VISITAS
                <br />
                <br />
              </SubTitle>
              <Link
                paintDrip
                hex={state.primaryColor}
                to='/services'
                duration={0.5}
              >
                <Button block>{state.home.about.banner.buttonText}</Button>
              </Link>
            </InfoCont>
          </Col>
          <Col xs={12} md={12} lg={5}>
            <ImageCont className='d-none d-lg-flex'>
              <Image src={state.home.about.banner.image} />
            </ImageCont>
          </Col>
        </Row>
      </SectionCustom>
    </Container>
  );
};
