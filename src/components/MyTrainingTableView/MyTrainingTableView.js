import { Table, Card, Badge, Rate } from "antd";
import React from "react";
import "./MyTrainingTableView.css";
import Instance from "../../utils/axios";
import { useEffect, useState } from "react";

const MyTrainingTableView = () => {
  const formatDate = (date, text) => {
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
    const newDate = new Date(date);
    const day = newDate.getDate();
    const month = monthNames[newDate.getMonth()];
    const year = newDate.getFullYear();
    const hour = (newDate.getHours() < 10 ? "0" : " ") + newDate.getHours();
    const minute =
      (newDate.getMinutes() < 10 ? "0" : " ") + newDate.getMinutes();
    const endHour = text.endDate.split(":")[1];
    console.log(text.endDate);
    const endMinute = text.endDate.split(":")[2].split(".")[0];
    const dateToday = `${day} ${month} ${year}, ${hour}:${minute} - ${endHour}:${endMinute}`;
    return dateToday;
  };

  const [items, setItems] = useState([]);

  useEffect(() => {
    Instance.get("my-training")
      .then((response) => {
        const data = response.data;
        setItems([...items, ...data]);
        // console.log(data[0].endDate);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const columns = [
    {
      title: "Event Name",
      dataIndex: "trainingName",
      key: "trainingName",
      render: (text) => <a>{text}</a>,
      sorter: (a, b) => a.trainingName.localeCompare(b.trainingName),
    },
    {
      title: "Event Type",
      dataIndex: "isOnline",
      key: "eventType",
      render: (text) => {
        return <span>{text ? "Online Class" : "Offline Class"}</span>;
      },
      // sorter: (a, b) => a.isOnline.localeCompare(b.isOnline),
    },
    {
      title: "Event Period",
      dataIndex: "startDate",
      key: "eventPeriod",
      sorter: (a, b) => new Date(a.startDate) - new Date(b.startDate),
      render: formatDate,
    },
    {
      title: "Trainier Name",
      dataIndex: "author",
      key: "trainierName",
      sorter: (a, b) => a.author.localeCompare(b.author),
    },
    {
      title: "Rating",
      dataIndex: "rating",
      key: "rating",
      render: (text) => {
        const data = text / 20;
        return <Rate disabled allowHalf defaultValue={data}></Rate>;
      },
    },
    {
      title: "Adtional Info",
      dataIndex: "information",
      key: "adtionalInfo",
      sorter: (a, b) => a.information.localeCompare(b.information),
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
          My Training Event{" "}
          <Badge
            className="site-badge-count-109"
            count={items.length}
            style={{ backgroundColor: "#D6EFED", color: "#40a9ff" }}
          />
        </div>

        <Table
          columns={columns}
          dataSource={items}
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

export default MyTrainingTableView;
