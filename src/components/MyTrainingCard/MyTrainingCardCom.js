import React from "react";
import { Card, Button, Col, Row, Image } from "antd";
import {
  EnvironmentOutlined,
  UserOutlined,
  EnvironmentTwoTone,
} from "@ant-design/icons";
import "./MyTrainingCardCom.css";

const formatDate = (date) => {
  const monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const newDate = new Date(date);
  const day = newDate.getDate();
  const month = monthNames[newDate.getMonth()];
  const year = newDate.getFullYear();
  const hour = (newDate.getHours() < 10 ? "0" : "") + newDate.getHours();
  const minute = (newDate.getMinutes() < 10 ? "0" : "") + newDate.getMinutes();
  const dateToday = day + " " + month + " " + year + ", " + hour + ":" + minute;
  return dateToday;
};

const formatEndDate = (endDate) => {
  const newDate = new Date(endDate);
  const hour = (newDate.getHours() < 10 ? "0" : "") + newDate.getHours();
  const minute = (newDate.getMinutes() < 10 ? "0" : "") + newDate.getMinutes();
  const clockToday = hour + ":" + minute;
  return clockToday;
};

const MyTrainingCardCom = (props) => {
  const item = props.item;
  const key = props.id;
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
          <h3 className="tTitle">{item.trainingName}</h3>
          <p className="tDate">
            {formatDate(item.startDate)} - {formatEndDate(item.endDate)}
          </p>
          <p className="tUser">
            <UserOutlined className="iconCard" />
            {item.author}
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

export default MyTrainingCardCom;
