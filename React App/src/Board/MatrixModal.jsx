import {
    Modal, Button, Card,  Cascader, Menu, Dropdown,Select   
  } from "antd";
import React from "react";
import Board from "./Board";


function onChange(value) {
  console.log(`selected ${value}`);
}

function onBlur() {
  console.log('blur');
}

function onFocus() {
  console.log('focus');
}

function onSearch(val) {
  console.log('search:', val);
}


const { Option } = Select;

export default class MatrixModal extends React.Component {
  state = {
    rows:  5,
    colums:  5 ,
    flags: 5
  }; 



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
           <div className="matrixmodal">
             <Board /> 
             <Select
                    showSearch
                    style={{ width: 150 }}
                    placeholder="Select a X"
                    optionFilterProp="children"
                    onChange={onChange}
                    onFocus={onFocus}
                    onBlur={onBlur}
                    onSearch={onSearch}
                    filterOption={(input, option) =>
                      option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                    } >
                    <Option value="1">1</Option>
                    <Option value="2">2</Option>
                    <Option value="3">3</Option>
                    <Option value="4">4</Option>
                    <Option value="5">5</Option>
                    <Option value="6">6</Option>
            </Select>

            <Select
                    showSearch
                    style={{ width: 150 }}
                    placeholder="Select a Y"
                    optionFilterProp="children"
                    onChange={onChange}
                    onFocus={onFocus}
                    onBlur={onBlur}
                    onSearch={onSearch}
                    filterOption={(input, option) =>
                      option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                    } >
                    <Option value="1">1</Option>
                    <Option value="2">2</Option>
                    <Option value="3">3</Option>
                    <Option value="4">4</Option>
                    <Option value="5">5</Option>
                    <Option value="6">6</Option>
            </Select>
           </div>
           </Card>
            </Card>
        </Modal>
      </>
    );
  }
}
