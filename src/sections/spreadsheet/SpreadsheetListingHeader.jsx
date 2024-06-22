import React, { useState } from "react";
import { Button, Flex } from "antd";

import Modal from "../../components/Modal";

import { InboxOutlined, PlusOutlined } from "../../assets/icons";
import AddSpreadSheetForm from "../../sections/AddSpreadSheetForm";

function SpreadSheetListingHeader() {
  const [open, setOpen] = useState(false);

  const showModal = () => {
    setOpen(true);
  };

  const handleCancel = () => {
    setOpen(false);
  };

  return (
    <Flex justify="space-between">
      <Button type="default" icon={<InboxOutlined />}>
        Import CSV
      </Button>
      <Button type="primary" icon={<PlusOutlined />} onClick={showModal}>
        Create CSV
      </Button>
      <Modal open={open} handleCancel={handleCancel} title="Add Spredsheet">
        <AddSpreadSheetForm setOpen={setOpen} />
      </Modal>
    </Flex>
  );
}

export default SpreadSheetListingHeader;
