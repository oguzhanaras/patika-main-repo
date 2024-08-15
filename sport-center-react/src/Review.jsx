import './css/sections/Review.css';


function Review() {
    return (
        <>
            <section id="review" className="content-blue">
                <div className="container">
                    <h3>REVIEW CLIENT</h3>
                    <hr className="alt-cizgi" />
                    <p id="review-title">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Exercitationem vero
                        recusandae voluptate quis esse voluptatum officia nihil, commodi, provident perspiciatis eveniet
                        inventore fugit ducimus explicabo, itaque illo iure! Eaque, dolorem.</p>
                    <div id="clients">
                        <div className="client-wrapper">
                            <div className="client-wrapper-head">
                                <img src="images/client1.jpg" alt="client1" />
                                <div>
                                    <h6>Diet Expert</h6>
                                    <span>CFO</span>
                                </div>
                            </div>
                            <div className="client-wrapper-content">
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis provident dolorum eum
                                    accusamus, atque quibusdam fuga sed et debitis nisi amet saepe voluptatem perspiciatis quos
                                    incidunt sapiente nobis optio dolore!</p>
                            </div>
                            <div className="client-wrapper-effect">
                                <div className="effect-item-left"></div>
                                <div className="effect-item-right"></div>
                            </div>
                        </div>
                        <div className="client-wrapper">
                            <div className="client-wrapper-head">
                                <img src="images/client2.jpg" alt="client2" />
                                <div>
                                    <h6>Diet Expert</h6>
                                    <span>CFO</span>
                                </div>
                            </div>
                            <div className="client-wrapper-content">
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis provident dolorum eum
                                    accusamus, atque quibusdam fuga sed et debitis nisi amet saepe voluptatem perspiciatis quos
                                    incidunt sapiente nobis optio dolore!</p>
                            </div>
                            <div className="client-wrapper-effect">
                                <div className="effect-item-left"></div>
                                <div className="effect-item-right"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Review;