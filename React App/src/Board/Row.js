import React from 'react'; 
import Cell from "./Cell"; 
import './index.css';

const Row = props => {
    //console.log("Row.js");
    const cells = props.cells.map((data,index) => {
        return (<Cell key={index} data={data}/> 
            )
    });
    return (
        <div className="row">
            {cells}
        </div>
    );
}; 

export default Row;