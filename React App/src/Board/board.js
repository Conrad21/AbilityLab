import React, { Component } from 'react';
import {
    Modal, Button, Card,  Cascader, Menu, Dropdown   
  } from "antd";


class Board extends Component {
    board = [];
    render() {
        const num = parseInt(this.props.columns, 10)
       
    return (
        <div id="parent">
            <div>{this.board}</div>
        </div>
    );
  }
}

export default Board;
