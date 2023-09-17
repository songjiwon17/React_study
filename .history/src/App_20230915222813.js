import { useState } from "react";
import Board from "./Board";

function App(){
    const [num, setNum] = useState(1);
    const [sum, setSum] = useState(0);
    const [gameHistory, setGameHistory] = useState([]);
    const [otherNum, setOtherNum] = useState(1);
    const [otherSum, setOtherSum] = useState(0);
    const [otherGameHistory, setOtherGameHistory] = useState([]);

    const handleRollClick = ()=>{
        const nextNum = random(6);
        setNum(nextNum);
        setSum(sum + nextNum);
        setGameHistory([...gameHistory, nextNum]);
    }
    const handleClearClick = () =>{
        setNum(1);
        setSum(0);
        setGameHistory([]);
    }

    return(
        <div>
            <Board name="나" color="blue"/>
            <Board name="상대" color="red"/>
        </div>
    )
}
export default App;