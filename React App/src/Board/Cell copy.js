import React from "react";
//let root = document.documentElement;

const Cell = props => {
  const cell = () => {
    if (props.data.isOpen) {
      if (props.data.isRed) {
       // console.log("conradsssssssssssss")
        return (
          <div
            className="cell open"
            onContextMenu={e => {
              // don't load that nasty context menu, flag it up instead :^)
              e.preventDefault();
            }}
            // onClick={() => props.open(props.data)}
          >
         
          </div>
        );
      } else if (props.data.count === 0) {
       // console.log("conradsssssssssssss")
        return (
          <div
            className="cell open"
            onContextMenu={e => {
              e.preventDefault();
              props.flag(props.data);
            }}
          />
        );
      } else {
        return (
          <div
            className="cell open"
            onContextMenu={e => {
              e.preventDefault();
            }}
            // onClick={() => props.open(props.data)}
                   // console.log("conradsssssssssssss")
          >
            {props.data.count}
          </div>
        );
      }
    }  
    else {
      return (
        <div
          className="cell"
          onContextMenu={e => {
            e.preventDefault();
            props.flag(props.data);
          }}
           onClick={() => props.open(props.data)}
        />
      );
    }
  };
 // console.log("conradsssssssssssss")
  return cell();

};

export default Cell;