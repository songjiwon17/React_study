import { useState } from "react";
import Board from "./Board";
import Button from "./Button";

function random(n){
    return Math.ceil(Math.random() * n);
}

function App(){
    const [myHistory, setMyHistory] = useState([]);
    const [otherHistory, setOtherHistory] = useState([]);

    const handleRollClick = ()=>{
        const nextMyNum = random(6);
        const nextOtherNum = random(6);
        setMyHistory([...myHistory, nextMyNum]);
        
    }
    const handleClearClick = () =>{
        setNum(1);
        setSum(0);
        setGameHistory([]);
        setOtherNum(1);
        setOtherSum(0);
        setOtherGameHistory([]);
    }

    return(
        <div>
            <div>
                <Button onClick={handleRollClick}>던지기</Button>
                <Button onClick={handleClearClick}>처음부터</Button>
            </div>
            <div>
                <Board name="나" color="blue" num={num} sum={sum} gameHistory={gameHistory}/>
                <Board name="상대" color="red" num={otherNum} sum={otherSum} gameHistory={otherGameHistory} />
            </div>
        </div>
    )
}
export default App;