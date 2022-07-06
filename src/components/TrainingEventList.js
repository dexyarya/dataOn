import React from "react";
import { Breadcrumb, Card, Row, Col, Button } from "antd";
import { PlusOutlined, MoreOutlined } from "@ant-design/icons";

function TrainingEventList() {
  return (
    <Card
      className="card"
      style={{
        margin: "15px",
        borderRadius: "20px",
      }}
    >
      <Row className="row__card" align="center">
        <Col sm={7} lg={13} xxl={18} className="col__breadcrumb">
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

        <Col>
          <Button
            type="primary"
            style={{
              borderRadius: "5px",
            }}
          >
            <PlusOutlined /> Create Training Event
          </Button>
        </Col>

        <Col xs={{ span: 1, offset: 1 }}>
          <Button>
            <MoreOutlined /> More
          </Button>
        </Col>
      </Row>
    </Card>
  );
}

export default TrainingEventList;
