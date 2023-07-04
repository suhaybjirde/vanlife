import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
const  Home = ()=> (
  <>
    <Navbar />
    <main className="main__home">
      <div className="main__home__content">
          <h1 className="main__home__content__title">You got the travel plans, we got the travel vans.</h1>
          <p className="main__home__content__info">Add adventure to your life by joining the #vanlife movement. Rent the perfect van to make your perfect road trip.</p>
          <Link className="main__home__content__link" to="/vans">Find your van</Link>
      </div>
    </main>
    <Footer />
  </>
)

export default Home