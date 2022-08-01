import React, { useContext, useEffect } from "react";
import {
  Card,
  Form,
  Select,
  Input,
  Button,
  DatePicker,
  InputNumber,
} from "antd";
import { useNavigate, useParams } from "react-router-dom";
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
    handleSubmit,
    handleChange,
    handleChangeDate,
    handleChanges,
    form,
    getData,
    data,
    setModalView,
  } = useContext(AppContext);
  if (data.isModal) return navigate("/"), setModalView(true);
  if (data.isSucces) return navigate("/");
  const params = useParams();

  useEffect(() => {
    if (params.id) {
      getData(params.id);
    }
  }, [params]);

  return (
    <Card
      style={{
        margin: "10px",
        borderRadius: "10px",
      }}
    >
      <Form {...formItemLayout} form={params.id ? form : form.resetFields()}>
        <Form.Item label="Event No">TREV-YYMM-XXXX</Form.Item>
        <Form.Item
          name="eventType"
          label="Event Type"
          rules={[{ required: true, message: "Please select event type" }]}
        >
          <Select
            value={data.eventType}
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
          value={data.eventName}
          onChange={handleChange}
          rules={[{ required: true, message: "Please input event name" }]}
        >
          <Input style={{ maxWidth: 500 }} />
        </Form.Item>
        <Form.Item
          value={data.speaker}
          onChange={handleChange}
          label="Author"
          name="speaker"
          rules={[{ required: true, message: "Please input Autor" }]}
        >
          <Input style={{ maxWidth: 500 }} value="tes" />
        </Form.Item>
        <Form.Item
          value={data.location}
          onChange={handleChange}
          label="Location"
          name="location"
          rules={[{ required: true, message: "Please input Location" }]}
        >
          <Input style={{ maxWidth: 500 }} />
        </Form.Item>
        <Form.Item
          value={data.information}
          onChange={handleChange}
          label="Information"
          name="information"
          rules={[{ required: true, message: "Please input Information" }]}
        >
          <Input style={{ maxWidth: 500 }} />
        </Form.Item>
        <Form.Item
          label="Participant"
          value={data.participant}
          onChange={handleChange}
        >
          <Form.Item name="participant" noStyle>
            <InputNumber min={1} max={100} type="number" />
          </Form.Item>
        </Form.Item>
        <Form.Item label="Rating" onChange={handleChange} value={data.ratings}>
          <Form.Item name="ratings" noStyle>
            <InputNumber min={1} max={100} type="number" />
          </Form.Item>
        </Form.Item>
        <Form.Item
          value={data.date}
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
          <Button
            type={params.id ? "danger" : "primary"}
            htmlType="submit"
            onClick={() => handleSubmit(params)}
          >
            {params.id ? "Update" : "Submit"}
          </Button>
        </Form.Item>
      </Form>
    </Card>
  );
};

export default CreateTrainingEvent;
