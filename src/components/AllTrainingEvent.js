import React, { useContext } from "react";
import CardTrainingEvent from "./CardTrainingEvent";
import { Card, Badge, List, Row, Col, Divider, message } from "antd";
import { AppContext } from "../Context/context";
import InfiniteScroll from "react-infinite-scroll-component";
import LoadingComponent from "../components/MyTrainingCard/LoadingComponent";

const AllTrainingEvent = () => {
  const { training, getDataTraining } = useContext(AppContext);
  if (training.isLoading) return <LoadingComponent />;
  if (training.error) return message.error("Get Data Error");

  return (
    <div>
      <Card
        style={{
          margin: "10px",
          borderRadius: "10px",
        }}
        title={
          <Badge
            title="All Training Event"
            className="site-badge-count-109"
            count={training.data.length}
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
          dataLength={training.data.length}
          hasMore={training.data.length < 20}
          next={getDataTraining}
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
            dataSource={training.data}
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
