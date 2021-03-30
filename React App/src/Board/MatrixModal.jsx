import {
    Modal, Button, Card,  Cascader, Menu, Dropdown,Select   
  } from "antd";
import React from "react";
import Board from "./Board";
import './index.css';



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
  constructor(props){
    super(props); 

     this.state = {
       rows: 3,
       columns: 20 ,
       flags: 5,
       loading: false,
       visible: false
  };
  this.handleChange = this.handleChange.bind(this);  
  }

 handleChange(e) {
  this.setState({rows: e});
  console.log("the state", this.state.rows);
  onChange(e); 
  console.log(`selected ${e}`);
  console.log("the state after onChange(e)", this.state.rows);
}

  showModal = () => {
    this.setState({
      visible: true,
    });
  };
 
  handleOk = () => {
    this.setState({ loading: true });
    setTimeout(() => {
      this.setState({ loading: false, visible: false });
    }, 10000);
  };

  handleCancel = () => {
    this.setState({ visible: false });
  };




//-----------  
  render() {
    const { visible, loading, row} = this.state;
    const rows = this.state.row;
    const result = rows; 
    return (
      <>
        <Button type="primary" onClick={this.showModal}>
          Create Custom Layouts
        </Button>
        <Modal
          width ={850}
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
         <Card style={{ width: 800, }}>    
           <div className="matrixmodal">
           <Card style={{ width: 200, height:90, float: "center", }}>
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
            </Card>
     
         
             <div className="board"> 
           <Card style={{ width: 600, height:200, float: "right",}}>
           <Board  
               rows={this.state.rows}
               columns={this.state.columns}
               /> 
           </Card>
           </div>
           <Card style={{ width: 150, height:200, float: "left",}}>
           <Select
                    showSearch
                    style={{ width: 90, height: 150 }}
                    placeholder="Select a Y"
                    optionFilterProp="children"
                    onChange={this.handleChange}
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
             </Card>
           </div>
   

       
           </Card>

        </Modal>
      </>
    );
  }
}
