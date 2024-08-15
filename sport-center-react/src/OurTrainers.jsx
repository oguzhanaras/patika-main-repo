import './css/sections/OurTrainer.css';

function OurTrainer() {
    return (
        <>
            <section id="our-trainers" className="content-blue">
                <div id="our-trainers-body" className="container">
                    <h2>OUR BEST TRAINERS</h2>
                    <hr className="alt-cizgi" />
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam molestiae eaque quos doloremque vero
                        earum accusantium sed placeat. Ab, ducimus! Illo ipsa quas ad voluptatibus inventore laborum pariatur
                        qui accusamus.
                    </p>
                    <div id="our-trainers-images">
                        <div className="bordered-image-wrapper">
                            <img src="images/trainer1.jpg" alt="trainer-1" className="bordered-image" />
                            <div className="border-left"></div>
                            <div className="border-top"></div>
                            <div className="border-right"></div>
                            <div className="border-bottom"></div>
                            <div className="trainer-info">
                                <h5>Jane Doe</h5>
                                <span>Cardio Trainer</span>
                            </div>
                        </div>
                        <div class="bordered-image-wrapper">
                            <img src="images/trainer2.jpg" alt="trainer-2" class="bordered-image" />
                            <div className="border-left"></div>
                            <div className="border-top"></div>
                            <div className="border-right"></div>
                            <div className="border-bottom"></div>
                            <div className="trainer-info">
                                <h5>Jane Doe</h5>
                                <span>Cardio Trainer</span>
                            </div>
                        </div>
                        <div className="bordered-image-wrapper">
                            <img src="images/trainer3.jpg" alt="trainer-3" className="bordered-image" />
                            <div className="border-left"></div>
                            <div className="border-top"></div>
                            <div className="border-right"></div>
                            <div className="border-bottom"></div>
                            <div className="trainer-info">
                                <h5>Jane Doe</h5>
                                <span>Cardio Trainer</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default OurTrainer;