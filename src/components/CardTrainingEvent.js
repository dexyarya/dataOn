import React from "react";
import { Card, Row, Col, Tooltip, Button } from "antd";
import {
  UserOutlined,
  EnvironmentOutlined,
  GlobalOutlined,
  StarFilled,
} from "@ant-design/icons";
// import PropTypes from "prop-types";
import "./ardTrainingEvent.css";

const covertdate = (date) => {
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

  const dateFormat = new Date(date);
  const day = dateFormat.getDate();
  const month = monthNames[dateFormat.getMonth() + 1];
  const year = dateFormat.getFullYear();
  const hour = (dateFormat.getHours() < 10 ? "0" : "") + dateFormat.getHours();
  const minute =
    (dateFormat.getMinutes() < 10 ? "0" : "") + dateFormat.getMinutes();
  return `${day} ${month} ${year}, ${hour}:${minute}`;
};

const endDate = (endDate) => {
  const dateFormat = new Date(endDate);
  const hour = (dateFormat.getHours() < 10 ? "0" : "") + dateFormat.getHours();
  const minute =
    (dateFormat.getMinutes() < 10 ? "0" : "") + dateFormat.getMinutes();
  return `${hour}:${minute}`;
};

function CardTrainingEvent(props) {
  const joinText = "You've joined this class";
  const isOnline = props.isOnline;
  return (
    <div>
      <Tooltip
        placement="right"
        title={props.eventName}
        color="#fff"
        overlay={
          <div className="tooltip">
            <h2 className="titleTooltip">{props.eventName}</h2>
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
          cover={<img alt="image" src={props.image} />}
        >
          <Row justify="between">
            <Col style={{ marginRight: "3px" }}>
              {isOnline ? (
                <GlobalOutlined className="icon" />
              ) : (
                <EnvironmentOutlined className="icon" />
              )}
            </Col>
            <Col className="location">{props.location}</Col>
          </Row>

          <h3 className="title">{props.eventName}</h3>
          <p className="description" style={{ marginBottom: "0" }}>
            {/* {props.description} */}
            {covertdate(props.createdAt)} - {endDate(props.endDate)}
          </p>
          <Row justify="between">
            <Col>
              <UserOutlined className="icon" style={{ marginRight: "3px" }} />
            </Col>
            <Col className="people">{props.participant} People register</Col>
          </Row>
        </Card>
      </Tooltip>
    </div>
  );
}

// CardTrainingEvent.propTypes = {
//   location: PropTypes.string.isRequired,
//   img: PropTypes.string.isRequired,
//   title: PropTypes.string.isRequired,
//   description: PropTypes.string.isRequired,
//   people: PropTypes.number.isRequired,
// };

export default CardTrainingEvent;
