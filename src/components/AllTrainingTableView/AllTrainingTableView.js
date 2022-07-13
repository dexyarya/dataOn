import { Table, Card, Badge } from "antd";
import React from "react";
import "../MyTrainingTableView/MyTrainingTableView.css";
import { data, columns } from "./AllTrainingTableViewData";
const AllTrainingTableView = () => {
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
            count={102}
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
