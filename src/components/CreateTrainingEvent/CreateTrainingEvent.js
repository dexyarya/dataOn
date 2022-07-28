import React, { useContext } from "react";
import {
  Card,
  Form,
  Select,
  Input,
  Button,
  DatePicker,
  InputNumber,
} from "antd";
// import instace from "../../API";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../../Context/context";
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
  const navigate = useNavigate();
  const {
    handlesubmit,
    handleChange,
    handleChangeDate,
    handleChanges,
    form,
    // handleUpdate,
  } = useContext(AppContext);
  if (form.isSucces) return navigate("/");
  // if (form.isError) return navigate("/missing");

  return (
    <Card
      style={{
        margin: "10px",
        borderRadius: "10px",
      }}
    >
      <Form {...formItemLayout} onFinish={handlesubmit}>
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
          name="eventName"
          label="Training Name"
          value={form.eventName}
          onChange={handleChange}
          rules={[{ required: true, message: "Please input event name" }]}
        >
          <Input style={{ maxWidth: 500 }} />
        </Form.Item>
        <Form.Item
          value={form.speaker}
          onChange={handleChange}
          label="Author"
          name="speaker"
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
