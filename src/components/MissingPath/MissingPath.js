import React from "react";
import { Button, Result } from "antd";
import { useNavigate } from "react-router-dom";

const MissingPath = () => {
  const Navigate = useNavigate();
  const onClick = () => {
    Navigate("/");
  };
  return (
    <Result
      style={{ backgroundColor: "#fff", marginTop: "100px" }}
      status="404"
      title="404"
      subTitle="Sorry, the content you visited does not exist."
      extra={
        <Button type="primary" onClick={onClick}>
          Back Home
        </Button>
      }
    />
  );
};

export default MissingPath;
