import { Button, Card,  Select} from 'antd';
import React, {Component} from 'react'; 
import Row from "./Row"; 
;
function onBlur() {
    //console.log('blur');
  }
  
  function onFocus() {
   // console.log('focus');
  }
  
  function onSearch(val) {
    console.log('search:', val);
  }

const helper = {rows: 5, columns: 20}; 

const { Option } = Select;
export default class Board extends React.Component{
    constructor(props){
        super(props);
        console.log ("heres the props for board.jsx"); 
        console.log (props); 
        this.state = {
          row: props.rows,
          columns: props.columns} 
          console.log (this.state); 


   // this.state={board: this.createboard(props)}
     const boards = this.createboard(props);
    var maprow = boards.map((row, index) => {
        return (<Row
        cells= {row}
        key={index} />)  }); 
    console.table(boards); 
    this.state = {maprow}; 
    this.state = {props}; 
    console.log("this.state.props:   ");
    console.table( this.state.props); 
    this.handleRow  = this.handleRow.bind(this); 
    this.handleCol  = this.handleCol.bind(this); 
 }; 
  


  
 handleC = (e) => {
    this.setState({props: e}); 
  }; 

 handleRow = (e) => {
  console.log(`poop ${e}`);
  const col = this.state; 
  console.log(col);
  console.log(col.props.columns);
    //const{value}= e.taget;
    var row = e; 
    const helper = {rows: row, columns: col.props.columns};
    this.setState({props: helper});
    console.log(`selected ${e}`);
    console.log("the col state after onChange(ssssse1)", this.state.props);
    let boards = this.createboard(helper); 
    console.table( this.state.props); 
    const maprow = boards.map((row, index) => {
        return (<Row
        cells= {row}
        key={index} />)
    });   
    this.setState({rows: maprow});
  }; 
  
  
  handleCol = (e) => {  console.log(e);
    //this.setState({row: (e)});
    console.log(`poop ${e}`);
    console.log(this.props);
    const row = this.state; 
    console.log(row);
    console.log(row.props.rows);
    var columnss = e; 
    const helper = {rows: row.props.rows, columns: columnss};
    this.setState({props: helper});
    console.log("the col state", this.state.row);
    console.log(`selected ${e}`);
    console.log("the col state after onChange(ssssse2)", this.state.props);
    let boards = this.createboard(helper); 
    console.table( this.state.props); 
    const maprow = boards.map((row, index) => {
        return (<Row
        cells= {row}
        key={index} />)
    });   
    this.setState({rows: maprow});
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
  

    createboard = (props) => {

        const board = []; 
     //   console.log("board created!", props);
        for(let i = 0; i < props.rows; i++){        //   X
            board.push([]); 
            for(let j = 0; j <  props.columns; j++){   //   Y 
                board[i].push({
                x: j,                    //   X Value
                y: i,                    //   Y Value
                count: 0,  
                isOpen: true, 
                isRed: false, 
                isGreen: false, 
                colSize: props.rows
                });
            }
        }
        console.table(board); 
        console.log("hello there your board is ready");
        return board; 
    };

    update(text) {
        this.setState({text})
    }; 

    handleCancel = () => {
       console.log("vgggggggggggggggg")
        
        let boards = this.createboard(this.state.props); 
        console.table( this.state.props); 
        var maprow = boards.map((row, index) => {
            return (<Row
            cells= {row}
            key={index} />)
        });   
        this.setState({rows: maprow});
      };


    open = cell => {
        let rows = this.state.rows; 
        let current = rows[cell.y][cell.x];
        console.log("cellllllllllllllll");
        let newRows = this.createboard(this.props); 

     }; 
    
    
    render(){
        const rows = this.state.rows; 
        return <div className= "board">
           <Card>
           <Select
                    showSearch
                    style={{ width: 100, margin: 10 }}
                    placeholder="Select Y"
                    optionFilterProp="children"
                    onChange={this.handleRow}
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
                    <Option value="7">7</Option>
                    <Option value="8">8</Option>
                    <Option value="9">9</Option>
                    <Option value="10">10</Option>
                    <Option value="11">11</Option>
                    <Option value="12">12</Option>
                    <Option value="13">13</Option>
                    <Option value="14">14</Option>
                    <Option value="15">15</Option>
                    <Option value="16">16</Option>
                    <Option value="17">17</Option>
                    <Option value="18">18</Option>
                    <Option value="19">19</Option>
                    <Option value="20">20</Option>
               </Select>
                 {rows}
            </Card>
           
            <Card style={{ width: 760, height:90, float: "center", margin: 40 }}>
            <Select
               
                    style={{ width: 250,  }}
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
                    <Option value="7">7</Option>
                    <Option value="8">8</Option>
                    <Option value="9">9</Option>
                    <Option value="10">10</Option>
                    <Option value="11">11</Option>
                    <Option value="12">12</Option>
                    <Option value="13">13</Option>
                    <Option value="14">14</Option>
                    <Option value="15">15</Option>
                    <Option value="16">16</Option>
                    <Option value="17">17</Option>
                    <Option value="18">18</Option>
                    <Option value="19">19</Option>
                    <Option value="20">20</Option>
            </Select>
            {/* <Button style={{ width: 200, height:30, float: "right",}} onClick={this.handleNew}  type="primary"> Update Button 2</Button> */}

            <Button style={{ width: 200, height:30, float: "right", margin: 15, background: 'orange', color: "black" }} onClick={this.handleCancel} type="primary">Create Board</Button>

            </Card>
        {/* <Button style={{ width: 200, height:30, float: "left",}}  onClick={this.handleCancels} type="primary"> Default Button</Button> */}
        </div>
    };

};
