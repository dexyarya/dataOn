import { Rate } from "antd";
import { covertdate } from "./convertDate";

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

export { columns };
