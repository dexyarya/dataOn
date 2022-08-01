import React, { useContext } from "react";
import { Row, Card, Input, Select, Switch, Button, Col } from "antd";
import ButtonTog from "./ToggleView/ButtonTog";
import ButtonToge from "./ToggleView/ButtonToge";
import { AppContext } from "../Context/context";

const FileterSection = () => {
  const {
    handleChangeCompleted,
    handleChangeStatus,
    handleClick,
    tableViews,
    onSearch,
  } = useContext(AppContext);

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
              onChange={onSearch}
            />
          </Row>
        </Col>

        <Col md={4} lg={5}>
          <Row justify="space-between">
            <Col style={{ marginBottom: "10px" }}>Event Type</Col>
            <Select
              placeholder="Select Event"
              align="left"
              style={{ width: 300 }}
              onChange={handleChangeStatus}
            >
              <Option name="onLine" value="isOnline">
                Online Class
              </Option>
              <Option name="offLine" value="isOffline">
                Offline Class
              </Option>
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
              placeholder="Select Event"
              onChange={handleChangeCompleted}
            >
              <Option value="isCompleted">Completed</Option>
              <Option value="isNotCompleted">Not Completed</Option>
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
