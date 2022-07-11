import React from "react";
import { Card, Button, Col, Row, Image } from "antd";
import {
  EnvironmentOutlined,
  UserOutlined,
  EnvironmentTwoTone,
} from "@ant-design/icons";
import "./MyTrainingCardCom.css";

const MyTrainingCardCom = (props) => {
  const item = props.item;
  const key = props.index;
  return (
    <Card
      key={key}
      className="tainingCard"
      hoverable
      style={{
        borderRadius: 12,
        maxWidth: 400,
      }}
      bodyStyle={{ padding: "0" }}
    >
      <Row className="cardTrainingEvent">
        <Col>
          <Image width={150} height={140} src={item.image} />
        </Col>
        <Col className="textContent">
          <p className="tLocation">
            <EnvironmentOutlined className="iconCard" />
            {item.location}
          </p>
          <h3 className="tTitle">{item.title}</h3>
          <p className="tDate">{item.date}</p>
          <p className="tUser">
            <UserOutlined className="iconCard" />
            {item.trainerUser}
          </p>
        </Col>
      </Row>
      <Row className="cardTrainingFooter" justify="space-between">
        <Col>
          <h4 className="textFooter">Event Start</h4>
        </Col>
        <Col>
          <Button type="primary" size="small">
            <EnvironmentTwoTone />
            View Location
          </Button>
        </Col>
      </Row>
    </Card>
  );
};
// function MyTrainingCardCom(Item) {

// }

export default MyTrainingCardCom;
