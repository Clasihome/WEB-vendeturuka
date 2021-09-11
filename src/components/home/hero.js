import React, { useContext, useState, useEffect } from "react";
import context from "../../context";
import styled from "styled-components";
import { gsap } from "gsap";
import { Container } from "react-bootstrap";
import { DownOutlined } from "@ant-design/icons";
import { CarouselProvider, Slider, Slide } from "pure-react-carousel";

import { Section } from "../../styled-components";
import FormProperty from "../forms/properties";
import RateBar from "../../layout/ratebar";

const MainCont = styled(Section)`
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
`;
const TitleCont = styled.div``;
const Title = styled.h1`
  min-height: 40vh;
  text-transform: uppercase;
  color: #fff;
  display: flex;
  line-height: 90px;
  align-items: center;
  margin: 0;
  @media (max-width: 768px) {
    width: 100%;
    min-height: calc(70vh - 117.38px);
    line-height: 50px;
  }
`;
const FormContainer = styled.div`
  /* background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url("${(props) => props.src}"); */
  background-position: center;
  background-size: cover;
  flex: 1;
  display: flex;
  align-items: center;
  position: relative;
  z-index: 100;
  @media (min-width: 768px) {
  }
`;
const RateBarCont = styled.div`
  position: absolute;
  left: 50px;
  bottom: -10vh;
`;
const DownLink = styled.a`
  text-decoration: none;
  color: ${(props) => props.theme.primaryColor} !important;
  background-color: #fff;
  transition: 250ms ease;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  position: absolute;
  bottom: 70px;
  left: 11%;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    filter: brightness(1.1);
  }
  @media (max-width: 980px) {
    display: none;
  }
`;

const SliderContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-size: cover;
  background-position: center;
`;
const SlideImage = styled.div`
  width: 100%;
  height: 100vh;
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url("${(props) => props.src}");
  background-size: cover;
  background-position: bottom;
`;

const BackgroundSlider = ({ theme }) => (
  <CarouselProvider
    naturalSlideWidth={100}
    //naturalSlideHeight={125}
    isIntrinsicHeight
    totalSlides={3}
    isPlaying
    interval={5000}
  >
    <Slider>
      <Slide index={0}>
        <SlideImage src='/hero1.jpg' alt='trabajo' />
      </Slide>
      <Slide index={1}>
        <SlideImage src='/hero2.jpg' alt='cocina' />
      </Slide>
      <Slide index={2}>
        <SlideImage src='/hero4.jpeg' alt='tasa de té' />
      </Slide>
    </Slider>
    {/*  <CustonDot slide={0} style={{ right: "69px" }} />
    <CustonDot slide={1} style={{ right: "46px" }} />
    <CustonDot slide={2} style={{ right: "23px" }} />
    <CustonDot slide={3} style={{ right: "0px" }} /> */}
  </CarouselProvider>
);

export default () => {
  const state = useContext(context);
  const [byCode, setByCode] = useState(false);
  useEffect(() => {
    const tl = gsap.timeline();
    tl.from("#title", {
      opacity: 0,
      y: 10,
      duration: 1.5,
      ease: "back.out(1.7)",
    })
      .from(
        "#search",
        { opacity: 0, y: 10, duration: 1, ease: "back.out(1.7)" },
        "-=1"
      )
      .from(
        "#formSearch",
        { opacity: 0, y: 10, duration: 1.5, ease: "back.out(1.7)" },
        "-=.5"
      )
      .from(
        "#downButton",
        { opacity: 0, y: 10, duration: 1.5, ease: "back.out(1.7)" },
        "-=.5"
      )
      .from("#downButton", { y: 5, repeat: -1, duration: 1.5, yoyo: true });

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <MainCont first height='100vh' src={state.home.hero.background}>
      <SliderContainer>
        <BackgroundSlider {...state} />
      </SliderContainer>
      <TitleCont>
        <Container>
          <Title
            id='title'
            /* dangerouslySetInnerHTML={{ __html: state.home.hero.title }} */
          >
            Vende tu mismo
            <br />
            Sin Comisión Sin Corredor
            <br />
            Modelo "Vende Dueño"
          </Title>
        </Container>
      </TitleCont>

      <FormContainer>
        <Container style={{ position: "relative" }}>
          <FormProperty id='formSearch' />
          <RateBarCont id='formSearch'>
            <RateBar />
          </RateBarCont>
        </Container>
        <DownLink id='downButton' href='#properties'>
          <DownOutlined />
        </DownLink>
      </FormContainer>
    </MainCont>
  );
};
