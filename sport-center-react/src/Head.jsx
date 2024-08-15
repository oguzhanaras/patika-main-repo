import { useEffect } from 'react';
import './css/sections/Head.css';

function Head() {
    useEffect(() => {
        const navigation = document.getElementById('navigation');
        const nav = document.getElementById("nav");

        function toggleMenu() {
            if (nav.className === "nav") {
                nav.className += " responsive";
                navigation.className += " bg-blue";
            } else {
                nav.className = "nav";
                if (document.documentElement.scrollTop < 50) {
                    navigation.className = "";
                }
            }
        }

        function navBG() {
            if (document.documentElement.scrollTop > 50) {
                navigation.className = "bg-blue";
            } else {
                if (nav.className !== "nav responsive") {
                    navigation.className = "";
                }
            }
        }

        window.onscroll = navBG;

        const menuIcon = document.querySelector('.icon');
        menuIcon.addEventListener('click', toggleMenu);

        // Cleanup event listener on component unmount
        return () => {
            menuIcon.removeEventListener('click', toggleMenu);
        };
    }, []);

    return (
        <>
            <section id="hero">
                <header id="header">
                    <div id="navigation">
                        <div className="container">
                            <div id="logo">
                                <img src="images/logo.png" alt="logo" />
                                <a href="javascript:void(0);" className="icon">
                                    <i className="fa fa-bars"></i>
                                </a>
                            </div>
                            <nav id="nav" className="nav">
                                <a href="#hero">Home</a>
                                <a href="#our-classes">Classes</a>
                                <a href="#our-trainers">Trainers</a>
                                <a href="#review">Review</a>
                                <a href="#contact" className="active">Join Us</a>
                            </nav>
                        </div>
                    </div>
                    <div id="header-body" className="container">
                        <h1>POWERFULL</h1>
                        <h2>Group Practice With Trainer</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi veniam iure id tenetur delectus,
                            cupiditate impedit pariatur dolorum dolores adipisci, eaque quod quo omnis. Cum, quaerat voluptas.
                            Ut, tempore nesciunt.</p>
                    </div>
                    <div id="header-foot" className="container">
                        <button id="dene">Sign Up</button>
                        <button>Details</button>
                    </div>
                </header>
                <div className="content-blue">
                    <div id="hero-infos" className="container">
                        <div className="info">
                            <h6>325</h6>
                            <span>Course</span>
                        </div>
                        <div className="info">
                            <h6>405</h6>
                            <span>Work Out</span>
                        </div>
                        <div className="info">
                            <h6>305</h6>
                            <span>Working Hour</span>
                        </div>
                        <div className="info">
                            <h6>705</h6>
                            <span>Happy Client</span>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Head;
