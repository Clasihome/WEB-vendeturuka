import React, { useContext } from 'react';
import context from '../../context';
import styled from 'styled-components';
import { Container, Row, Col } from 'react-bootstrap';

import { Section, Button } from '../../styled-components';
import Link from '../link';

const SectionCustom = styled(Section)`
  background-color: ${props=> props.theme.primaryColor};
  border-radius: 5px;
  padding-bottom: 2rem;
`
const InfoCont = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  padding: 3rem;  
  color: #fff;
  @media (min-width: 768px){
    //max-width: 720px;
    //padding: 2rem 15px;
  }    
`
const Title = styled.h2`

`
const SubTitle = styled.p`

`
const ImageCont = styled.div`
  display: flex;
  justify-content: center;
`
const Image = styled.img`
  object-fit: cover;
  object-position: center;
`

export default ()=> {
  const state = useContext(context);
  return(
    <Container>
      <SectionCustom>
        <Row noGutters>
          <Col xs={12} md={12} lg={7}>
            <InfoCont>
              <Title>
                {state.home.about.banner.title}
              </Title>
              <SubTitle>
                {state.home.about.banner.subTitle}
              </SubTitle>
              <Link paintDrip hex={state.primaryColor} to="/about" duration={.5}>
                <Button block>
                  {state.home.about.banner.buttonText}
                </Button>
              </Link>
            </InfoCont>
          </Col>
          <Col xs={12} md={12} lg={5}>
            <ImageCont className="d-none d-lg-flex">
              <Image src={state.home.about.banner.image} />
            </ImageCont>
          </Col>
        </Row>
      </SectionCustom>
    </Container>
  )
}