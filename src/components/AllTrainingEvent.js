import React from "react";
import CardTrainingEvent from "./CardTrainingEvent";
import { Card, Badge, List, Row, Col } from "antd";
import dataCard from "./dataAllTraining";

const AllTrainingEvent = () => {
  return (
    <div>
      <Card
        style={{
          margin: "15px",
          borderRadius: "10px",
        }}
        title={
          <Badge
            title="All Training Event"
            className="site-badge-count-109"
            count="99+"
            offset={[25, 15]}
            style={{
              backgroundColor: "#52c41a",
            }}
          >
            <h2>All Training Event</h2>
          </Badge>
        }
      >
        <Card>
          <List
            grid={{
              gutter: 16,
              xs: 1,
              sm: 2,
              md: 4,
              lg: 4,
              xl: 5,
            }}
            dataSource={dataCard}
            renderItem={(item) => (
              <List.Item>
                <Row justify="space-between">
                  <Col>
                    <CardTrainingEvent {...item} />
                  </Col>
                </Row>
              </List.Item>
            )}
          />
        </Card>

        {/* <Row justify="space-between"> */}
        {/* <VirtualList> */}
        {/* {dataCard.map((item) => (
              <List.Item key={item.id}>
                <Col>
                  <CardTrainingEvent {...item} />
                </Col>
              </List.Item>
            ))} */}
        {/* </VirtualList> */}
        {/* </Row>
        </List> */}

        {/* <VirtualList
            // data={dataCard}
            // height={400}
            // itemHeight={47}
            // iitemKey={dataCard.id}
            // onscroll={onScroll}
            > */}
        {/* <Card>
              <Row justify="space-between">
                {dataCard.map((item, index) => (
                  <Col key={index}> */}
        {/* <CardTrainingEvent {...item} /> */}
        {/* </Col>
                ))}
              </Row>
            </Card> */}
        {/* </VirtualList> */}
      </Card>
    </div>
  );
};

export default AllTrainingEvent;
