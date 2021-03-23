import React, {Component} from 'react'; 
import Row from "./Row"; 



class Board extends Component{
 constructor(props){
     super(props); 
     this.state= {
         rows: this.createboard(props), 
   
     }
 }

    createboard = props => {
        let board = []; 
        console.log("hellllllllllllllll", props);
        for(let i = 0; i < props.rows; i++){        //   X
            board.push([]); 
            for(let j = 0; j <  props.columns; j++){   //   Y 
                board[i].push({
                x: j,                    //   X Value
                y: i,                    //   Y Value
                count: 0,  
                iswhite: false, 
                isred: false, 
                isgreen: false 
            });
            }
           

        }
        console.table(board); 
        console.log("hello");
        return board; 
    };

    render(){
        let rows = this.state.rows.map((row, index) => {
            return (<Row
            cells= {row}
            key={index} />)
        } )
        return <div className= "board">{rows}</div>; 
    }
} 

export default Board; 