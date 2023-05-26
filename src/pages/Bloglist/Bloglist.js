import React,{ useEffect } from 'react';
import { Table } from "antd";
const columns = [
    {
      title: "SNo",
      dataIndex: "key",
    },
    {
      title: "Name",
      dataIndex: "name",
      sorter: (a, b) => a.name.length - b.name.length,
    },
    {
      title: "Email",
      dataIndex: "email",
    },
    {
      title: "Mobile",
      dataIndex: "mobile",
    },
  ];
  const data1 = [];
  for (let i = 0; i < 46; i++){
    data1.push({
           key: i ,
           name:`Md BAbul ${i}`,
          
          })
  }

const Bloglist = () => {
    return (
        <div>
        <h3 className="mb-4 title">Customers</h3>
        <div>
          <Table columns={columns} dataSource={data1} />
        </div> 
      </div>
    );
};

export default Bloglist;