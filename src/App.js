import React from 'react';
import { Link } from 'react-router-dom';
import { Table, Space, Button } from 'antd';
import './App.css';

function App() {
  let dataDummy;
  const columns = [
    {
      title: 'date',
      dataIndex: 'date',
      key: 'date',
    },
    {
      title: 'group',
      dataIndex: 'group',
      key: 'group',
    },
    {
      title: 'source',
      dataIndex: 'source',
      key: 'source',
    },
    {
      title: 'PIC',
      dataIndex: 'pic',
      key: 'pic',
    },
    {
      title: 'PIC',
      dataIndex: 'pic',
      key: 'pic',
    },
    {
      title: 'PIC',
      dataIndex: 'pic',
      key: 'pic',
    },
    {
      title: 'PIC',
      dataIndex: 'pic',
      key: 'pic',
    },
    {
      title: 'PIC',
      dataIndex: 'pic',
      key: 'pic',
    },
    {
      title: 'PIC',
      dataIndex: 'pic',
      key: 'pic',
    },
    {
      title: 'PIC',
      dataIndex: 'pic',
      key: 'pic',
    },
    {
      title: 'PIC',
      dataIndex: 'pic',
      key: 'pic',
    },
    {
      title: 'Actions',
      dataIndex: 'id',
      key: 'id',
      // render: (text, record) => (
      //   <Space size="middle">
      //   <Link to={"/customer/" + record.id}>
      //   <Button type="primary">Edit</Button>
      //   </Link>
      //   <Button danger onClick={() => this.remove(record.id)}>Delete</Button>
      //   </Space>
      //   ),
    },
  ]
    return (
      <>
      <div className="App">
        <Table columns={columns} dataSource={dataDummy} rowKey="id"/>
      </div>
      </>
      );
    }
    
    export default App;