import React from "react";
import { Table as AntdTable, Tag, Space } from "antd";

interface Props {}

const Table = (props: Props) => {
  return <AntdTable dataSource={makeDataSource()} columns={makeColumns()} />;
};

export default Table;

function makeDataSource() {
  return [
    {
      key: "1",
      name: "Mike",
      age: 32,
      address: "10 Downing Street",
    },
    {
      key: "2",
      name: "John",
      age: 42,
      address: "10 Downing Street",
    },
  ];
}

function makeColumns() {
  return [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Age",
      dataIndex: "age",
      key: "age",
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "address",
    },
  ];
}
