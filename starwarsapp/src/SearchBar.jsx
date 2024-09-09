import React from 'react';

function SearchBar({ searchQuery, setSearchQuery, handleSearch }) {
    return (
        <div className="search-bar">
        <input
            type="text"
            placeholder="Yıldız gemisi adı veya modeli ara"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button onClick={handleSearch}>Ara</button>
        </div>
    );
}

export default SearchBar;
