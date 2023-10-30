import { useState } from "react"
import Item from "./Item"
export default function Grid (props){
    const [diceNumbers, SetDiceNumbers] = useState([])
   
    if(props.gameStatus === 'started') {
     
       SetDiceNumbers(diceRoll()) 
    }

    function diceRoll() {
        const newArr = []
       for (let i = 0; i < 10; i++) {
         
       newArr.push ( Math.floor(Math.random() * 6) + 1 )
       }
       console.log('Dice Rolled')
      return newArr;
    }
   

    console.log(diceNumbers)

    const mapItem = diceNumbers.map((item)=> {
        return (
       <Item num={item} />
        )
      
    })
    return (
           <div>
        
          {props.gameStatus}
          {mapItem}
          <Item/>
           </div>
    )
}