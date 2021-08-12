import React, { useState, useEffect } from 'react';
import { Table, Space, Modal, Button } from 'antd';
import './App.css';
import axios from 'axios';
import Chart from './Chart';


function App() {
  const [data, setData] = useState();
  useEffect(() => {
    async function fetchData(){
      const result = await axios(
        'dataQualityDummy.json',
        );
        
        setData(result.data);
      }
      fetchData();
    });
    
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
        title: 'dependents',
        dataIndex: 'dependents',
        key: 'dependents',
      },
      {
        title: 'KPI',
        dataIndex: 'kpi',
        key: 'kpi',
      },
      {
        title: 'Current val',
        dataIndex: 'current_value',
        key: 'cur',
      },
      {
        title: 'Threshold',
        dataIndex: 'threshold',
        key: 'threshold',
      },
      {
        title: 'Status',
        dataIndex: 'status',
        key: 'status',
      },
      {
        title: 'Aging',
        dataIndex: 'aging',
        key: 'aging',
      },
      {
        title: 'Remark',
        dataIndex: 'remark',
        key: 'action',
      },
      {
        title: 'Actions',
        dataIndex: '_id',
        key: '_id',
        render: (text, record) => (
          <Space size="middle">
          <Button type="link" onClick={() => showModal(record._id)}>Last 30 Days</Button>
          </Space>
          ),
        },
      ]
      
      const [isModalVisible, setIsModalVisible] = useState(false);
      const [modalKey, setModalKey] = useState("1");
      
      function showModal(id){
        setModalKey(id);
        setIsModalVisible(true);
      };
      
      const handleOk = () => {
        setIsModalVisible(false);
      };
      
      const handleCancel = () => {
        setIsModalVisible(false);
      };
      return (
        <>
        <div className="App">
        <div className="container">
        <Table columns={columns} dataSource={data} rowKey="_id"/>
        </div>
        </div>
        <Modal 
        title="Basic Modal" 
        visible={isModalVisible} 
        onOk={handleOk} 
        onCancel={handleCancel} 
        width={1200}>
        <div>
          id : {modalKey}
        </div>
        <Chart />
        </Modal>
        </>
        );
      }
      
      export default App;