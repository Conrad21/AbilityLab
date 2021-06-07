import React from "react";
//let root = document.documentElement;

// handleClick = () => {
//   console.log("clickedOn")
 
//  };
 



const Cell = props => {
  const cell = () => {
    if ((props.data.isOpen) ) {
      return (
        <div 
        className="cell open" 
        onClick={console.log("OOOEEEEEEEEEEEEEE")} > 
        </div> 
      )
    }
      else{ 
      return( <div 
        className = "cell" 
        onClick={console.log("HEEEEEEEEEEEEEEE")}> </div>)
      } 
    }

  return cell();

};

export default Cell;