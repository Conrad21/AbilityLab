import React from "react";
 let root = document.documentElement;

const Cell = props => {
  let cell = () => {
    if (props.data.isOpen) {
      if (props.data.isRed) {
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
          >
            {props.data.count}
          </div>
        );
      }
    }  else {
      return (
        <div
          className="cell"
          onContextMenu={e => {
     
            e.preventDefault();
            props.flag(props.data);
          }}
        //   onClick={() => props.open(props.data)}
        />
      );
    }
  };
  return cell();
};

export default Cell;