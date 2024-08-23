import React, { useState } from 'react';
import products from './product';
import './App.css';

function Product({ product, myMoney, setMyMoney, onPurchase, onSell }) {
  const [quantity, setQuantity] = useState(product.quantity);

  function buyProduct() {
    if (myMoney >= product.price) {
      setMyMoney(myMoney - product.price);
      setQuantity(quantity + 1);
      onPurchase(product.name, product.price, 1);
    }
  }

  function sellProduct() {
    if (quantity > 0) {
      setMyMoney(myMoney + product.price);
      setQuantity(quantity - 1);
      onSell(product.name, product.price, 1);
    }
  }

  return (
    <div className='product'>
      <h2>{product.name}</h2>
      <span>{product.price} TL</span>
      <div className='actions'>
        <button 
          onClick={sellProduct} 
          disabled={quantity === 0}
          className={quantity === 0 ? 'disabled-button' : ''}
        >
          Sat
        </button>
        <input type="text" value={quantity} readOnly />
        <button 
          onClick={buyProduct} 
          disabled={myMoney < product.price}
          className={myMoney < product.price ? 'disabled-button' : ''}
        >
          Satın Al
        </button>
      </div>
    </div>
  );
}

function App() {
  const [myMoney, setMyMoney] = useState(1000000);
  const [purchasedProducts, setPurchasedProducts] = useState([]);

  function handlePurchase(productName, productPrice, amount) {
    setPurchasedProducts(prevProducts => {
      const existingProduct = prevProducts.find(p => p.name === productName);
      if (existingProduct) {
        return prevProducts.map(p =>
          p.name === productName
            ? { ...p, quantity: p.quantity + amount, total: p.total + productPrice * amount }
            : p
        );
      } else {
        return [...prevProducts, { name: productName, quantity: amount, total: productPrice * amount }];
      }
    });
  }

  function handleSell(productName, productPrice, amount) {
    setPurchasedProducts(prevProducts => {
      return prevProducts
        .map(p =>
          p.name === productName
            ? { ...p, quantity: p.quantity - amount, total: p.total - productPrice * amount }
            : p
        )
        .filter(p => p.quantity > 0);
    });
  }

  const totalCost = purchasedProducts.reduce((acc, product) => acc + product.total, 0);

  return (
    <>
      <div id='content-section'>
        <h1 className='title'>Bill Gates</h1>
        <span className='balance'>Bakiye: {myMoney} TL</span>
        <div className='product-container'>
          {products.map(product => (
            <Product 
              key={product.id} 
              product={product} 
              myMoney={myMoney} 
              setMyMoney={setMyMoney} 
              onPurchase={handlePurchase}
              onSell={handleSell}
            />
          ))}
        </div>
        <div className='purchased-products'>
          <h2>Satın Alınan Ürünler</h2>
          <ul>
            {purchasedProducts.length === 0 ? (
              <li>Henüz ürün satın alınmadı</li>
            ) : (
              purchasedProducts.map((product, index) => (
                <li key={index}>
                  {product.name} - {product.quantity} adet - Toplam: {product.total} TL
                </li>
              ))
            )}
          </ul>
          <h3>Sepet Toplamı: {totalCost} TL</h3>
        </div>
      </div>
    </>
  );
}

export default App;