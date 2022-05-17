import React, { useEffect,useState } from 'react';
import './App.css';
import Squares from './Squares';
const clearState = ["", "", "", "", "", "", "", "", "", ""];

function App() {

  const [Game,updateGame]=useState(clearState);
  const [isXChance, updateIsXChance] = useState(false)
  const onUserClicked = (index) => {
    let strings = Array.from(Game);
    if (strings[index])
        return;
    strings[index] = isXChance ? "X" : "0";
    updateIsXChance(!isXChance)
    updateGame(strings)
}

const clearGame = () => {
    updateGame(clearState)
}
useEffect(() => {
    let winner = checkWinner();
    if (winner) {
        clearGame();
        alert(`Hurray ! ${winner} won the Game !`)
    }
}, [Game])

const checkWinner = () => {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];
    console.log('Class: App, Function: checkWinner ==', Game[0], Game[1], Game[2]);
    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (Game[a] && Game[a] === Game[b] && Game[a] === Game[c]) {
            return Game[a];
        }
      }
       return null;
    }

  return (
    <div className="App">
      <header className="App-header">
      <p>GAME</p>
      <h1>
    <span>T</span>
    <span>I</span>
    <span>C</span>
    <span>-</span>
    <span>T</span>
    <span>A</span>
    <span>C</span>
    <span>-</span>
    <span>T</span>
    <span>O</span>
    <span>E</span> 
      </h1><br/>
      </header>

      <div className='row jc-center' >
        <Squares  className='b-bottom-right' onClick={() => onUserClicked(0)} state={Game[0]}/>
        <Squares  className='b-bottom-right' onClick={() => onUserClicked(1)} state={Game[1]}/>
        <Squares  className='b-bottom'onClick={() => onUserClicked(2)} state={Game[2]}/>
      </div>

      <div className='row jc-center'>
      <Squares  className='b-bottom-right'onClick={() => onUserClicked(3)} state={Game[3]}/>
      <Squares  className='b-bottom-right'onClick={() => onUserClicked(4)} state={Game[4]}/>
      <Squares  className='b-bottom'onClick={() => onUserClicked(5)} state={Game[5]}/>
      </div>

      <div className='row jc-center'onClick={() => onUserClicked(6)} state={Game[6]}>
      <Squares  className='b-right'onClick={() => onUserClicked(7)} state={Game[7]}/> 
      <Squares  className='b-right'onClick={() => onUserClicked(8)} state={Game[8]}/>
      <Squares  />
      </div>
    

 <button className='btn'onClick={clearGame}>Clear Game</button>

 
    
    </div>
  );
}

export default App;
