import React from 'react';
import './index.css';
import { Select } from 'antd';

const { Option } = Select;

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



export default class DropdownC extends React.Component {
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
  
    onChange = () => {
      console.log();
    }; 
  
  
  
  
  
  
  
  //-----------  
    render() {
      const { visible, loading } = this.state;
      return (
        <>
     <Select
    showSearch
    style={{ width: 200 }}
    placeholder="Select a person"
    optionFilterProp="children"
    onChange={onChange}
    onFocus={onFocus}
    onBlur={onBlur}
    onSearch={onSearch}
    filterOption={(input, option) =>
      option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
    }
  >
    <Option value="jack">Jack</Option>
    <Option value="lucy">Lucy</Option>
    <Option value="tom">Tom</Option>
  </Select>,
        </>
      );
    }
  }

  export default DropdownC; 
  