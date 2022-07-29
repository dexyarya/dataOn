import React, { useContext } from "react";
import { Button, Modal } from "antd";
import { AppContext } from "../Context/context";

function ModalView() {
  const { modalViews, handleOk } = useContext(AppContext);
  return (
    <Modal
      style={{ textAlign: "center" }}
      visible={modalViews}
      title="Succes"
      footer={[
        <Button key="submit" type="primary" onClick={handleOk}>
          OK
        </Button>,
      ]}
    >
      <h2 style={{ color: "green" }}>Data Berhasil di Buat</h2>
    </Modal>
  );
}

export default ModalView;
