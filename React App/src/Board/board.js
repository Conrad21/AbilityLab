import React, {Component} from 'react'; 
import Row from "./Row"; 



class Board extends Component{
 constructor(props){
     super(props); 
     this.state= {
         rows: this.createboard(props) 
     }
 }

    createboard = props => {
        let board = []; 
        for(let i = 0; i < 9; i++){        //   X
            board.push([]); 
            for(let j = 0; j < 10; j++){   //   Y 
                board[i].push({
                x: j,
                y: i , 
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
        return (
            <div>           

            </div>
        );
    }
}

export default Board; 