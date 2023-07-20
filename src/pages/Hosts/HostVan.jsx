import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { getHostVans } from '../../../api'

const HostVan = ()=> {
    const [data, setData] = useState(null)
    
    useEffect(()=> {
        async function loadData() {
            try{
                const vansData = await getHostVans()
                setData(vansData)
            } catch (e) {
                console.log(e)
            }
        }
        loadData()
    }, [])
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