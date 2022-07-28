import React from "react";
import { Breadcrumb, Card, Row, Col, Button } from "antd";
import { PlusOutlined, MoreOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

function TrainingEventList() {
  return (
    <Card
      className="card"
      style={{
        margin: "0px 10px 10px 10px",
        borderRadius: "10px",
      }}
    >
      <Row className="row__card" justify="space-between">
        <Col className="col__breadcrumb">
          <Breadcrumb
            separator=">"
            style={{
              marginTop: "4px",
            }}
          >
            <Breadcrumb.Item href="">Training</Breadcrumb.Item>
            <Breadcrumb.Item>Training Event</Breadcrumb.Item>
          </Breadcrumb>
        </Col>

        <Row justify="space-between">
          <Col>
            <Link to="/create">
              <Button
                type="primary"
                style={{
                  borderRadius: "5px",
                }}
              >
                <PlusOutlined /> Create Training Event
              </Button>
            </Link>
          </Col>

          <Col style={{ marginLeft: "10px" }}>
            <Button>
              <MoreOutlined /> More
            </Button>
          </Col>
        </Row>
      </Row>
    </Card>
  );
}

export default TrainingEventList;
