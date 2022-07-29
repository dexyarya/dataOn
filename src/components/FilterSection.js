import React, { useContext, useEffect } from "react";
import { Row, Card, Input, Select, Switch, Button, Col } from "antd";
import ButtonTog from "./ToggleView/ButtonTog";
import ButtonToge from "./ToggleView/ButtonToge";
import { AppContext } from "../Context/context";

const FileterSection = () => {
  const {
    getDataTraining,
    handleChanges,
    handleChange,
    handleClick,
    tableViews,
  } = useContext(AppContext);
  useEffect(() => {
    getDataTraining();
  }, []);
  // console.log("initialValue", tableViews);
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
            <Input
              type={"search"}
              style={{ width: 300 }}
              placeholder="Search"
              onChange={(e) => getDataTraining(e.target.value)}
            />
          </Row>
        </Col>

        <Col md={4} lg={5}>
          <Row justify="space-between">
            <Col style={{ marginBottom: "10px" }}>Event Training</Col>
            <Select
              placeholder="Select Event"
              align="left"
              style={{ width: 300 }}
              onChange={handleChanges}
            >
              <Option value="myTraining">My Training</Option>
              <Option value="trainings">All Training</Option>
            </Select>
          </Row>
        </Col>

        <Col md={4} lg={5}>
          <Row>
            <Col style={{ marginBottom: "10px", marginRight: "10px" }}>
              Status
            </Col>

            <Select
              placeholder="Select Event"
              align="left"
              style={{ width: 300 }}
              onChange={handleChange}
            >
              <Option value=""></Option>
              <Option name="eventType" value="isOnline">
                Online
              </Option>
              <Option name="eventType" value="isOffline">
                Offline
              </Option>
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
              {tableViews ? <ButtonTog /> : <ButtonToge />}
            </Button>
          </Row>
        </Col>
      </Row>
    </Card>
  );
};

export default FileterSection;
