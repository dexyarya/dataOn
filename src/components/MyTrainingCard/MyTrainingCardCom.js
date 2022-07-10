import React from "react";
import { Card, Button, Col, Row, Image } from "antd";
import {
  EnvironmentOutlined,
  UserOutlined,
  EnvironmentTwoTone,
} from "@ant-design/icons";
import "./MyTrainingCardCom.css";

function MyTrainingCardCom() {
  return (
    <Card
      hoverable
      style={{
        borderRadius: 12,
      }}
      bodyStyle={{ padding: "0" }}
    >
      <Row className="cardTrainingEvent">
        <Col>
          <Image
            width={70}
            height={150}
            src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
          />
        </Col>
        <Col className="textContent">
          <p className="tLocation">
            <EnvironmentOutlined className="iconCard" />
            DataOn Simprung, Jakarta Selatan, ID
          </p>
          <h3 className="tTitle">Training Angular</h3>
          <p className="tDate">9 Jun 2022, 15:00 - 18.00</p>
          <p className="tUser">
            <UserOutlined className="iconCard" />
            Juwitha Susanti
          </p>
        </Col>
      </Row>
      <Row className="cardTrainingFooter" justify="space-between">
        <Col>
          <h4 className="textFooter">Event Start</h4>
        </Col>
        <Col>
          <Button type="primary">
            <EnvironmentTwoTone />
            View Location
          </Button>
        </Col>
      </Row>
    </Card>
  );
}

export default MyTrainingCardCom;
