import { Rate } from "antd";

const data = [
  {
    key: "1",
    name: "Training Angular",
    eventType: "Online class",
    eventPeriod: "08/18/2019, 11:53:32",
    trainierName: "juwitha Susanti",
    rating: <Rate disabled defaultValue={3} />,
    adtionalInfo: "New York No. 1 Lake Park",
  },
  {
    key: "2",
    name: "Training Selenium",
    eventType: "Offline class",
    eventPeriod: "06/18/2019, 13:53:32",
    trainierName: "Zuki Yah",
    rating: <Rate disabled defaultValue={2} />,
    adtionalInfo: "London No. 1 Lake Park",
  },
  {
    key: "3",
    name: "Training Figma",
    eventType: "Online class",
    eventPeriod: "07/18/2019, 15:53:32",
    trainierName: "Bambang Sopo",
    rating: <Rate disabled defaultValue={1} />,
    adtionalInfo: "Sidney No. 1 Lake Park",
  },
  {
    key: "4",
    name: "Seminar QA",
    eventType: "Offline class",
    eventPeriod: "02/18/2019, 12:53:32",
    trainierName: "Jojo Jiji",
    rating: <Rate disabled defaultValue={5} />,
    adtionalInfo: "London No. 2 Lake Park",
  },
  {
    key: "5",
    name: "Training Asal",
    eventType: "Offline class",
    eventPeriod: "03/10/2012, 12:53:32",
    trainierName: "Tepos Sekale",
    rating: <Rate disabled defaultValue={4} />,
    adtionalInfo: "London No. 2 Lake Park",
  },
  {
    key: "6",
    name: "Training Golang",
    eventType: "Online class",
    eventPeriod: "12/29/2019, 12:53:32",
    trainierName: "Naik ki",
    rating: <Rate disabled defaultValue={0} />,
    adtionalInfo: "London No. 2 Lake Park",
  },
  {
    key: "7",
    name: "Training White Box Testing",
    eventType: "Offline class",
    eventPeriod: "11/17/2022, 12:53:32",
    trainierName: "Adi sadidas ",
    rating: <Rate disabled defaultValue={5} />,
    adtionalInfo: "London No. 2 Lake Park",
  },
  {
    key: "8",
    name: "Training Full Stack ",
    eventType: "Online class",
    eventPeriod: "09/02/2022, 12:53:32",
    trainierName: "Hero Pool",
    rating: <Rate disabled defaultValue={0} />,
    adtionalInfo: "London No. 2 Lake Park",
  },
  {
    key: "9",
    name: "Training Database",
    eventType: "Offline class",
    eventPeriod: "07/25/2022, 12:53:32",
    trainierName: "Kiki kaka",
    rating: <Rate disabled defaultValue={2} />,
    adtionalInfo: "London No. 2 Lake Park",
  },
  {
    key: "10",
    name: "Training Mysql",
    eventType: "Offline class",
    eventPeriod: "05/12/2022, 12:53:32",
    trainierName: "Lasono Hib",
    rating: <Rate disabled defaultValue={5} />,
    adtionalInfo: "London No. 2 Lake Park",
  },
  {
    key: "11",
    name: "Training Git",
    eventType: "Offline class",
    eventPeriod: "02/18/2019, 12:53:32",
    trainierName: "Boy Wiliam",
    rating: <Rate disabled defaultValue={0} />,
    adtionalInfo: "London No. 2 Lake Park",
  },
  {
    key: "12",
    name: "training refactory",
    eventType: "Offline class",
    eventPeriod: "02/18/2019, 12:53:32",
    trainierName: "Boy Wiliam",
    rating: <Rate disabled defaultValue={0} />,
    adtionalInfo: "London No. 2 Lake Park",
  },
  {
    key: "13",
    name: "Training Github",
    eventType: "Offline class",
    eventPeriod: "02/18/2019, 12:53:32",
    trainierName: "Boy Wiliam",
    rating: <Rate disabled defaultValue={0} />,
    adtionalInfo: "London No. 2 Lake Park",
  },
];

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
    dataIndex: "name",
    key: "name",
    render: (text) => <a>{text}</a>,
    sorter: (a, b) => a.name.localeCompare(b.name),
  },
  {
    title: "Event Period",
    dataIndex: "eventPeriod",
    key: "eventPeriod",
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
    dataIndex: "rating",
    key: "rating",
  },
  {
    title: "Trainier Name",
    dataIndex: "trainierName",
    key: "trainierName",
    sorter: (a, b) => a.trainierName.localeCompare(b.trainierName),
  },
  {
    title: "Adtional Info",
    dataIndex: "adtionalInfo",
    key: "adtionalInfo",
    sorter: (a, b) => a.adtionalInfo.localeCompare(b.adtionalInfo),
  },
];

export { data, columns };