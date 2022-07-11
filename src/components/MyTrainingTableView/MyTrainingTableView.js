import { Table, Card, Badge, Rate } from "antd";
import React from "react";
const data = [
  {
    key: "1",
    name: "Vivi",
    eventType: "Online class",
    eventPeriod: "08/18/2019, 11:53:32",
    trainierName: "juwitha Susanti",
    rating: <Rate disabled defaultValue={5} />,
    adtionalInfo: "New York No. 1 Lake Park",
  },
  {
    key: "2",
    name: "Bagus",
    eventType: "Offline class",
    eventPeriod: "06/18/2019, 13:53:32",
    trainierName: "Zuki Yah",
    rating: <Rate disabled defaultValue={3} />,
    adtionalInfo: "London No. 1 Lake Park",
  },
  {
    key: "3",
    name: "Adam",
    eventType: "Online class",
    eventPeriod: "07/18/2019, 15:53:32",
    trainierName: "Bambang",
    rating: <Rate disabled defaultValue={3} />,
    adtionalInfo: "Sidney No. 1 Lake Park",
  },
  {
    key: "4",
    name: "Junaidi",
    eventType: "Offline class",
    eventPeriod: "02/18/2019, 12:53:32",
    trainierName: "Jojo",
    rating: <Rate disabled defaultValue={4} />,
    adtionalInfo: "London No. 2 Lake Park",
  },
  {
    key: "5",
    name: "Mario",
    eventType: "Offline class",
    eventPeriod: "03/10/2012, 12:53:32",
    trainierName: "Tepos",
    rating: <Rate disabled defaultValue={5} />,
    adtionalInfo: "London No. 2 Lake Park",
  },
  {
    key: "6",
    name: "Kiansantang",
    eventType: "Online class",
    eventPeriod: "12/29/2019, 12:53:32",
    trainierName: "Naik",
    rating: <Rate disabled defaultValue={2} />,
    adtionalInfo: "London No. 2 Lake Park",
  },
  {
    key: "7",
    name: "Spiderman",
    eventType: "Offline class",
    eventPeriod: "11/17/2022, 12:53:32",
    trainierName: "Adidas",
    rating: <Rate disabled defaultValue={3} />,
    adtionalInfo: "London No. 2 Lake Park",
  },
  {
    key: "8",
    name: "Badman",
    eventType: "Online class",
    eventPeriod: "09/02/2022, 12:53:32",
    trainierName: "Hero",
    rating: <Rate disabled defaultValue={1} />,
    adtionalInfo: "London No. 2 Lake Park",
  },
  {
    key: "9",
    name: "Iron Man",
    eventType: "Offline class",
    eventPeriod: "07/25/2022, 12:53:32",
    trainierName: "Kiki",
    rating: <Rate disabled defaultValue={4} />,
    adtionalInfo: "London No. 2 Lake Park",
  },
  {
    key: "10",
    name: "Siti",
    eventType: "Offline class",
    eventPeriod: "05/12/2022, 12:53:32",
    trainierName: "Lasono",
    rating: <Rate disabled defaultValue={2} />,
    adtionalInfo: "London No. 2 Lake Park",
  },
  {
    key: "11",
    name: "Iqbal",
    eventType: "Offline class",
    eventPeriod: "02/18/2019, 12:53:32",
    trainierName: "Boy Wiliam",
    rating: <Rate disabled defaultValue={0} />,
    adtionalInfo: "London No. 2 Lake Park",
  },
];

const MyTrainingTableView = () => {
  const columns = [
    {
      title: "Event Name",
      dataIndex: "name",
      key: "name",
      sorter: (a, b) => a.name.localeCompare(b.name),
    },
    {
      title: "Event Type",
      dataIndex: "eventType",
      key: "eventType",
      sorter: (a, b) => a.eventType.localeCompare(b.eventType),
    },
    {
      title: "Event Period",
      dataIndex: "eventPeriod",
      key: "eventPeriod",
      sorter: (a, b) => new Date(a.eventPeriod) - new Date(b.eventPeriod),
    },
    {
      title: "Trainier Name",
      dataIndex: "trainierName",
      key: "trainierName",
      sorter: (a, b) => a.trainierName.localeCompare(b.trainierName),
    },
    {
      title: "Rating",
      dataIndex: "rating",
      key: "rating",
      // sorter: (a, b) => a.defaultValue.localeCompare(b.defaultValue),
    },
    {
      title: "Adtional Info",
      dataIndex: "adtionalInfo",
      key: "adtionalInfo",
      sorter: (a, b) => a.adtionalInfo.localeCompare(b.adtionalInfo),
    },
  ];
  return (
    <>
      <Card
        style={{
          margin: "10px",
          borderRadius: "20px",
        }}
      >
        <div className="titleTraining">
          My Training Event{" "}
          <Badge
            className="site-badge-count-109"
            count={109}
            style={{
              backgroundColor: "#52c41a",
            }}
          />
        </div>

        <Table
          columns={columns}
          dataSource={data}
          size={"middle"}
          pagination={{
            defaultPageSize: 10,
          }}
        />
      </Card>
    </>
  );
};

export default MyTrainingTableView;
