import './css/sections/Purchase.css';

function Purchase() {
    return (
        <>
            <section id="purchase">
                <div id="purchase-content" className="container">
                    <h2>PURCHASE FROM US</h2>
                    <hr className="alt-cizgi" />
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero cumque neque possimus molestias, mollitia
                        rerum quam adipisci corrupti voluptates exercitationem, beatae ipsum natus sunt iusto veniam voluptas id
                        consectetur provident.
                    </p>
                    <div id="purchase-images">
                        <div id="purchase-item-wrapper">
                            <img src="images/purchase1.jpg" className="purchase-image" alt="purchase1" />
                            <h5>Kettlebell / 5KG</h5>
                            <span className="discount">89,99$</span> / <span>59,99$</span>
                            <div className="purchase-item-foot">
                                <img src="images/cart3.svg" alt="buy" />
                                <span>Add To Card</span>
                            </div>
                        </div>
                        <div id="purchase-item-wrapper">
                            <img src="images/purchase2.jpg" className="purchase-image" alt="purchase2" />
                            <h5>Kettlebell / 5KG</h5>
                            <span className="discount">1299,99$</span> / <span>1099,99$</span>
                            <div className="purchase-item-foot">
                                <img src="images/cart3.svg" alt="buy" />
                                <span>Add To Card</span>
                            </div>
                        </div>
                        <div id="purchase-item-wrapper">
                            <img src="images/purchase3.jpg" className="purchase-image" alt="purchase3" />
                            <h5>Kettlebell / 5KG</h5>
                            <span className="discount">79,99$</span> / <span>69,99$</span>
                            <div className="purchase-item-foot">
                                <img src="images/cart3.svg" alt="buy" />
                                <span>Add To Card</span>
                            </div>
                        </div>
                        <div id="purchase-item-wrapper">
                            <img src="images/purchase4.jpg" className="purchase-image" alt="purchase4" />
                            <h5>Kettlebell / 5KG</h5>
                            <span className="discount">59,99$</span> / <span>49,99$</span>
                            <div className="purchase-item-foot">
                                <img src="images/cart3.svg" alt="buy" />
                                <span>Add To Card</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Purchase;