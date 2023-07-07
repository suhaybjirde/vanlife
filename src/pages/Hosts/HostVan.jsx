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
        >
            <article>
                <img src={van.imageUrl} alt="" width='100px'/>
                <div>
                    <h3>{van.name}</h3>
                    <p>{van.price} <span>/day</span></p>
                </div>
            </article>
        </Link>
    ))
    return (
        <section>
            <h1>Your listed vans</h1>
            {vans}
        </section>
    )
}

export default HostVan