import React from "react";
import { Modal } from "antd";

function CustomModal({ children, open, handleCancel, title }) {
  return (
    <Modal title={title} open={open} onCancel={handleCancel} footer={null}>
      {children}
    </Modal>
  );
}

export default CustomModal;
