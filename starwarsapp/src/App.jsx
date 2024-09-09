import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import ShipDetails from './ShipDetails';
import SearchBar from './SearchBar';

function Ships() {
  const [ships, setShips] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const adres = `https://swapi.dev/api/starships/?page=${page}`;

  useEffect(() => {
    setLoading(true);
    fetch(adres)
      .then(res => res.json())
      .then(data => {
        setShips(prevShips => [...prevShips, ...data.results]);
        setLoading(false);
      })
      .catch(err => console.error("Error fetching data: ", err));
  }, [page]);

  const handleSearch = () => {
    if (searchQuery.trim() === "") return;
    fetch(`https://swapi.dev/api/starships/?search=${searchQuery}`)
      .then(res => res.json())
      .then(data => {
        setShips(data.results);
      })
      .catch(err => console.error("Error searching data: ", err));
  };

  return (
    <div className="ships-container">
      <SearchBar
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        handleSearch={handleSearch}
      />
      <h1>Yıldız Gemileri</h1>
      <div className="ship-list">
        {ships.map((ship, index) => {
          const shipId = ship.url.split("/")[5]; // API'deki geminin id'sini url'den çekiyoruz
          return (
            <div key={index} className="ship-card">
              <h2>{ship.name}</h2>
              <p><strong>Model:</strong> {ship.model}</p>
              <p><strong>Hız:</strong> {ship.max_atmosphering_speed || "Bilinmiyor"}</p>
              <Link to={`/ship/${shipId}`}>Detaylar</Link>
            </div>
          );
        })}
      </div>
      {loading && <p>Yükleniyor...</p>}
      <button onClick={() => setPage(page + 1)}>Daha Fazla</button>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Ships />} />
        <Route path="/ship/:id" element={<ShipDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
