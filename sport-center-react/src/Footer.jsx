import './css/sections/Footer.css';

function Footer() {
    return (
        <>
            <footer>
                <div className="container">
                    <div>
                        <img src="images/logo.png" alt="logo" />
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa quis autem enim dolor esse fugiat,
                            totam, reprehenderit molestias laboriosam suscipit officiis at optio numquam sit expedita
                            perferendis quibusdam perspiciatis voluptatum!</p>
                    </div>
                    <div id="footer-links">
                        <div>
                            <h5>INFORMATION</h5>
                            <a href="#">About Us</a>
                            <a href="#">Classes</a>
                            <a href="#">Blog</a>
                            <a href="#">Contact</a>
                        </div>
                        <div>
                            <h5>HELPFUL LINKS</h5>
                            <a href="#">Services</a>
                            <a href="#">Suports</a>
                            <a href="#">Terms & Condition</a>
                            <a href="#">Privacy Policy</a>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer;