import React, { useContext } from "react";
import context from "../../context";
import styled from "styled-components";
import { Row, Col, Container } from "react-bootstrap";

import { Section, Button } from "../../styled-components";
import Description from "../carousels/description";

const SectionCustom = styled(Section)``;
const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
`;

export default () => {
  const state = useContext(context);
  return (
    <SectionCustom>
      <Container>
        <Row noGutters>
          <Col xs={12} md={12}>
            <Description />
          </Col>
        </Row>
      </Container>
    </SectionCustom>
  );
};
