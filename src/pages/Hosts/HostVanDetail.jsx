import React, { useState, useEffect} from "react";
import { useParams, Link, NavLink, Outlet } from "react-router-dom";
import arrow from '/Arrow.png' 

const Van = ({ van })=> {
    return(
        <article className="host-van-detail__van">
            <div className="host-van-detail__van__header">
                <img src={van.imageUrl} alt="" width='100px' className="host-van-detail__van__header__img"/>
                <div className="host-van-detail__van__header__info">
                    <p className={`host-van-detail__van__header__info__type ${van.type}`}>{van.type}</p>
                    <h3 className="host-van-detail__van__header__info__name">{van.name}</h3>
                    <p className="host-van-detail__van__header__info__price">${van.price}<span>/day</span></p>
                </div>
            </div>
            <ul className="host-van-detail__van__nav-list">
                <li className="host-van-detail__van__nav-list__item">
                    <NavLink
                        to='.'
                        end
                        className={({isActive}) => isActive ? 'active' : null}
                    >
                    Details
                    </NavLink>
                </li>
                <li className="host-van-detail__van__nav-list__item">
                    <NavLink
                        to='pricing'
                        className={({isActive}) => isActive ? 'active' : null}
                    >
                    Pricing
                    </NavLink>
                </li>
                <li className="host-van-detail__van__nav-list__item">
                    <NavLink
                        to='photos'
                        className={({isActive}) => isActive ? 'active' : null}
                    >
                    Photos
                    </NavLink>
                </li>
            </ul>
        </article>
    )
}

const HostVanDetail = ()=> {
    const [data, setData] = useState(null)
    const { id } = useParams()
    useEffect(()=> {
        async function getData() {
            const res = await fetch(`/api/host/vans/${id}`);
            const actualData = await res.json()
            setData(actualData.vans)
        }
        getData()
    },[])
    if (!data) return
    return (
        <section className="host-van-detail">
            <Link 
                to=".."
                relative="path"
                className="host-van-detail__back-link"
                >
                    <img src={arrow} alt=""/> <span>Back to all vans</span>
            </Link>
            <div className="container">
                <Van van={data}/>
                <Outlet context={{ data }}/>
            </div>
        </section>
    )
}

export default HostVanDetail