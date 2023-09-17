import { useState } from "react";
import Button from "./Button";
import Dice from "./Dice";

function Board({name, color}){

    return(
        <div>
            <div>
                <Button onClick={handleRollClick}>던지기</Button>
                <Button onClick={handleClearClick}>처음부터</Button>
            </div>
            <div>
                <h2>{name}</h2>
                <Dice color={color} num = {num}/>
                <h2>총점</h2>
                <p>{sum}</p>
                <h2>기록</h2>
                <p>{gameHistory.join(', ')}</p>
            </div>
        </div>
    )
}
export default Board;