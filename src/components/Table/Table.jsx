import React from "react";
import { Table as AntTable } from "antd";

function Table({ columns = [], data = [] }) {
  return (
    <AntTable
      columns={columns}
      dataSource={data.map((item) => ({
        ...item,
        link: item.link ? item.link : "",
      }))}
      rowSelection={{
        type: "checkbox",
      }}
    />
  );
}

export default Table;
