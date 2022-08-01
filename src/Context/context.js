import { createContext, useState, useEffect } from "react";
import instace from "../API";
export const AppContext = createContext();

export const ContextWraper = (props) => {
  const [training, setTrainingData] = useState({
    data: [],
    isLoading: false,
    isError: false,
  });

  const [status, setStatus] = useState("");
  const handleChanges = (v, e) => {
    setStatus(e.value === "isCompleted" ? true : false);
    console.log("ini", status);
  };

  const [trainingType, setTrainingType] = useState("");
  const handleChange = (v, e) => {
    setTrainingType(e.value === "isOnline" ? true : false);
  };
  const [search, setSearch] = useState("");
  const onSearch = (e) => {
    setSearch(e.target.value);
  };

  console.log("test", search);

  useEffect(() => {
    getDataTraining(search, status, trainingType);
  }, [search, status, trainingType]);

  console.log("data inin", training);

  async function getDataTraining(
    search = "",
    status = status,
    trainingType = trainingType
  ) {
    handleSetStateTraining("isLoading", true);
    console.log("search", search);
    console.log("EventType", trainingType);
    console.log("statussssssssssss", status);

    try {
      const response = await instace.get(
        `trainings?eventName=${search}&isOnline=${trainingType}&isCompleted=${status}`
      );
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
      const response = await instace.get(`my-training`);
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
  }, []);

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
        trainingNext,
        tableViews,
        modalViews,
        setModalView,
        handleOk,
        handleClick,
        getDataTraining,
        handleChanges,
        handleChange,
        status,
        onSearch,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};
