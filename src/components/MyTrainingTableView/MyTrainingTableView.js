import { Table, Card, Badge, Rate } from "antd";
import React from "react";
import "./MyTrainingTableView.css";
import instace from "../../API";
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

    const endFormat = new Date(text.endDate);
    const hourEnd =
      (endFormat.getHours() < 10 ? "0" : "") + endFormat.getHours();
    const minuteEnd =
      (endFormat.getMinutes() < 10 ? "0" : "") + endFormat.getMinutes();
    const dateToday = `${day} ${month} ${year}, ${hour}:${minute} - ${hourEnd}:${minuteEnd}`;
    return dateToday;
  };

  const [items, setItems] = useState([]);
  // const [totalPage, setTotalPages] = useState(1);
  const [page, setPages] = useState(1);

  function setPagination(value) {
    setPages((value - 1) * 10);
  }
  async function getData() {
    console.log("ini item", items);
    try {
      const response = await instace.get(`my-training?limit=10&page=${page}`);
      setItems([...items, ...response.data]);
      // setTotalPages(44);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    getData();
  }, []);
  // function setPagination(page) {
  //   console.log("ini page", page);
  //   setPages(page);
  // }

  useEffect(() => {
    getData();
  }, [page]);

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
            count={44}
            style={{ backgroundColor: "#D6EFED", color: "#40a9ff" }}
          />
        </div>

        <Table
          columns={columns}
          dataSource={items}
          size={"small"}
          pagination={{
            defaultCurrent: 1,
            defaultPageSize: 10,
            size: "default",
            total: 44,
            onChange: (value) => {
              setPagination(value);
            },
            // onChange: (page) => {
            //   setPagination(page);
            // },
          }}
          className="tableClass"
        />
      </Card>
    </>
  );
};

export default MyTrainingTableView;
