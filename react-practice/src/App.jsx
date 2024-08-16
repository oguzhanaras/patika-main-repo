import { useState, useRef } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState('');
  const inputRef = useRef(null);

  const handleClick = () => {
    setName(inputRef.current.value);
  };

  return (
    <>
      <p>counter: {count}</p>
      <button onClick={() => setCount(count + 1)}>artır</button>
      <button onClick={() => setCount(count - 1)}>azalt</button>
      <br />
      <input type="text" name="name" ref={inputRef} />
      <button onClick={handleClick}>tıkla</button>
      <p>{name}</p>
    </>
  );
}

export default App;
