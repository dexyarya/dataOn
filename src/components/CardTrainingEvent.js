import React, { useState } from "react";
import { Card, Row, Col, Tooltip, Button, Modal, Image, message } from "antd";
import {
  UserOutlined,
  EnvironmentOutlined,
  GlobalOutlined,
  StarFilled,
} from "@ant-design/icons";
import PropTypes from "prop-types";
import "./ardTrainingEvent.css";
import { useNavigate } from "react-router-dom";
import instace from "../API";
import {
  formatDate,
  formatEndDate,
} from "../../src/components/MyTrainingCard/FormatDate";

function CardTrainingEvent(props) {
  const joinText = "You've joined this class";
  const isOnline = props.isOnline === "true" ? "Online" : "Offline";
  const Navigate = useNavigate();
  const id = props.id;

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isModalDelete, setIsModalDelete] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  const handleCancelDelete = () => {
    setIsModalDelete(false);
  };

  const handleDelete = () => {
    setIsModalVisible(false);
    setIsModalDelete(true);
  };

  const handleDalateModals = () => {
    setIsModalDelete(false);

    const response = instace.delete(`/trainings/${id}`);
    response
      .then((res) => {
        if (res.status === 200) {
          message.success("Training Event berhasil dihapus");
          window.location.reload();
        }
      })
      .catch((err) => {
        if (err) {
          message.error("Training Event gagal dihapus");
        }
      });
  };

  const handleUpdate = () => {
    Navigate(`/edit/${id}`);
  };

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
          onClick={showModal}
          hoverable
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
              {isOnline === true ? (
                <GlobalOutlined className="icon" />
              ) : (
                <EnvironmentOutlined className="icon" />
              )}
            </Col>
            <Col className="location">{props.location}</Col>
          </Row>

          <h3 className="title">{props.eventName}</h3>
          <p className="description" style={{ marginBottom: "0" }}>
            {formatDate(props.startDate)} - {formatEndDate(props.endDate)}
          </p>
          <Row justify="between">
            <Col>
              <UserOutlined className="icon" style={{ marginRight: "3px" }} />
            </Col>
            <Col className="people">{props.participant} People register</Col>
          </Row>
        </Card>
      </Tooltip>

      <Modal
        onCancel={handleCancel}
        visible={isModalVisible}
        footer={[
          <Button key="delete" type="danger" onClick={handleDelete}>
            Delete
          </Button>,
          <Button key="update" type="success" onClick={handleUpdate}>
            Edit
          </Button>,
          <Button key="back" onClick={handleCancel} type="primary">
            Cancle
          </Button>,
        ]}
      >
        <Row className="cardTrainingEvent">
          <Col>
            <Image width={150} height={140} src={props.image} />
          </Col>
          <Col className="textContent">
            <p className="tLocation">
              {isOnline === true ? (
                <GlobalOutlined className="icon" />
              ) : (
                <EnvironmentOutlined className="icon" />
              )}
              {props.location}
            </p>
            <h3 className="tTitle">{props.eventName}</h3>
            <p className="tDate">
              {formatDate(props.startDate)} - {formatEndDate(props.endDate)}
            </p>
            <p className="tUser">
              <UserOutlined className="iconCard" />
              {props.speaker}
            </p>
          </Col>
        </Row>
      </Modal>

      <Modal
        onCancel={handleCancelDelete}
        visible={isModalDelete}
        footer={[
          <Button key="back" onClick={handleDalateModals} type="danger">
            Delete
          </Button>,
          <Button key="back" onClick={handleCancelDelete} type="primary">
            Cancle
          </Button>,
        ]}
      >
        <h2>Do You Want Delete {props.eventName} </h2>
      </Modal>
    </div>
  );
}

CardTrainingEvent.propTypes = {
  eventName: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  participant: PropTypes.number.isRequired,
  endDate: PropTypes.number.isRequired,
  createdAt: PropTypes.number.isRequired,
};

export default CardTrainingEvent;
