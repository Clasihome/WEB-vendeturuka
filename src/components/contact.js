import React, { useContext, useState, Fragment } from 'react';
import context from '../context';
import styled from 'styled-components';
import { Container, Row, Col } from 'react-bootstrap';

import { Section, Button } from '../styled-components';
import Link from './link';

const SectionCustom = styled(Section)` 
  border: 1px solid #D8D8D8;
  border-left: none;
  border-right: none;
  padding: 2rem 0;
`
const Title = styled.p`
  margin: 0;
  margin-bottom: 1rem;
  font-weight: 900;
  @media(min-width:768px){
    margin-bottom: 0;
  }
`
export default ()=> {
  const state = useContext(context);
  return(
    <SectionCustom>
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={9}>
            <Title>
              {state.about.ubication.title}
            </Title>
          </Col>
          <Col xs={12} md={3}>
            <Link paintDrip hex={state.primaryColor} to="/contact" duration={.5}>
              <Button
                primary
                block
              >
                Contáctanos
              </Button>
            </Link>
          </Col>          
        </Row>
      </Container>
    </SectionCustom>
  )
}