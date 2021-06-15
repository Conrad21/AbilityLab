import { Modal, Button, Card, Select} from "antd";
import React from "react";

//import Board from "./Board";
import './index.css';
//import ReactDOM from 'react-dom';
import Board from "./Board"; 

function onChange(value) {
  console.log(`selecteddd  ${value}`);
  
}

function onBlur() {
  //console.log('blur');
}

function onFocus() {
 // console.log('focus');
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
       columns: 20,
       loading: false,
       loading: false,
       visible: false,
       openCells: 0, 
       
  };
  }

  

  
 handleChange = (e) => {
  //const{value}= e.taget;
  this.setState({rows: e});
  console.log("the state", this.state.rows);
  console.log(`selected ${e}`);
  console.log("the state after onChange(e)", this.state.rows);
  // var size = {x:this.state.rows, y:this.state.columns};
  // this.setState({board: createboard(size)});
  this.setState({flag: 1});
  console.log("the flag", this.state.flag);
}; 


handleCol = (e) => {
  //const{value}= e.taget;
  this.setState({columns: e});
  console.log("the col state", this.state.columns);
  console.log(`selected ${e}`);
  console.log("the state after onChange(e)", this.state.columns);
}; 


  showModal = () => {
    this.setState({
      visible: true,
    });
  };
 
  handleOk = () => {
    this.setState({ loading: true });
    setTimeout(() => {
      this.setState({ loading: false, visible: true});
    }, 2000);

  };

  handleCancel = () => {
    this.setState({ visible: false });
  };

  handleNew = () => {
    this.setState({ visible: false });
  };

//-----------  
  render() {
    const { visible, loading} = this.state;
    const rowNum = this.state.rows; 
    const colNum = this.state.columns; 


    return (
      <>
        <Button type="primary" onClick={this.showModal}>
          Create Custom Layouts
        </Button>
        <Modal
          width ={875}
          visible={visible}
          title="Custom Table"
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          footer={[
            <Button key="back" onClick={this.handleCancel}>
              Return
            </Button>,
            // <Button key="submit" type="primary" loading={loading} onClick={this.handleOk}>
            //   Confirm
            // </Button>,
          ]}>

         <Card  > 
           <div className="matrixmodal">
             <div className="board"> 
               {/* <Card style={{ width: 600, height:200, float: "right",}}> */}
               <Board rows={rowNum} columns={colNum}/>          
                {/* </Card>     */}
          </div>

           {/* <Card style={{ width: 190, height:200,}}>
            <Select
                    showSearch
                    style={{ width: 100, height: 150 }}
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
            </Card> */}
             {/* <Card style={{ width: 750, height:90, float: "center", }}> */}
            {/* <Select
                    showSearch  style={{ width: 250, float: "middle",  }}
                    placeholder="Select a X"
                    optionFilterProp="children"
                    onChange={this.handleCol}
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
            </Select> */}
            {/* <Button style={{ width: 200, height:30, float: "right",}} onClick={this.handleNew}  type="primary"> Update Button 2</Button> */}
            {/* </Card> */}
           </div>

           </Card>
        </Modal>
      </>
    );
  }
}
