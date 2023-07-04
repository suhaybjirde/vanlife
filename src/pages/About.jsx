import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import img from '/image55.png'
import { Link } from "react-router-dom";

const About = ()=> (
    <>
        <Navbar />
        <main className="main__about">
            <img src={img} alt="" />
            <div className="main__about__content">
                <h2 className="main__about__content__title">Don’t squeeze in a sedan when you could relax in a van.</h2>
                <div className="main__about__content__info">
                    <p className="main__about__content__info__text">Our mission is to enliven your road trip with the perfect travel van rental. Our vans are recertified before each trip to ensure your travel plans can go off without a hitch.(Hitch costs extra 😉)</p>
                    <br />
                    <p className="main__about__content__info__text">Our team is full of vanlife enthusiasts who know firsthand the magic of touring the world on 4 wheels.</p>
                </div>
                <div className="main__about__content__focus">
                    <h2 className="main__about__content__focus__title">Your destination is waiting.  Your van is ready.</h2>
                    <Link to='/vans' className="main__about__content__focus__cta">Explore our vans</Link>
                </div>
            </div>
        </main>
        <Footer />
    </>
)
export default About