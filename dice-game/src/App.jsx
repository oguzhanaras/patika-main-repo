import React, { useState, useEffect } from 'react';
import './App.css';

function Player({ playerName, diceSrc }) {
  return (
    <div>
      <h2>{playerName}</h2>
      <img src={diceSrc} alt="dice" />
    </div>
  );
}

const diceList = [
  '/images/dice1.png',
  '/images/dice2.png',
  '/images/dice3.png',
  '/images/dice4.png',
  '/images/dice5.png',
  '/images/dice6.png',
];

function App() {
  const [dice1, setDice1] = useState(diceList[3]); // Başlangıçta dice4.png olarak ayarlanmış
  const [dice2, setDice2] = useState(diceList[3]); // Başlangıçta dice4.png olarak ayarlanmış
  const [winner, setWinner] = useState(''); // Kazananı saklamak için durum
  const [rolling, setRolling] = useState(false); // Zarların dönüp dönmediğini kontrol etmek için

  useEffect(() => {
    if (!rolling && dice1 !== diceList[3] && dice2 !== diceList[3]) {
      determineWinner(); // Zarlar durduğunda ve zarlar karıştırıldıysa sonucu belirle
    }
  }, [dice1, dice2, rolling]); // Zarlar durduğunda çalıştır

  function shuffleDice() {
    setWinner(''); // Kazananı sıfırla
    setRolling(true); // Zarların dönmeye başladığını işaretle

    let interval = setInterval(() => {
      setDice1(diceList[Math.floor(Math.random() * diceList.length)]);
      setDice2(diceList[Math.floor(Math.random() * diceList.length)]);
    }, 100);

    setTimeout(() => {
      clearInterval(interval);
      setRolling(false); // Zarlar durdu
    }, 3000); // 3 saniye sonra durdur
  }

  function determineWinner() {
    const dice1Value = diceList.indexOf(dice1) + 1; // Zar değeri için index + 1
    const dice2Value = diceList.indexOf(dice2) + 1;

    if (dice1Value > dice2Value) {
      setWinner(usernameInput + " wins!"); // Zar1 Zar2'den büyükse Player 1 kazanır
    } else if (dice1Value < dice2Value) {
      setWinner('Player 2 wins!'); // Zar2 Zar1'den büyükse Player 2 kazanır
    } else {
      setWinner('It\'s a tie!'); // Değerler eşitse beraberlik
    }
  }

  const [usernameInput, setUsernameInput] = useState("Player 1");

  return (
    <>
      <h1>Dice Game</h1>
      <div className='container'>
        <label htmlFor="">adını guncelle</label>
        <input
          type="text"
          value={usernameInput}
          onChange={(e) => setUsernameInput(e.target.value)}
        />  
        <div id='dices'>
          <Player playerName={ usernameInput } diceSrc={dice1} />
          <Player playerName="Player 2" diceSrc={dice2} />
        </div>
        <button onClick={shuffleDice} className='shuffle'>Shuffle</button>
        {winner && <h2>{winner}</h2>} {/* Kazananın gösterilmesi */}
      </div>
    </>
  );
}

export default App;
