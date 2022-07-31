import { Card, Spin, Row, Col } from "antd";
const loading = () => {
  return (
    <Card
      style={{
        margin: "10px",
        borderRadius: "10px",
      }}
    >
      <Row className="example" justify="center">
        <Col>
          <Spin size="large" tip="Loading..." />
        </Col>
      </Row>
    </Card>
  );
};

export default loading;
