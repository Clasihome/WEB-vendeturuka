import React, { useContext, useState, useEffect } from 'react';
import context from '../../context';
import styled from 'styled-components';
import { gsap } from 'gsap';
import { Container } from 'react-bootstrap';
import { DownOutlined } from '@ant-design/icons';

import { Section } from '../../styled-components';
import FormProperty from '../forms/properties'
import RateBar from '../../layout/ratebar';

const MainCont = styled(Section)`
  background-color: ${props => props.theme.primaryColor};
  display: flex;
  flex-direction: column;
`
const TitleCont = styled.div` 
  background-color: ${props => props.theme.primaryColor};
  @media(min-width: 768px){
    
  }
`
const Title = styled.h1`
  min-height: 40vh;
  color: #fff;
  display: flex;
  align-items: center;
  margin: 0;
  @media(min-width: 768px){
    min-height: calc(50vh - 117.38px);
  }
`
const FormContainer = styled.div`
  background-image: linear-gradient(rgba(0, 0, 0, .5), rgba(0, 0, 0, .5)), url("${props => props.src}");
  background-position: center;
  background-size: cover;
  flex: 1;
  display: flex;
  align-items: center;
  position: relative;
  z-index: 100;
  @media(min-width: 768px){
    
  }  
`
const RateBarCont = styled.div`
  position: absolute;
  left: 0;
  bottom: -10vh;
`
const DownLink = styled.a`
  text-decoration: none;
  color: ${props => props.theme.primaryColor} !important;
  background-color: #fff;
  transition: 250ms ease;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  position: absolute;
  bottom: 1rem;
  left: 11%;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover{
    filter: brightness(1.1);
  }
`

export default ()=> {
  const state = useContext(context);
  const [byCode, setByCode] = useState(false);
  useEffect(()=>{
    const tl = gsap.timeline();
    tl.from("#title", { opacity: 0, y: 10, duration: 1.5, ease:"back.out(1.7)" })
      .from("#search", { opacity: 0, y: 10, duration: 1, ease:"back.out(1.7)" }, "-=1")
      .from("#formSearch", { opacity: 0, y: 10, duration: 1.5, ease:"back.out(1.7)" }, "-=.5")
      .from("#downButton", { opacity: 0, y: 10, duration: 1.5, ease:"back.out(1.7)" }, "-=.5")
      .from("#downButton", { y: 5, repeat: -1, duration: 1.5, yoyo: true });
    
    return ()=> {
      tl.kill();
    }
  },[]);

  return(
    <MainCont first height="100vh">
      <TitleCont>
        <Container>
          <Title id="title">
            Propiedades
          </Title>
        </Container>
      </TitleCont>
      <FormContainer src={state.home.hero.background}>
      <Container style={{ position: "relative" }}>
        <FormProperty id="formSearch" withFilters/>
        <RateBarCont id="formSearch">
          <RateBar />
        </RateBarCont>
        </Container>        
      </FormContainer>      
    </MainCont>
  )
}