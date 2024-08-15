import './css/sections/Contact.css';

function Contact() {
    return (
        <>
            <section id="contact">
                <div className="container">
                    <h2>CONTACT US</h2>
                    <hr className="alt-cizgi" />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni est illo sed voluptatem accusantium? Non
                        repellendus quod porro accusantium facere. Quod ab delectus maxime, odit laborum facere quis quidem
                        consequuntur.
                    </p>
                    <div id="contact-body">
                        <div id="contact-form">
                            <div id="contact-head">
                                <div>
                                    <h6>Mobile Number</h6>
                                    <span>+153 685 222 5562</span>
                                </div>
                                <div>
                                    <h6>Email Address</h6>
                                    <span>demo@demo.com</span>
                                </div>
                            </div>
                            <h5>Make An Appoinment</h5>
                            <form>
                                <input type="text" name="name" placeholder="your name" />
                                <input type="email" name="email" placeholder="your email" />
                                <textarea name="text" placeholder="your message"></textarea>
                            </form>
                        </div>
                        <div id="contact-map">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d195884.3004316957!2d32.59795819912585!3d39.90352329772788!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14d347d520732db1%3A0xbdc57b0c0842b8d!2sAnkara!5e0!3m2!1str!2str!4v1723621638134!5m2!1str!2str" allowfullscreen="" loading="lazy"
                                referrerpolicy="no-referrer-when-downgrade">
                            </iframe>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Contact;