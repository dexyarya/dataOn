import React, { useState } from "react";
import {
  Card,
  Form,
  Select,
  Input,
  Button,
  Upload,
  DatePicker,
  Divider,
  Radio,
  InputNumber,
  message,
  // Modal,
} from "antd";
import { UploadOutlined } from "@ant-design/icons";
// import { Link } from "react-router-dom";
import instace from "../../API";
// import { Route, Router, useNavigate } from "react-router-dom";
const { RangePicker } = DatePicker;
// const Navigate = useNavigate();
// const Link = Link();
// import { useHistory } from "react-router-dom";
// let history = useHistory();

const { Option } = Select;
const formItemLayout = {
  labelCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 8,
    },
  },
  wrapperCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 16,
    },
  },
};

const CreateTrainingEvent = () => {
  const [form, setForm] = useState({
    trainingName: "",
    startDate: "",
    endDate: "",
    image: "",
    author: "",
    location: "",
    ratings: "",
    isOnline: "",
    isOffline: "",
    information: "",
    participant: "",
    eventType: "",
  });

  const handleChanges = (v, e) => {
    setForm({
      ...form,
      eventType: e.value,
    });
  };

  const handleChangeDate = (range) => {
    const valueOfInput1 = range[0].format();
    const valueOfInput2 = range[1].format();
    setForm({
      ...form,
      startDate: valueOfInput1,
      endDate: valueOfInput2,
    });

    console.log("start date", valueOfInput1);
    console.log("end date", valueOfInput2);
  };

  const handleChange = (e) => {
    const value = e.target.value;
    setForm({
      ...form,
      [e.target.id]: value,
    });
  };

  const handlesubmit = async () => {
    const post = {
      image:
        "https://s3-ap-southeast-1.amazonaws.com/dressup/test/upload-images/image-1649837020.jpeg",
      endDate: form.endDate,
      ratings: form.ratings,
      author: form.author,
      location: form.location,
      trainingName: form.trainingName,
      startDate: form.startDate,
      information: form.information,
      participant: form.participant,
      isOnline: form.eventType === "isOnline" ? true : false,
      isOffline: form.eventType === "isOffline" ? true : false,
    };
    try {
      let response = await instace.post("my-training", post);
      console.log(response);
      alert("data berhasil di buat");
    } catch (error) {
      console.error(error);
      alert("data tidak berhasil di buat");
    }
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const props = {
    name: "file",
    action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",
    headers: {
      authorization: "authorization-text",
    },

    onChange(info) {
      if (info.file.status !== "uploading") {
        console.log(info.file, info.fileList);
      }

      if (info.file.status === "done") {
        message.success(`${info.file.name} file uploaded successfully`);
      } else if (info.file.status === "error") {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
  };

  // const success = () => {
  //   Modal.success({
  //     content: "Data Berhasil di Buat",
  //   });
  // };

  return (
    <Card
      style={{
        margin: "10px",
        borderRadius: "10px",
      }}
    >
      <Form
        {...formItemLayout}
        onFinish={handlesubmit}
        onFinishFailed={onFinishFailed}
      >
        <Form.Item label="Event No">TREV-YYMM-XXXX</Form.Item>
        <Form.Item
          name="eventType"
          label="Event Type"
          rules={[{ required: true, message: "Please select event type" }]}
        >
          <Select
            value={form.eventType}
            onChange={handleChanges}
            style={{ maxWidth: 500 }}
          >
            <Option name="eventType" value="isOnline">
              Online Class
            </Option>
            <Option name="eventType" value="isOffline">
              Offline Class
            </Option>
          </Select>
        </Form.Item>
        <Form.Item
          name="trainingName"
          label="Training Name"
          value={form.trainingName}
          onChange={handleChange}
          rules={[{ required: true, message: "Please input event name" }]}
        >
          <Input style={{ maxWidth: 500 }} />
        </Form.Item>
        <Form.Item
          value={form.author}
          onChange={handleChange}
          label="Author"
          name="author"
          rules={[{ required: true, message: "Please input Autor" }]}
        >
          <Input style={{ maxWidth: 500 }} />
        </Form.Item>
        <Form.Item
          value={form.location}
          onChange={handleChange}
          label="Location"
          name="location"
          rules={[{ required: true, message: "Please input Location" }]}
        >
          <Input style={{ maxWidth: 500 }} />
        </Form.Item>
        <Form.Item
          value={form.information}
          onChange={handleChange}
          label="Information"
          name="information"
          rules={[{ required: true, message: "Please input Information" }]}
        >
          <Input style={{ maxWidth: 500 }} />
        </Form.Item>
        <Form.Item
          label="Participant"
          value={form.participant}
          onChange={handleChange}
        >
          <Form.Item name="participant" noStyle>
            <InputNumber min={1} max={100} type="number" />
          </Form.Item>
        </Form.Item>
        <Form.Item label="Rating" onChange={handleChange} value={form.ratings}>
          <Form.Item name="ratings" noStyle>
            <InputNumber min={1} max={100} type="number" />
          </Form.Item>
        </Form.Item>
        <Form.Item
          value={form.providerType}
          onChange={handleChange}
          label="Provider Type"
          name="providerType"
          rules={[{ required: true, message: "Please select provider type" }]}
        >
          <Radio.Group>
            <Radio.Button value="a">Internal</Radio.Button>
            <Radio.Button value="b">External</Radio.Button>
          </Radio.Group>
        </Form.Item>
        <Form.Item
          onChange={handleChange}
          label="Provider"
          name="provider"
          rules={[{ required: true, message: "Please select provider" }]}
        >
          <Select value={form.provider} style={{ maxWidth: 450 }}>
            <Option value="1">provider 1</Option>
            <Option value="2">provider 2</Option>
          </Select>
        </Form.Item>
        <Form.Item
          value={form.image}
          onChange={handleChange}
          label="Image"
          name="image"
          rules={[{ required: true, message: "Please upload event thumbnail" }]}
        >
          <Upload {...props}>
            <Button icon={<UploadOutlined />}>Click to Upload</Button>
          </Upload>
        </Form.Item>
        <Form.Item
          value={form.date}
          label="Date"
          name="date"
          rules={[{ required: true, message: "Please select date" }]}
        >
          <RangePicker
            style={{ maxWidth: 300 }}
            showTime
            format="YYYY-MM-DD HH:mm"
            onChange={handleChangeDate}
          />
        </Form.Item>
        <Form.Item
          value={form.status}
          onChange={handleChange}
          label="Status"
          name="status"
          rules={[{ required: true, message: "Please select status" }]}
        >
          <Radio.Group>
            <Radio.Button value="a">Draft</Radio.Button>
            <Radio.Button value="b">Open For Registration</Radio.Button>
            <Radio.Button value="c">Closed For Registration</Radio.Button>
          </Radio.Group>
        </Form.Item>
        <Divider />
        {/* <Link to="/"> */}
        <Form.Item style={{ float: "right" }}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
        {/* </Link> */}
      </Form>
    </Card>
  );
};

export default CreateTrainingEvent;
