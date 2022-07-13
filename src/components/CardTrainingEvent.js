import React from "react";
import { Card, Row, Col } from "antd";
import { UserOutlined, EnvironmentOutlined } from "@ant-design/icons";
import PropTypes from "prop-types";

const { Meta } = Card;

function CardTrainingEvent(props) {
  return (
    <div>
      <Card
        style={
          {
            // width: 250,
            // marginTop: "40px",
          }
        }
        cardStyle={{
          boxShadow: "5px 8px 24px 5px rgba(208, 216, 243, 0.6)",
        }}
        cover={<img alt="image" src={props.img} />}
      >
        <Col>
          <Meta description={props.location} avatar={<EnvironmentOutlined />} />
        </Col>

        <Meta title={props.title} />
        <Meta
          description={props.description}
          style={{
            marginTop: "30px",
          }}
        />
        <Row
          style={{
            marginTop: "2px",
          }}
        >
          <Col style={{ marginRight: "4px" }}>
            <UserOutlined />
          </Col>
          {props.people} People register
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
