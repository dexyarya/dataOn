import React from "react";
import { Row, Card, Input, Select, Switch, Button, Col } from "antd";
import ButtonTog from "./ToggleView/ButtonTog";
import ButtonToge from "./ToggleView/ButtonToge";

const FileterSection = ({ handleClick, tableView }) => {
  const { Option } = Select;
  const onChange = (checked) => {
    console.log(`checked = ${checked}`);
  };

  return (
    <Card
      style={{
        margin: "10px",
        borderRadius: "10px",
        paddingRight: "20px",
      }}
    >
      <Row justify="space-between" wrap>
        <Col md={4} lg={5}>
          <Row>
            <Col style={{ marginBottom: "10px" }}>Search Training</Col>
            <Input style={{ width: 300 }} placeholder="Search" />
          </Row>
        </Col>

        <Col md={4} lg={5}>
          <Row justify="space-between">
            <Col style={{ marginBottom: "10px" }}>Event Training</Col>
            <Select
              placeholder="Select Event"
              align="left"
              style={{ width: 300 }}
            >
              <Option value="1">Not Identified</Option>
              <Option value="2">Closed</Option>
            </Select>
          </Row>
        </Col>

        <Col md={4} lg={5}>
          <Row>
            <Col style={{ marginBottom: "10px", marginRight: "10px" }}>
              Status
            </Col>

            <Select
              align="left"
              style={{ width: 300 }}
              bodyStyle={{ padding: "0" }}
              placeholder="Select Status"
            >
              <Option value="1">Not Identified</Option>
              <Option value="2">Closed</Option>
            </Select>
          </Row>
        </Col>

        <Col xl={2}>
          <Row>
            <Col style={{ marginBottom: "10px" }}>Releated Job only</Col>
            <Row style={{ width: "100%" }}>
              <Switch defaultChecked onChange={onChange} />
            </Row>
          </Row>
        </Col>

        <Col xl={2}>
          <Row style={{ marginTop: 30 }}>
            <Button onClick={handleClick}>
              {tableView ? <ButtonTog /> : <ButtonToge />}
            </Button>
          </Row>
        </Col>
      </Row>
    </Card>
  );
};

export default FileterSection;
