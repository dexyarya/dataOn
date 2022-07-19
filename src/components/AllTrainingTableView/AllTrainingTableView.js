import { Table, Card, Badge, Rate } from "antd";
import React, { useState, useEffect } from "react";
import "../MyTrainingTableView/MyTrainingTableView.css";
// import { columns } from "./AllTrainingTableViewData";
import instace from "../../API";

const AllTrainingTableView = () => {
  const [data, setData] = useState([]);

  async function getData() {
    try {
      const response = await instace.get("trainings");
      setData([...response.data]);
      // console.log(response);
    } catch (err) {
      console.log(err);
    }
  }

  console.log(data);
  useEffect(() => {
    getData();
  }, []);

  const columns = [
    {
      title: "No",
      dataIndex: "no",
      key: "no",
      render: (text, record, index) => index + 1,
      align: "center",
    },
    {
      title: "Training Name",
      dataIndex: "eventName",
      key: "eventName",
      render: (text) => <a>{text}</a>,
      sorter: (a, b) => a.eventName.localeCompare(b.eventName),
    },
    {
      title: "Event Period",
      dataIndex: "startDate",
      key: "startDate",
      sorter: (a, b) => new Date(a.eventPeriod) - new Date(b.eventPeriod),
    },
    {
      title: "Training Type",
      dataIndex: "eventType",
      key: "eventType",
      sorter: (a, b) => a.eventType.localeCompare(b.eventType),
    },

    {
      title: "Rating",
      dataIndex: "ratings",
      key: "ratings",
      render: (text) => <Rate disabled defaultValue={text} />,
    },
    {
      title: "Trainier Name",
      dataIndex: "speaker",
      key: "speaker",
      sorter: (a, b) => a.speaker.localeCompare(b.speaker),
    },
    {
      title: "Adtional Info",
      dataIndex: "location",
      key: "location",
      sorter: (a, b) => a.location.localeCompare(b.location),
    },
  ];

  return (
    <>
      <Card
        style={{
          margin: "10px",
          borderRadius: "10px",
        }}
      >
        <div className="titleTraining">
          All Training Event{" "}
          <Badge
            className="site-badge-count-109"
            count={data.length}
            style={{ backgroundColor: "#D6EFED", color: "#40a9ff" }}
          />
        </div>

        <Table
          columns={columns}
          dataSource={data}
          size={"small"}
          pagination={{
            defaultPageSize: 10,
            size: "default",
          }}
          className="tableClass"
        />
      </Card>
    </>
  );
};

export default AllTrainingTableView;
