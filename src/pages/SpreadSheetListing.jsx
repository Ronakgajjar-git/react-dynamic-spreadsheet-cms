import React from "react";
import { Space } from "antd";
import { Link } from "react-router-dom";

import SpreadSheetListingHeader from "../sections/spreadsheet/SpreadsheetListingHeader";
import Table from "../components/Table";
import useGetMappingListing from "../hooks/useGetMappingListing";
import { MappingContext } from "../context";
import useMappingOperations from "../hooks/useMappingOperations";
import { DeleteOutlined } from "../assets/icons";

const columns = [
  {
    title: "Name",
    dataIndex: "name",
    width: 200,
    render: (_, record) => <Link to={record.link}>{record.name}</Link>,
  },
  {
    title: "Description",
    dataIndex: "description",
    width: 400,
  },
  {
    title: "Created At",
    dataIndex: "createdAt",
    width: 200,
  },
  {
    title: "Action",
    key: "action",
    width: 150,
    render: (_, record) => (
      <Space size="middle">
        <DeleteOutlined style={{ color: "red", cursor: "pointer" }} />
      </Space>
    ),
  },
];

function SpreadSheetListing() {
  const { mappings } = useGetMappingListing();
  const { createMapping } = useMappingOperations();

  const contextValue = {
    createMapping,
  };

  return (
    <MappingContext.Provider value={contextValue}>
      <SpreadSheetListingHeader />
      <Space
        direction="vertical"
        size="large"
        style={{ width: "100%", marginTop: "40px" }}
      >
        <Table columns={columns} data={mappings} />
      </Space>
    </MappingContext.Provider>
  );
}

export default SpreadSheetListing;
