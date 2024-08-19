import { useState, useRef } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState('');
  const inputRef = useRef(null);
  const listInputRef = useRef(null);
  const [items, setItems] = useState([]);

  const handleClick = () => {
    setName(inputRef.current.value);
  };

  const addItem = () => {
    const newItem = listInputRef.current.value;
    const updatedItems = [...items, newItem];
    setItems(updatedItems);
    listInputRef.current.value = '';
  }

  const removeItem = (indexToRemove) => {
    const updatedItems = items.filter((_, index) => index !== indexToRemove);
    setItems(updatedItems);
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
      <label htmlFor="">listeye eleman ekle</label>
      <input type="text" ref={listInputRef} />
      <button onClick={addItem}>ekle</button>
      <ul>
        {items.map((item, index) => (
          <li key={index} onClick={() => removeItem(index)}>{item}</li>
        ))}
      </ul>
    </>
  );
}

export default App;
