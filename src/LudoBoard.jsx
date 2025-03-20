import { useState } from "react"

export default function LudoBoard() {

    let [moves, setMoves] = useState({ blue: 0, yellow: 0, green: 0, red: 0 });

    let updateBlue = () => {
        setMoves(
            (preMoves) => {
                return { ...preMoves, blue: preMoves.blue + 1 }
            }
            /*If array then it should also be spreaded like [...preMoves,new thing that I want to add
            ] */
        );
        console.log(moves.blue);
    }
    let updateYellow = () => {
        setMoves(
            (preMoves) => {
                return { ...preMoves, yellow: preMoves.yellow + 1 }
            }
        );
        console.log(moves.yellow);
    }
    let updateGreen = () => {
        setMoves(
            (preMoves) => {
                return { ...preMoves, green: preMoves.green + 1 }
            }
        );
        console.log(moves.green);
    }
    let updateRed = () => {
        setMoves(
            (preMoves) => {
                return { ...preMoves, red: preMoves.red + 1 }
            }
        );
        console.log(moves.red);
    }

    return (
        <div>
            <p>
                Game Begins!
            </p>
            <div className="Board">
                <p>Blue Moves ={moves.blue}</p>
                <button style={{ backgroundColor: "blue" }} onClick={updateBlue}>+1</button>
                <p>Yellow Moves ={moves.yellow}</p>
                <button style={{ backgroundColor: "yellow", color: "black" }} onClick={updateYellow}>+1</button>
                <p>Green Moves ={moves.green}</p>
                <button style={{ backgroundColor: "green" }} onClick={updateGreen}>+1</button>
                <p>Red Moves ={moves.red}</p>
                <button style={{ backgroundColor: "red" }} onClick={updateRed}>+1</button>
            </div>
        </div>
    )
}