import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

const Van = ({img, name, price, type, id})=> (
    <div className='van'>
        <Link to={`/vans/${id}`}>
            <img src={img} alt="" className="van__img"/>
            <div className="van__info">
                <h2 className="van__info__name">{name}</h2>
                <h3 className="van__info__price">{price} <span>/day</span></h3>
            </div>
            <Link>{type}</Link>
        </Link>
    </div>
)
const Vans = ()=> {
    const [vans, setVans] = useState(()=> [])

    useEffect(()=> {
        fetch("/api/vans")
            .then(res => res.json())
            .then(data => setVans(data.vans))
    }, [])
    const VanElements = vans.map(item => (
        <Van 
            key={item.id}
            id={item.id}
            img={item.imageUrl} 
            name={item.name}
            price={item.price}
            type={item.type}
        />
    ))
    return (
        <>
            <Navbar />
            <main>
                <h1>Explore our van options</h1>
                {VanElements}
            </main>
        </>
    )

}
export default Vans