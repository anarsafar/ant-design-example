import { useEffect, useState } from "react";
import { Table } from "antd";
import "antd/dist/antd.css";

function SupplierTable() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  const columns = [
    {
      title: "name",
      dataIndex: "name",
      key: "name",  
      sorter: (a, b) => a.name.length - b.name.length,
      sortDirections: ['descend'],
    },
    {
      title: "email",
      dataIndex: "email",
      key: "email",
      key: "name",  
      sorter: (a, b) => a.email.length - b.email.length,
      sortDirections: ['descend'],
    },
    {
      title: "username",
      dataIndex: "username",
      key: "username",
    },
    {
      title: "address",
      dataIndex: ["address","street"],
      key: "street",
    },
  ];

  return (
    <div>
      <Table dataSource={users} columns={columns} />;
    </div>
  );
}

export default SupplierTable;
