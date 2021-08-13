import React, { useState } from 'react';
import { Table, Modal, Space, Button } from 'antd';
// import axios from 'axios';
import Chart from './Chart';
import dataQualityDummy from '../data/dataQualityDummy.json';


function TableC() {
  const [data] = useState(dataQualityDummy);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [modalKey, setModalKey] = useState("1");

  // useEffect(() => {
    // async function fetchData(){
    //   const result = await axios(
    //     'dataQualityDummy.json',
    //     );
        
    //     setData(result.data);
    //   }
    // fetchData();
  // });
    
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

  const getFullDate = (date) => {
    const dateAndTime = date.split('T');

    return dateAndTime[0].split('-').reverse().join('-');
};

const columns = [
    {
      title: 'date',
      dataIndex: 'date',
      key: 'date',
          render: ((date) => getFullDate(date))
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
            <Button id="button" type="link" onClick={() => { showModal(record.id)}}>Last 30 Days</Button>
        </Space>
        ),
      },
    ]
      
  return (
    <>
      <div className="App">
        <div className="container">
        <Table 
          columns={columns} 
          dataSource={data} 
          rowKey="_id" 
          bordered title={() => <h1>Tabel Data Quality</h1>}
        />
        </div>
      </div>
      <Modal 
        title="Chart Quality" 
        visible={isModalVisible} 
        onOk={handleOk} 
        onCancel={handleCancel} 
        width={1200}
      >
        <>
          {modalKey}
        </>
        <Chart />
      </Modal>
    </>
    );
  }
      
  export default TableC;