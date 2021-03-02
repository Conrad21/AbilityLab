import React, { Component } from 'react';
import Board from './board'
import {
    Modal, Button, Card,  Cascader, Menu, Dropdown,  Select     } from "antd";

const { Option } = Select;
  
function handleChange(value) {
    console.log(`selected ${value}`);
  }


class Checker extends Component {
    state = {
        columns: 0,
        rows: 0,
    }
    test = 0;
    handleSubmit = (event) => {
        event.preventDefault();
        this.setState(
            {
              ///  columns: this.test = this.columnInput.value,
            }
        )
    }
    render() {
        return (
            <div className="Checker">
                <form onSubmit={this.handleSubmit}>
               <div>
                X Size:  
                <Select defaultValue="0" style={{ width: 120 }} onChange={handleChange}>
                  <Option value="1">1</Option>
                  <Option value="2">2</Option>
                  <Option value="3">3</Option>
                  <Option value="4">4</Option>
                 </Select>
             </div>
             <div>
                Y Size: 
                <Select defaultValue="0" style={{ width: 120 }} onChange={handleChange}>
                  <Option value="1">1</Option>
                  <Option value="2">2</Option>
                  <Option value="3">3</Option>
                  <Option value="4">4</Option>
                 </Select>
             </div>

                 <div>
                    <button type="submit"> Make New Layout </button> 
                    </div>
                </form>
                <div>
                   {/* <Board columns={this.test}/> */}
                </div>
            </div>
        );
    }
}

export default Checker;
