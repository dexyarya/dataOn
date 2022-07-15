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
} from "antd";
import { UploadOutlined } from "@ant-design/icons";
const { RangePicker } = DatePicker;

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
    eventType: "",
    trainingCoures: "",
    eventName: "",
    providerType: "",
    provider: "",
    eventThubnail: "null",
    status: "",
    date: "",
  });

  const onChange = () => {
    setForm({
      ...form,
    });
  };
  const handlesubmit = (e) => {
    e.preventDefault();
    console.log(form);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  // const onFinish = (values) => {
  //   console.log("Success:", values);
  // };
  return (
    <Card
      style={{
        margin: "10px",
        borderRadius: "10px",
      }}
    >
      <Form
        // handlesubmit={onsubmit}
        {...formItemLayout}
        onSubmit={handlesubmit}
        onFinishFailed={onFinishFailed}
      >
        <Form.Item label="Event No">TREV-YYMM-XXXX</Form.Item>
        <Form.Item
          onChange={(e) => onChange(e.target.value)}
          label="Event Type"
          name="eventType"
          rules={[{ required: true, message: "Please select event type" }]}
        >
          <Select value={form.eventType} style={{ maxWidth: 500 }}>
            <Option value="1">Training</Option>
            <Option value="2">Seminar</Option>
          </Select>
        </Form.Item>
        <Form.Item
          onChange={(e) => onChange(e.target.value)}
          label="Training Course"
          name="trainingCourse  "
          rules={[{ required: true, message: "Please select training course" }]}
        >
          <Select value={form.trainingCoures} style={{ maxWidth: 500 }}>
            <Option value="1">Training Course 1</Option>
            <Option value="2">Training Course 2</Option>
          </Select>
        </Form.Item>
        <Form.Item
          value={form.eventName}
          onChange={(e) => onChange(e.target.value)}
          label="Event Name"
          name="eventName"
          rules={[{ required: true, message: "Please input event name" }]}
        >
          <Input style={{ maxWidth: 500 }} />
        </Form.Item>
        <Form.Item
          value={form.providerType}
          onChange={(e) => onChange(e.target.value)}
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
          onChange={(e) => onChange(e.target.value)}
          label="Provider"
          name="provider"
          rules={[{ required: true, message: "Please select provider" }]}
        >
          <Select value={form.provider} style={{ maxWidth: 450 }}>
            <Option value="1">provider 1</Option>
            <Option value="2">provider 2</Option>
          </Select>
          <Button
            style={{
              marginLeft: "10px",
            }}
          >
            +
          </Button>
        </Form.Item>
        <Form.Item
          value={form.eventThubnail}
          onChange={(e) => onChange(e.target.value)}
          label="Event Thumbnails"
          name="eventThumbnails"
          rules={[{ required: true, message: "Please upload event thumbnail" }]}
        >
          <Upload name="logo" action="/upload.do" listType="pic re">
            <Button icon={<UploadOutlined />}>Click to upload</Button>
          </Upload>
          <p
            className="text-muted"
            style={{ marginTop: "2px", color: "#bcc1c7" }}
          >
            Recomended image resolution is 500x300(5:3 aspect
            ratio,max.2MB,jpg/png)
          </p>
        </Form.Item>
        <Form.Item
          value={form.date}
          onChange={(e) => onChange(e.target.value)}
          label="Date"
          name="date"
          rules={[{ required: true, message: "Please select date" }]}
        >
          <RangePicker
            style={{ maxWidth: 300 }}
            showTime
            format="YYYY-MM-DD HH:mm:ss"
          />
        </Form.Item>
        <Form.Item
          value={form.status}
          onChange={(e) => onChange(e.target.value)}
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

        <Form.Item style={{ float: "right" }}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </Card>
  );
};

export default CreateTrainingEvent;
