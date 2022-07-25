import { Button, Result } from "antd";
import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => (
  <Result
    status="404"
    title="404"
    subTitle="Maaf, Alamat Tidak di Temukan."
    extra={
      <Link to="/">
        <Button type="primary">Back Home</Button>
      </Link>
    }
  />
);

export default NotFound;
