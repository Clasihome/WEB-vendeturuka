import React from "react";
import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";

import { Section } from "../../styled-components";
import ServiceCarousel from "../carousels/services";
import ReviewsCarousel from "../carousels/reviews";
import { ClasiQuote } from "../../icons";

import dataServices from "./data_services.json";
const Title = styled.h2`
  text-align: center;
  color: ${(props) => props.theme.primaryColor};
`;
const ServiceTitle = styled.h5`
  color: #000;
  margin-bottom: 20px;
`;

const SubTitle = styled.p`
  font-weight: bold;
  margin: 3rem 0;
`;

const Services = styled.div`
  margin-bottom: 8rem;
`;
const ReviewsCont = styled.div`
  display: flex;
  justify-content: center;
`;
const Reviews = styled.div`
  height: 100%;
  width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const Quote = styled.p`
  color: ${(props) => props.theme.primaryColor};
  font-size: 4rem;
  margin: 4rem 0;
  //margin-top: auto;
  //justify-self: center;
`;

export default () => {
  return (
    <Section>
      <Container>
        <Row>
          <Col xs={12} md={12} style={{ marginBottom: "80px" }}>
            <Title>
              Ofrecemos un servicio ajustado a las necesidades de cada cliente
            </Title>
          </Col>

          <Col xs={12} md={12}>
            {/* <Services>
              <ServiceCarousel />
            </Services> */}
            <Row>
              {dataServices.map((ds) => (
                <Col style={{ padding: 20 }} xs={12} md={6}>
                  <ServiceTitle>{ds.title}</ServiceTitle>
                  <p>{ds.description}</p>
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
