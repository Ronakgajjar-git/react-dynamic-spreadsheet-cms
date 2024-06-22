import React, { useState } from "react";
import { Button, Flex } from "antd";

import Modal from "../../components/Modal";

import { DownloadOutlined, PlusOutlined } from "../../assets/icons";
import AddSpreadSheetForm from "../../sections/AddSpreadSheetForm";

function SpreadsheetDetailsHeader() {
  const [open, setOpen] = useState(false);

  const showModal = () => {
    setOpen(true);
  };

  const handleCancel = () => {
    setOpen(false);
  };

  return (
    <Flex justify="space-between">
      <Button type="default" icon={<DownloadOutlined />}>
        Download CSV
      </Button>
      <Button type="primary" icon={<PlusOutlined />} onClick={showModal}>
        Create CSV
      </Button>
      <Modal open={open} handleCancel={handleCancel} title="Add Spredsheet">
        <AddSpreadSheetForm />
      </Modal>
    </Flex>
  );
}

export default SpreadsheetDetailsHeader;
