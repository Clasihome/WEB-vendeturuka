import React, { Fragment, useContext } from "react";
import context from "../../context";
import styled from "styled-components";
import { Row, Col } from "react-bootstrap";
import { chunkArray } from "../../util";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
  Dot,
} from "pure-react-carousel";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import "pure-react-carousel/dist/react-carousel.es.css";
import { v1 as uuid } from "uuid";
const items = require("./items_mock.json");

const SliderCustom = styled(Slider)`
  padding-bottom: 1.5rem;
`;
const DotsCont = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 1rem 0;
  button:nth-child(1) {
    margin-left: 0;
  }
  @media (min-width: 768px) {
    position: absolute;
    top: 50%;
    bottom: auto;
    right: -25%;
    padding: 0;
  }
`;
const ButtonBackCustom = styled(ButtonBack)`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.5);
  transition: 250ms ease;
  border: none;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.primaryColor};
  color: #fff;
  &:hover {
    filter: brightness(1.1);
  }
`;
const ButtonNextCustom = styled(ButtonNext)`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.5);
  transition: 250ms ease;
  border: none;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 1rem;
  background-color: ${(props) => props.theme.primaryColor};
  color: #fff;
  &:hover {
    filter: brightness(1.1);
  }
`;
const Card = styled.div`
  margin-left: 0 0.5rem;
`;
const Title = styled.p`
  font-size: 1.5rem;
`;
const Description = styled.p`
  padding-bottom: 2rem;
  white-space: break-spaces;
  @media (min-width: 768px) {
    padding-bottom: 0;
  }
`;

const Service = ({ title, description }) => (
  <Card>
    <Title>{title}</Title>
    <Description>{description}</Description>
  </Card>
);

export default () => {
  const state = useContext(context);
  //const items = state.about.description.items;

  const chunkedItemsDesktop = chunkArray(
    items.map((item) => item),
    2
  );
  return (
    <Fragment>
      <CarouselProvider
        naturalSlideWidth={100}
        //naturalSlideHeight={60}
        isIntrinsicHeight={true}
        totalSlides={items.length}
        visibleSlides={1}
        orientation='horizontal'
        className='d-lg-none d-xl-none'
      >
        <SliderCustom>
          {items.map((item, index) => (
            <Slide key={uuid()} index={index}>
              <Service {...item} index={index} />
            </Slide>
          ))}
        </SliderCustom>
        <DotsCont>
          <ButtonBackCustom>
            <LeftOutlined />
          </ButtonBackCustom>
          <ButtonNextCustom>
            <RightOutlined />
          </ButtonNextCustom>
        </DotsCont>
      </CarouselProvider>
      <CarouselProvider
        naturalSlideWidth={100}
        //naturalSlideHeight={60}
        isIntrinsicHeight={true}
        totalSlides={chunkedItemsDesktop.length}
        visibleSlides={1}
        orientation='horizontal'
        className='d-none d-md-block'
      >
        <SliderCustom>
          {chunkedItemsDesktop.map((mainItem, mainIndex) => (
            <Slide key={uuid()} index={mainIndex}>
              <Row style={{ marginRight: "1rem" }}>
                {mainItem.map((item, index) => (
                  <Col key={uuid()} md={6}>
                    <Service {...item} index={index} />
                  </Col>
                ))}
              </Row>
            </Slide>
          ))}
        </SliderCustom>
        <DotsCont>
          <ButtonBackCustom>
            <LeftOutlined />
          </ButtonBackCustom>
          <ButtonNextCustom>
            <RightOutlined />
          </ButtonNextCustom>
        </DotsCont>
      </CarouselProvider>
    </Fragment>
  );
};
