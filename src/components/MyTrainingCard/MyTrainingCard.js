import React from "react";
import "./MyTrainingCard.css";
import { Card, Row } from "antd";
import MyTrainingCardCom from "./MyTrainingCardCom";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

function MyTrainingCard() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1280 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1279, min: 978 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 977, min: 675 },
      items: 2,
    },
    mobileSmall: {
      breakpoint: { max: 674, min: 0 },
      items: 1,
    },
  };
  return (
    <>
      <Card
        style={{
          margin: "10px",
          borderRadius: "20px",
        }}
      >
        <div className="titleTraining">My Training Event</div>

        <div className="container">
          <Carousel responsive={responsive}>
            <Row>
              <MyTrainingCardCom />
            </Row>
            <Row>
              <MyTrainingCardCom />
            </Row>
            <Row>
              <MyTrainingCardCom />
            </Row>
            <Row>
              <MyTrainingCardCom />
            </Row>
            <Row>
              <MyTrainingCardCom />
            </Row>
            <Row>
              <MyTrainingCardCom />
            </Row>
            <Row>
              <MyTrainingCardCom />
            </Row>
            <Row>
              <MyTrainingCardCom />
            </Row>
          </Carousel>
        </div>
      </Card>
    </>
  );
}

export default MyTrainingCard;
