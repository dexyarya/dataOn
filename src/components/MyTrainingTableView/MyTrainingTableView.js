import { Table, Card, Badge } from "antd";
import React from "react";
import "./MyTrainingTableView.css";
import { data, columns } from "./MyTrainingTableViewData";
const MyTrainingTableView = () => {
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
            count={74}
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

export default MyTrainingTableView;
