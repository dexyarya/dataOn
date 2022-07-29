import { Table, Card, Badge } from "antd";
import React, { useState, useEffect, useContext } from "react";
import "../MyTrainingTableView/MyTrainingTableView.css";
import instace from "../../API";
import { Navigate } from "react-router-dom";
import { AppContext } from "../../Context/context";
import { columns } from "./AllTrainingTableViewData";

const AllTrainingTableView = () => {
  const { training } = useContext(AppContext);
  const [data, setData] = useState([]);
  const [totalPage, setTotalPages] = useState(1);
  const [pages, setPages] = useState(1);

  async function getData() {
    try {
      const response = await instace.get(`trainings?page=${pages}&limit=10`);
      setData([...response.data]);
      setTotalPages(training.data.length);
    } catch (err) {
      if (err) {
        Navigate("/missing");
      }
    }
  }
  useEffect(() => {
    getData();
  }, []);

  const setPagination = (page) => {
    setPages(page);
  };
  useEffect(() => {
    getData();
  }, [pages]);

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
            count={training.data.length}
            style={{ backgroundColor: "#D6EFED", color: "#40a9ff" }}
          />
        </div>

        <Table
          columns={columns}
          dataSource={data}
          size={"small"}
          pagination={{
            defaultCurrent: 1,
            PageSize: 10,
            size: "default",
            total: totalPage,
            onChange: (page) => {
              setPagination(page);
            },
          }}
          className="tableClass"
        />
      </Card>
    </>
  );
};

export default AllTrainingTableView;
