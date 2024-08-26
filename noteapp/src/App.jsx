import { useState } from 'react';
import './App.css';

function Search({ setSearchTerm }) {
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className="search-container">
      <input
        type="text"
        placeholder="Ara"
        onChange={handleSearchChange}
        className="search-input"
      />
    </div>
  );
}

function AddNote({ addNote }) {
  const [selectedColor, setSelectedColor] = useState('#ff69b4'); // varsayılan renk pembe

  const colors = ['#ff69b4', '#9370db', '#ffeb3b', '#00bcd4', '#8bc34a']; // pembe mor sarı mavi yeşil

  const handleSubmit = (e) => {
    e.preventDefault();
    const newNote = {
      text: e.target.note.value,
      color: selectedColor
    };
    addNote(newNote);
    e.target.note.value = '';
  };

  const handleColorChange = (color) => {
    setSelectedColor(color);
  };

  return (
    <div className="note-form-container">
      <form onSubmit={handleSubmit}>
        <div className="textarea-container">
          <textarea
            name="note"
            placeholder="Not Ekle"
            style={{ backgroundColor: selectedColor }}
            className="note-textarea"
          ></textarea>
          <div className="color-options">
            {colors.map((color, index) => (
              <div
                key={index}
                className={`color-circle ${selectedColor === color ? 'selected' : ''}`}
                style={{ backgroundColor: color }}
                onClick={() => handleColorChange(color)}
              ></div>
            ))}
          </div>
        </div>
        <button type="submit" className="add-button">Ekle</button>
      </form>
    </div>
  );
}

function NoteList({ notes, searchTerm, deleteNote }) {
  const filteredNotes = notes.filter((note) =>
    note.text.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <ul className="note-list">
      {filteredNotes.map((note, index) => (
        <li
          key={index}
          style={{ backgroundColor: note.color }}
          className="note-item"
        >
          {note.text}
          <button className="delete-button" onClick={() => deleteNote(index)}>
            Sil
          </button>
        </li>
      ))}
    </ul>
  );
}

function App() {
  const [notes, setNotes] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const addNote = (note) => {
    setNotes([...notes, note]);
  };

  const deleteNote = (index) => {
    const newNotes = notes.filter((_, i) => i !== index);
    setNotes(newNotes);
  };

  return (
    <div className="app-container">
      <h1>Not Uygulaması</h1>
      <Search setSearchTerm={ setSearchTerm } />
      <AddNote addNote={ addNote } />
      <NoteList notes={ notes } searchTerm={ searchTerm } deleteNote={ deleteNote } />
    </div>
  );
}

export default App;