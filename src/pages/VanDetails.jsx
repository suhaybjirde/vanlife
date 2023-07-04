import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import arrow from '/Arrow.png' 
const VansDetails = ()=> {
    const [van, setVan] = useState(null)
    const {id} = useParams()
    useEffect(()=> {
        fetch(`/api/vans/${id}`)
            .then(res => res.json())
            .then(data => setVan(data.vans))
    }, [])
    console.log(van) 
    return (
        <>
            <main className="main__vanDetails">
                <Link to='/vans' className="main__vanDetails__vansLink"><img src={arrow} alt="" /> <span>Back to all vans</span></Link>
                {
                    van ? 
                    <div className="main__vanDetails__content">
                        <img src={van.imageUrl} alt="" className="main__vanDetails__content__img"/>
                        <div className="main__vanDetails__content__info">
                            <Link className={`main__vanDetails__content__info__type ${van.type}`}>{van.type}</Link>
                            <h2 className="main__vanDetails__content__info__name">{van.name}</h2>
                            <h3 className="main__vanDetails__content__info__price">${van.price}<span>/day</span></h3>
                            <p className="main__vanDetails__content__info__description">{van.description}</p>
                            <Link className="main__vanDetails__content__info__cta">Rent this van</Link>
                        </div>
                    </div>:
                    <h2>Loading......</h2>
                }
            </main>
        </>
    )
}

export default VansDetails