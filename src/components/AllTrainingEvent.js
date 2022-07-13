import React, { useState } from "react";
import CardTrainingEvent from "./CardTrainingEvent";
import { Card, Badge, List, Row, Col, Divider } from "antd";
import dataCard from "./dataAllTraining";
import InfiniteScroll from "react-infinite-scroll-component";

const AllTrainingEvent = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const nextData = () => {
    if (loading) return;
    setLoading(true);

    setTimeout(() => {
      // const Data = dataCard.slice(0, -5);
      const Data = dataCard;
      setData([...Data]);
      setLoading(false);
    }, 1500);
  };

  return (
    <div>
      <Card
        style={{
          margin: "15px",
          borderRadius: "10px",
          height: 5,
        }}
        title={
          <Badge
            title="All Training Event"
            className="site-badge-count-109"
            count="99+"
            offset={[25, 20]}
            color="#e6f7ff"
            style={{
              textColor: "#2db7f5",
            }}
          >
            <h2>All Training Event</h2>
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
            maxHeight: 350,
            overflow: "inherit",
          }}
        >
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
        </InfiniteScroll>
      </Card>
    </div>
  );
};

export default AllTrainingEvent;
