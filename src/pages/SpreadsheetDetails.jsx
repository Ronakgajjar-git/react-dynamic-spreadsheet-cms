import React from "react";
import { Space } from "antd";
import Table from "../components/Table";
import { Link } from "react-router-dom";
import SpreadsheetDetailsHeader from "../sections/spreadsheet/SpreadsheetDetailsHeader";

const columns = [
  {
    title: "Name",
    dataIndex: "name",
    width: 150,
    render: (_, record) => <Link to={record.link}>{record.name}</Link>,
  },
  {
    title: "Age",
    dataIndex: "age",
    width: 150,
  },
  {
    title: "Address",
    dataIndex: "address",
  },
  {
    title: "Action",
    key: "action",
    render: (_, record) => (
      <Space size="middle">
        <a>Delete</a>
      </Space>
    ),
  },
];

const data = [];
for (let i = 0; i < 100; i++) {
  data.push({
    key: i,
    name: `Edward King ${i}`,
    age: 32 + i,
    address: `London, Park Lane no. ${i}`,
    link: `/spreadsheet/${i}`,
  });
}

function SpreadsheetDetails() {
  return (
    <>
      <SpreadsheetDetailsHeader />
      <Space
        direction="vertical"
        size="large"
        style={{ width: "100%", marginTop: "40px" }}
      >
        <Table columns={columns} data={data} />
      </Space>
    </>
  );
}

export default SpreadsheetDetails;
