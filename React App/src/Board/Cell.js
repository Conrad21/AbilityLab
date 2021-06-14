import React from "react";
//let root = document.documentElement;

// handleClick = () => {
//   console.log("clickedOn")
 
//  };
 



const Cell = props => {
  const cell = () => {
    if ((props.data.isOpen)) {
      if((props.data.colSize) < 11){
        return (
         <div 
           className="cell open1" 
           onClick={console.log("hi")} > 
          </div> 
      )
        }

        if((props.data.colSize) < 16){
          return (
           <div 
             className="cell open1" 
             onClick={console.log("hi")} > 
            </div> 
        )
          }

        else{
          return (
           <div 
             className="cell open3" 
             onClick={console.log(props.data)} > 
            </div> 
        )
          }
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