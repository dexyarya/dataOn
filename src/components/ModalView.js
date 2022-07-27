import React from "react";
import { Button, Modal } from "antd";

function ModalView({ modalViews, handleOk }) {
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
