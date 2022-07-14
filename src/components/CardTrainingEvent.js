import React from "react";
import { Card, Row, Col, Tooltip, Button } from "antd";
import {
  UserOutlined,
  EnvironmentOutlined,
  StarFilled,
} from "@ant-design/icons";
import PropTypes from "prop-types";
import "./ardTrainingEvent.css";

function CardTrainingEvent(props) {
  const joinText = "You've joined this class";
  return (
    <div>
      <Tooltip
        placement="right"
        title={props.title}
        color="#fff"
        overlay={
          <div className="tooltip">
            <h2 className="titleTooltip">{props.title}</h2>
            <div className="recomen">
              <StarFilled className="iconStar" />
              Recommended Training
            </div>

            <Row
              justify="center"
              style={{ marginTop: "10px", borderRadius: "10px" }}
            >
              <Col align="center">
                <Button
                  className="btn_join"
                  style={{ background: "#f5f5f5", borderColor: "#bcc1c7" }}
                  size="large"
                >
                  <p className="button_title"> {joinText}</p>
                </Button>
                <Button type="text">
                  <p className="button_title">Invite Other</p>
                </Button>
              </Col>
            </Row>
          </div>
        }
      >
        <Card
          style={{
            minWidth: 15,
            fontSize: "90%",
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

          <h3 className="title">{props.title}</h3>
          <p className="description" style={{ marginBottom: "0" }}>
            {props.description}
          </p>
          <Row justify="between">
            <Col>
              <UserOutlined className="icon" />
            </Col>
            <Col className="people">{props.people} People register</Col>
          </Row>
        </Card>
      </Tooltip>
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
