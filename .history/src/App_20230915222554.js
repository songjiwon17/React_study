import { useState } from "react";
import Board from "./Board";

function App(){
    const [num, setNum] = useState(1);
    const [sum, setSum] = useState(0);
    const [gameHistory, setGameHistory] = useState([]);

    return(
        <div>
            <Board name="나" color="blue"/>
            <Board name="상대" color="red"/>
        </div>
    )
}
export default App;