import React from "react";
//let root = document.documentElement;

// handleClick = () => {
//   console.log("clickedOn")
 
//  };


  

class Cell extends React.Component {
  constructor(props) {
    super(props);
    this.state = {props};

    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    console.log("itworked"); 
    console.log(this.state.props.data);      
    this.setState({isGreen: true});
    console.log(this.state);
  }

  render() {
    const cell = () => {
      if ((this.state.props.data.isOpen)) {
        if((this.state.props.data.colSize) < 19){
          return (
           <div 
             className="cell open1" 
             onClick={this.handleClick} > 
            </div> 
        )
          }
  
           if((this.state.props.data.colSize) < 16){
            return (
             <div 
               className="cell open2" 
               onClick={console.log("hi")} > 
              </div> 
          )
            }
  
          else{
            return (
             <div 
               className="cell open3" 
               onClick={console.log(this.state.props.data)} > 
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
  }
}
export default Cell;