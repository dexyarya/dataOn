import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import instace from "../../API";
import dayjs from "dayjs";
import {
  Card,
  Form,
  Select,
  Input,
  Button,
  DatePicker,
  Divider,
  Radio,
  InputNumber,
  message,
} from "antd";
import moment from "moment";
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

const EditTraining = () => {
  const Navigate = useNavigate();
  const [data, setData] = useState({
    eventType: "",
    eventName: "",
    location: "",
    information: "",
    participant: "",
    ratings: "",
    image: "",
    startDate: "",
    endDate: "",
    isOnline: "",
    date: "",
    isOffline: "",
    speaker: "",
  });

  const id = useParams();
  async function getData() {
    try {
      const response = await instace.get(`trainings/${id.id}`);

      setData({
        eventName: response.data.eventName,
        startDate: dayjs(response.data.startDate).format("YYYY-MM-DD HH:mm"),
        endDate: dayjs(response.data.endDate).format("YYYY-MM-DD HH:mm"),
        image: response.data.image,
        eventType: response.isOffline === true ? "isOffline" : "isOnline",
        location: response.data.location,
        speaker: response.data.speaker,
        ratings: response.data.ratings,
        information: response.data.information,
        participant: response.data.participant,
      });
    } catch (err) {
      if (err) {
        Navigate("/missing");
      }
    }
  }
  useEffect(() => {
    getData();
  }, []);

  const [form] = Form.useForm();

  form.setFieldsValue({
    eventName: data.eventName,
    date: [moment(data.startDate), moment(data.endDate)],
    image: data.image,
    eventType: data.eventType,
    location: data.location,
    speaker: data.speaker,
    ratings: data.ratings,
    information: data.information,
    participant: data.participant,
  });

  const handleChanges = (v, e) => {
    setData({
      ...data,
      eventType: e.value,
    });
  };

  const handleChange = (e) => {
    const value = e.target.value;
    setData({
      ...data,
      [e.target.id]: value,
    });
  };
  const handleChangeDate = (range) => {
    const valueOfInput1 = range[0].format();
    const valueOfInput2 = range[1].format();

    setData({
      ...data,
      startDate: valueOfInput1,
      endDate: valueOfInput2,
    });
  };
  const handlesubmit = (e) => {
    e.preventDefault();
  };

  const handleUpdate = async () => {
    const updateData = {
      eventName: data.eventName,
      location: data.location,
      information: data.information,
      participant: data.participant,
      ratings: data.ratings,
      date: [moment(data.startDate), moment(data.endDate)],
      isOnline: data.eventType === "isOnline" ? true : false,
      isOffline: data.eventType === "isOffline" ? true : false,
      speaker: data.speaker,
    };
    try {
      const response = await instace.put(`trainings/${id.id}`, updateData);
      if (response.status === 200) {
        message.success("Training Updated Successfully");
        Navigate("/");
      }
    } catch (err) {
      message.error("This is an error message");
    }
  };

  return (
    <Card
      style={{
        margin: "10px",
        borderRadius: "10px",
      }}
    >
      <Form {...formItemLayout} form={form} onSubmit={handlesubmit}>
        <Form.Item label="Event No">TREV-YYMM-XXXX</Form.Item>
        <Form.Item
          label="Event Type"
          name="eventType"
          value={data.eventType}
          rules={[{ required: true, message: "Please select event type" }]}
        >
          <Select onChange={handleChanges} style={{ maxWidth: 500 }}>
            <Option value="isOnline">Online Class</Option>
            <Option value="isOffline">Offline Class</Option>
          </Select>
        </Form.Item>
        <Form.Item
          value={data.eventName}
          onChange={handleChange}
          label="Training Name"
          name="eventName"
          rules={[{ required: true, message: "Please input event name" }]}
        >
          <Input style={{ maxWidth: 500 }} />
        </Form.Item>

        <Form.Item
          value={data.location}
          onChange={handleChange}
          initialValue={data.location}
          label="Location"
          name="location"
          rules={[{ required: true, message: "Please input Location" }]}
        >
          <Input type="text" style={{ maxWidth: 500 }} />
        </Form.Item>
        <Form.Item
          value={data.information}
          onChange={handleChange}
          label="Information"
          name="information"
          rules={[{ required: true, message: "Please input Location" }]}
        >
          <Input style={{ maxWidth: 500 }} />
        </Form.Item>
        <Form.Item
          label="Participant"
          value={data.participant}
          onChange={handleChange}
          rules={[{ required: true, message: "Please select event type" }]}
        >
          <Form.Item name="participant" noStyle>
            <InputNumber min={1} max={100} type="number" />
          </Form.Item>
        </Form.Item>

        <Form.Item label="Ratings" value={data.ratings} onChange={handleChange}>
          <Form.Item name="ratings" noStyle>
            <InputNumber min={1} max={100} type="number" />
          </Form.Item>
        </Form.Item>
        <Form.Item
          value={data.providerType}
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
          value={data.date}
          label="Date"
          name="date"
          rules={[{ required: true, message: "Please select date" }]}
        >
          <RangePicker
            onChange={handleChangeDate}
            style={{ maxWidth: 300 }}
            showTime
            format="YYYY-MM-DD HH:mm"
            defaultPickerValue={[moment(data.startDate), moment(data.endDate)]}
          />
        </Form.Item>
        <Form.Item
          value={data.status}
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
          <Button type="primary" onClick={handleUpdate}>
            Submit
          </Button>
        </Form.Item>
      </Form>
    </Card>
  );
};

export default EditTraining;
