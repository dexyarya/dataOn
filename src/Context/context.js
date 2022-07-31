import { createContext, useState, useEffect } from "react";
import instace from "../API";
import dayjs from "dayjs";
import moment from "moment";
import { Form, message } from "antd";

export const AppContext = createContext();

export const ContextWraper = (props) => {
  const [training, setTrainingData] = useState({
    data: [],
    isLoading: false,
    isError: false,
  });

  const [search, setSerch] = useState("");
  const Search = search;

  const onSearch = (value) => {
    setSerch(value);
  };

  async function getDataTraining() {
    handleSetStateTraining("isLoading", true);
    try {
      const response = await instace.get(`trainings?search=${Search}`);
      handleSetStateTraining("data", response.data);
    } catch (err) {
      handleSetStateTraining("isError", true);
    }
    handleSetStateTraining("isLoading", false);
  }

  const [myTraining, setMyTrainingData] = useState({
    data: [],
    isLoading: false,
    isError: false,
  });

  async function getDataMyTraining() {
    handleSetStateMyTraining("isLoading", true);
    try {
      const response = await instace.get("my-training");
      handleSetStateMyTraining("data", response.data);
    } catch (err) {
      handleSetStateMyTraining("isError", true);
    }
    handleSetStateMyTraining("isLoading", false);
  }

  const [trainingNext, setTrainingDataNext] = useState({
    data: [],
    isLoading: false,
    isError: false,
  });

  async function getDataTrainingNext() {
    handleSetStateTrainingNext("isLoading", true);
    try {
      const response = await instace.get(`trainings?page=1&limit=10`);
      handleSetStateTrainingNext("data", response.data);
    } catch (err) {
      handleSetStateTrainingNext("isError", true);
    }
    handleSetStateTrainingNext("isLoading", false);
  }

  const [data, setData] = useState({
    eventName: "",
    startDate: "",
    endDate: "",
    image: "",
    speaker: "",
    location: "",
    ratings: "",
    isOnline: "",
    isOffline: "",
    information: "",
    participant: "",
    eventType: "",
    isLoading: false,
    isError: false,
    isSucces: false,
    date: "",
  });

  const handleChanges = (v, e) => {
    setData({
      ...data,
      eventType: e.value,
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

  const handleChange = (e) => {
    const value = e.target.value;
    setData({
      ...data,
      [e.target.id]: value,
    });
  };

  const handleSubmit = async (e) => {
    console.log("ini ngecreate", e);
    {
      e.id ? onEdit(e.id) : onCreate();
    }
  };

  async function getData(params) {
    try {
      const response = await instace.get(`trainings/${params}`);
      console.log(response);
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
        message.error("This is an error messagee");
      }
    }
  }

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

  const onEdit = async (id) => {
    alert("ini edit", id);
    const updateData = {
      eventName: data.eventName,
      location: data.location,
      information: data.information,
      participant: data.participant,
      ratings: data.ratings,
      isOnline: data.eventType === "isOnline" ? true : false,
      isOffline: data.eventType === "isOffline" ? true : false,
      speaker: data.speaker,
      starDate: data.startDate,
      endDate: data.endDate,
    };
    try {
      const response = await instace.put(`trainings/${id}`, updateData);
      if (response.status === 200) {
        message.success("Training Updated Successfully");
      }
    } catch (err) {
      message.error("This is an error messageeee");
    }
  };

  const onCreate = async () => {
    alert("ini create");
    const post = {
      image:
        "https://s3-ap-southeast-1.amazonaws.com/dressup/test/upload-images/image-1649837020.jpeg",
      endDate: data.endDate,
      ratings: data.ratings,
      speaker: data.speaker,
      location: data.location,
      eventName: data.eventName,
      startDate: data.startDate,
      information: data.information,
      participant: data.participant,
      isOnline: data.eventType === "isOnline" ? true : false,
      isOffline: data.eventType === "isOffline" ? true : false,
    };
    try {
      await instace.post("trainings", post);
    } catch {
      message.error("This is an error messageeee");
    }
  };
  const [tableViews, setTableView] = useState(false);
  const [modalViews, setModalView] = useState(false);

  const handleOk = () => {
    setModalView(false);
  };

  const handleClick = () => {
    setTableView(!tableViews);
  };

  useEffect(() => {
    getDataMyTraining();
    getDataTrainingNext();
    onSearch();
  }, []);

  useEffect(() => {
    getDataTraining();
  }, [Search]);

  const handleSetStateMyTraining = (field, value) => {
    setMyTrainingData((prevState) => ({
      ...prevState,
      [field]: value,
    }));
  };

  const handleSetStateTraining = (field, value) => {
    setTrainingData((prevState) => ({
      ...prevState,
      [field]: value,
    }));
  };

  const handleSetStateTrainingNext = (field, value) => {
    setTrainingDataNext((prevState) => ({
      ...prevState,
      [field]: value,
    }));
  };

  return (
    <AppContext.Provider
      value={{
        training,
        myTraining,
        handleSubmit,
        handleChange,
        handleChangeDate,
        handleChanges,
        form,
        data,
        getData,
        trainingNext,
        onSearch,
        search,
        tableViews,
        modalViews,
        setModalView,
        handleOk,
        handleClick,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};
