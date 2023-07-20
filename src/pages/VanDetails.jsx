import React from "react";
import { Link, useLoaderData, useLocation } from "react-router-dom";
import arrow from '/Arrow.png' 
import { getVans } from '../../api'

export function loader({ params: { id } }) {
    return getVans(id)
}

const VansDetails = ()=> {
    const van = useLoaderData()
    const location = useLocation()
    const backTo = location.state?.search || ''
    const type = location.state?.type || 'all'
    return (
        <>
            <main className="main__vanDetails">
                <Link to={`..${backTo}`} relative="path" className="main__vanDetails__vansLink"><img src={arrow} alt="" /> <span>Back to {type} vans</span></Link>
                <div className="main__vanDetails__content">
                    <img src={van.imageUrl} alt="" className="main__vanDetails__content__img"/>
                    <div className="main__vanDetails__content__info">
                        <Link className={`main__vanDetails__content__info__type ${van.type}`}>{van.type}</Link>
                        <h2 className="main__vanDetails__content__info__name">{van.name}</h2>
                        <h3 className="main__vanDetails__content__info__price">${van.price}<span>/day</span></h3>
                        <p className="main__vanDetails__content__info__description">{van.description}</p>
                        <Link className="main__vanDetails__content__info__cta">Rent this van</Link>
                    </div>
                </div>
            </main>
        </>
    )
}

export default VansDetails