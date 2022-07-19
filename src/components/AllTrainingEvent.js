import React, { useState, useEffect } from "react";
import CardTrainingEvent from "./CardTrainingEvent";
import { Card, Badge, List, Row, Col, Divider } from "antd";

import InfiniteScroll from "react-infinite-scroll-component";
import instace from "../API";

const AllTrainingEvent = () => {
  const [data, setData] = useState([]);
  async function nextData() {
    try {
      const response = await instace.get("trainings");
      setData([...data, ...response.data]);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    nextData();
  }, []);

  return (
    <div>
      <Card
        style={{
          margin: "10px",
          borderRadius: "10px",
          // height: 5,
        }}
        title={
          <Badge
            title="All Training Event"
            className="site-badge-count-109"
            count={data.length}
            offset={[23, 16]}
            color="#e6f7ff"
            style={{
              backgroundColor: "#D6EFED",
              color: "#40a9ff",
            }}
          >
            <div
              style={{
                fontSize: "18px",
                fontWeight: "bold",
              }}
            >
              All Training Event
            </div>
          </Badge>
        }
      >
        <InfiniteScroll
          dataLength={data.length}
          hasMore={data.length < 10}
          next={nextData}
          loader={<h4 style={{ textAlign: "center" }}>Loading...</h4>}
          endMessage={
            <p style={{ textAlign: "center" }}>
              <Divider>Yay! You have seen it all</Divider>
            </p>
          }
          style={{
            overflow: "inherit",
            overflowX: "hidden",
            margin: "15px",
            borderRadius: "10px",
          }}
        >
          <List
            grid={{
              gutter: 8,
              xs: 2,
              sm: 2,
              md: 3,
              lg: 4,
              xl: 5,
            }}
            dataSource={data}
            renderItem={(item) => (
              <List.Item>
                <Row justify="space-between">
                  <Col ant-col-xs-24 ant-col-xl-8>
                    <CardTrainingEvent {...item} />
                  </Col>
                </Row>
              </List.Item>
            )}
          />
        </InfiniteScroll>
      </Card>
    </div>
  );
};

export default AllTrainingEvent;
