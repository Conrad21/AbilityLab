import {
    Modal, Button, Card,  Cascader, Menu, Dropdown   
  } from "antd";
import React from "react";
import Checker from './Board/checkerboard'


export default class MatrixModal extends React.Component {
  state = {
    loading: false,
    visible: false,
  };
 
  showModal = () => {
    this.setState({
      visible: true,
    });
  };
 
  handleOk = () => {
    this.setState({ loading: true });
    setTimeout(() => {
      this.setState({ loading: false, visible: false });
    }, 3000);
  };

  handleCancel = () => {
    this.setState({ visible: false });
  };

  onChange = () => {
    console.log();
  }; 


//-----------  
  render() {
    const { visible, loading } = this.state;
    return (
      <>
        <Button type="primary" onClick={this.showModal}>
          Create Custom Layout
        </Button>
        <Modal
          visible={visible}
          title="Custom Table"
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          footer={[
            <Button key="back" onClick={this.handleCancel}>
              Return
            </Button>,
            <Button key="submit" type="primary" loading={loading} onClick={this.handleOk}>
              Confirm
            </Button>
          ]}>
         <Card style={{ width: 460 }}>

           <Card> 
           <div className="container">
          <Checker />
      </div>
           </Card>
            </Card>
        </Modal>
      </>
    );
  }
}
