import { Table, Card, Badge, Rate } from "antd";
import React, { useState, useEffect } from "react";
import "../MyTrainingTableView/MyTrainingTableView.css";
import instace from "../../API";

const AllTrainingTableView = () => {
  const [data, setData] = useState([]);

  const covertdate = (date, text) => {
    const monthNames = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];

    const dateFormat = new Date(date);
    const day = dateFormat.getDate();
    const month = monthNames[dateFormat.getMonth() + 1];
    const year = dateFormat.getFullYear();
    const hour =
      (dateFormat.getHours() < 10 ? "0" : "") + dateFormat.getHours();
    const minute =
      (dateFormat.getMinutes() < 10 ? "0" : "") + dateFormat.getMinutes();
    console.log("ini data" + text.endDate);

    const endFormat = new Date(text.endDate);

    const hourEnd =
      (endFormat.getHours() < 10 ? "0" : "") + endFormat.getHours();
    const minuteEnd =
      (endFormat.getMinutes() < 10 ? "0" : "") + endFormat.getMinutes();
    return `${day} ${month} ${year}, ${hour}:${minute} - ${hourEnd}:${minuteEnd}`;
  };

  async function getData() {
    try {
      const response = await instace.get("trainings");
      setData([...response.data]);
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
      key: "eventPeriod",
      sorter: (a, b) => new Date(a.startdate) - new Date(b.StartDate),
      render: covertdate,
    },
    {
      title: "Training Type",
      dataIndex: "isOnline",
      key: "eventType",

      render: (text) => {
        return <span>{text ? "Online Class" : "Offline Class"}</span>;
      },
    },

    {
      title: "Rating",
      dataIndex: "ratings",
      key: "ratings",
      render: (text) => {
        const data = text / 20;
        return <Rate disabled allowHalf defaultValue={data} />;
      },
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
