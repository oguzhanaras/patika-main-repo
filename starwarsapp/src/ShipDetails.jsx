import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

function ShipDetails() {
    const { id } = useParams(); // URL'deki id parametresini alıyoruz
    const [ship, setShip] = useState(null);

    useEffect(() => {
        fetch(`https://swapi.dev/api/starships/${id}/`)
        .then(res => res.json())
        .then(data => setShip(data))
        .catch(err => console.error("Error fetching ship details: ", err));
    }, [id]);

    if (!ship) return <p>Yükleniyor...</p>;

    return (
        <div className="ship-details">
        <h1>{ship.name}</h1>
        <p><strong>Model:</strong> {ship.model}</p>
        <p><strong>Üretici:</strong> {ship.manufacturer}</p>
        <p><strong>Yolcu Kapasitesi:</strong> {ship.passengers}</p>
        <p><strong>Max Hız:</strong> {ship.max_atmosphering_speed || "Bilinmiyor"}</p>
        <p><strong>Mürettebat:</strong> {ship.crew}</p>
        <p><strong>Kargo Kapasitesi:</strong> {ship.cargo_capacity}</p>
        <Link to="/">Ana Sayfaya Geri Dön</Link>
        </div>
    );
}

export default ShipDetails;
