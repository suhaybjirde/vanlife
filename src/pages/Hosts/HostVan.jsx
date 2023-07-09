import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const HostVan = ()=> {
    const [data, setData] = useState(null)
    
    useEffect(()=> {
        async function getData() {
            const res = await fetch('/api/host/vans');
            const actualData = await res.json()
            setData(actualData.vans)
        }
        getData()
    },[])
    if (!data) return
    const vans = data.map(van => (
        <Link 
            to={van.id} 
            key={van.id}
            className="host-vans__item"
        >
            <article className="host-vans__item__van">
                <img src={van.imageUrl} alt="" width='100px' className="host-vans__item__van__img"/>
                <div className="host-vans__item__van__info">
                    <h3 className="host-vans__item__van__info__name">{van.name}</h3>
                    <p className="host-vans__item__van__info__price">${van.price}/day</p>
                </div>
            </article>
        </Link>
    ))
    return (
        <section className="host-vans">
            <h1 className="host-vans__title">Your listed vans</h1>
            {vans}
        </section>
    )
}

export default HostVan