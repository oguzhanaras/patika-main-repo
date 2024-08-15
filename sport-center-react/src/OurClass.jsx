import { useEffect } from 'react';
import './css/sections/OurClass.css';

function OurClass() {

    const text = [
        {
            id: "yoga",
            img: "images/yoga.jpg",
            title1: "Why are your Yoga?",
            title2: "When comes Yoga Your Time.",
            text1: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
            text2: "Saturday - Sunday: 8:00am - 10:00am",
            text3: "Monday - Tuesday: 10:00am - 12:00am",
            text4: "Wednesday - Friday: 3:00pm - 6:00pm",
        },
        {
            id: "group",
            img: "images/group.webp",
            title1: "Group Classes",
            title2: "When comes Group Classes Your Time.",
            text1: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
            text2: "Saturday - Sunday: 9:00am - 11:00am",
            text3: "Monday - Tuesday: 11:00am - 1:00pm",
            text4: "Wednesday - Friday: 4:00pm - 7:00pm",
        },
        {
            id: "solo",
            img: "images/solo.jpg",
            title1: "Solo Classes",
            title2: "When comes Solo Classes Your Time.",
            text1: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
            text2: "Saturday - Sunday: 7:00am - 9:00am",
            text3: "Monday - Tuesday: 11:00am - 1:00pm",
            text4: "Wednesday - Friday: 4:00pm - 7:00pm",
        },
        {
            id: "stretch",
            img: "images/stret.webp",
            title1: "Stretch Classes",
            title2: "When comes Stretch Classes Your Time.",
            text1: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
            text2: "Saturday - Sunday: 7:00am - 9:00am",
            text3: "Monday - Tuesday: 11:00am - 1:00pm",
            text4: "Wednesday - Friday: 4:00pm - 7:00pm",
        }
    ];

    useEffect(() => {
        const btnDiv = document.getElementById("btn-group");
        const yoga = document.getElementById("yoga");
        const group = document.getElementById("group");
        const solo = document.getElementById("solo");
        const stretch = document.getElementById("stretch");

        const ourClassImg = document.getElementById('our-image');
        const title1 = document.getElementById('our-class-title-1');
        const title2 = document.getElementById('our-class-title-2');
        const ourP1 = document.getElementById('our-class-p-1');
        const ourP2 = document.getElementById('our-class-p-2');
        const ourP3 = document.getElementById('our-class-p-3');
        const ourP4 = document.getElementById('our-class-p-4');

        let height = document.getElementById("height");
        let weight = document.getElementById("weight");
        let result = document.getElementById("result");
        let bmiInputs = document.getElementById("bmi-inputs");

        function showText(index) {
            ourClassImg.src = text[index].img;
            title1.textContent = text[index].title1;
            title2.textContent = text[index].title2;
            ourP1.textContent = text[index].text1;
            ourP2.textContent = text[index].text2;
            ourP3.textContent = text[index].text3;
            ourP4.textContent = text[index].text4;
        }

        function toggleActive(key) {
            let btns = [yoga, group, solo, stretch];
            btns.forEach(btn => {
                if (btn.id === key) {
                    btn.classList.add("active");
                    btn.children[0].classList.add("btn-effect");
                } else {
                    btn.classList.remove("active");
                    btn.children[0].classList.remove("btn-effect");
                }
            });
        }

        function checkInputs() {
            var heightValue = height.value.trim();
            var weightValue = weight.value.trim();
            
            // Her iki input da doluysa calculator fonksiyonunu çağır
            if (heightValue !== "" && weightValue !== "") {
                calculator(heightValue / 100, weightValue);
            }
        }
        
        function calculator(h, w) {
            let bmi = w / (h * h);
            console.log(bmi);
            result.value = bmi;
        }

        btnDiv.addEventListener("click", (e) => {
            let id = e.target.id;

            if (id === "yoga") {
                showText(0);
                toggleActive("yoga");
            } else if (id === "group") {
                showText(1);
                toggleActive("group");
            } else if (id === "solo") {
                showText(2);
                toggleActive("solo");
            } else if (id === "stretch") {
                showText(3);
                toggleActive("stretch");
            }
        });

        height.addEventListener('input', checkInputs);
        weight.addEventListener('input', checkInputs);

        return () => {
            btnDiv.removeEventListener('click', showText);
        };

    }, []);

    return (
        <section id="our-classes">
            <div id="gray-effect"></div>
            <div id="our-classes-div" className="container">
                <header id="our-class-head">
                    <h2>OUR CLASSES</h2>
                    <hr className="alt-cizgi" />
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae voluptate impedit mollitia
                        voluptatibus quas! Repellendus laboriosam sequi labore officiis earum, voluptatem eaque at tempore
                        provident sed officia hic enim omnis!
                    </p>
                </header>
                <div id="btn-group">
                    <button id="yoga" className="active">
                        Yoga<div className="btn-effect"></div>
                    </button>
                    <button id="group">
                        Group<div className=""></div>
                    </button>
                    <button id="solo">
                        Solo<div className=""></div>
                    </button>
                    <button id="stretch">
                        Stretching<div className=""></div>
                    </button>
                </div>
                <div id="our-class-content">
                    <div id="our-class-info">
                        <div>
                            <h3 id="our-class-title-1">Why are your Yoga?</h3>
                            <p id="our-class-p-1">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
                                magni nobis ullam tempora aliquam ratione tempore non commodi praesentium voluptatem! Cumque voluptas
                                repellendus dolores corporis dicta autem libero et similique cupiditate?</p>
                        </div>
                        <div>
                            <h3 id="our-class-title-2">When comes Yoga Your Time.</h3>
                            <p id="our-class-p-2">Saturday - Sunday: 8:00am - 10:00am</p>
                            <p id="our-class-p-3">Monday - Tuesday: 10:00am - 12:00am</p>
                            <p id="our-class-p-4">Wednesday - Friday: 3:00pm - 6:00pm</p>
                        </div>
                    </div>
                    <div id="our-class-img">
                        <img id="our-image" src="images/yoga.jpg" alt="yoga" />
                    </div>
                </div>
                <div id="our-class-bmi">
                    <div id="calculator">
                        <h2>BMI Calculator</h2>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam aut officia porro dolores ea
                            recusandae obcaecati dolorum dignissimos explicabo at totam corporis aliquid fugit magnam
                            aperiam, natus minima illum beatae!</p>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam aut officia porro dolores ea
                            recusandae obcaecati dolorum dignissimos explicabo at totam corporis aliquid fugit magnam
                            aperiam, natus minima illum beatae!</p>
                        <div id="bmi-inputs">
                            <input id="height" type="text" placeholder="Height (cm)" />
                            <input id="weight" type="text" placeholder="Weight (kg)" />
                        </div>
                    </div>
                    <div id="calculator-show">
                        <h5>YOUR BMI</h5>
                        <img src="images/bmi-index.jpg" alt="bmi" />
                        <div className="slidecontainer">
                            <input id="result" type="range" min="15" max="40" value="10" className="slider" disabled />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default OurClass;
