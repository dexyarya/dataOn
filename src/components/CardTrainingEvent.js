import React from "react";
import { Card, Row, Col } from "antd";
import { UserOutlined, EnvironmentOutlined } from "@ant-design/icons";
import PropTypes from "prop-types";
import "./ardTrainingEvent.css";

// const { Meta } = Card;

function CardTrainingEvent(props) {
  return (
    <div>
      <Card
        style={{
          minWidth: 15,
          // maxWidth: 230,
          fontSize: "90%",

          // minHeight: 50,
          // Height: 10,
        }}
        cardStyle={{
          boxShadow: "5px 8px 24px 5px rgba(208, 216, 243, 0.6)",
        }}
        cover={<img alt="image" src={props.img} />}
      >
        <Row justify="between">
          <Col>
            <EnvironmentOutlined className="icon" />
          </Col>
          <Col className="location">{props.location}</Col>
        </Row>

        <p className="title">{props.title}</p>
        <p className="description">{props.description}</p>
        <Row justify="between">
          <Col>
            <UserOutlined className="icon" />
          </Col>
          <Col className="people">{props.people} People register</Col>
        </Row>
      </Card>
    </div>
  );
}

CardTrainingEvent.propTypes = {
  location: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  people: PropTypes.number.isRequired,
};

export default CardTrainingEvent;
