import React from "react";
import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";

import { Section, Button } from "../../styled-components";

import dataValues from "./data_values.json";
import { Link } from "gatsby";
const Title = styled.h2`
  margin-top: 200px;
  margin-bottom: 50px;
  width: 100%;
  text-align: center;
  color: ${(props) => props.theme.primaryColor};
  @media (max-width: 780px) {
    margin: 50px 0px;
  }
`;
const ValueTitle = styled.h5`
  text-align: center;
  color: #000;
`;

const Value = styled.h6`
  text-align: center;
  font-weight: bold;
  margin: 1rem 0;
`;

const Img = styled.div`
  max-widht: 100%;
  margin: 50px 0px;
`;
const Subtitle = styled.h4`
  text-align: center;
  color: #424242;
`;

export default () => {
  return (
    <Section>
      <Container>
        <Row>
          <Col xs={12} md={12} style={{ marginBottom: "80px" }}>
            <Title>SERVICIOS PROFESIONALES</Title>
            <Subtitle>
              Modulos OPCIONALES para que tengas cubierto todo el proceso hasta
              la venta
            </Subtitle>
          </Col>

          <Col xs={12} md={12}>
            {/* <Services>
              <ServiceCarousel />
            </Services> */}
            <Row>
              {dataValues.map((dv) => (
                <Col style={{ padding: 20 }} xs={12} md={12}>
                  <Img>
                    <img
                      style={{
                        width: "100%",
                        maxHeight: "400px",
                        objectFit: "cover",
                      }}
                      src={dv.background}
                    />
                  </Img>
                  <ValueTitle>{dv.title}</ValueTitle>
                  <Value>{dv.value}</Value>
                  <p style={{ textAlign: "center" }}>{dv.description}</p>
                  <Col md={{ span: 6, offset: 3 }}>
                    {" "}
                    <Link to='/contact'>
                      <Button primary block>
                        Consultar
                      </Button>
                    </Link>
                  </Col>
                </Col>
              ))}
            </Row>
          </Col>
          {/* <Col xs={12}>
            <ReviewsCont>
              <Reviews>          
                <ReviewsCarousel />
              </Reviews>
            </ReviewsCont>
          </Col>        */}
        </Row>
      </Container>
    </Section>
  );
};
