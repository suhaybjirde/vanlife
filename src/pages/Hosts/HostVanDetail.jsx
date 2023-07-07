import React, { useState, useEffect} from "react";
import { useParams, Link, NavLink } from "react-router-dom";
import arrow from '/Arrow.png' 

const Van = ({ van })=> {
    return(
        <article>
            <div>
                <img src={van.imageUrl} alt="" width='100px'/>
                <div>
                    <h3>{van.name}</h3>
                    <p>{van.price} <span>/day</span></p>
                </div>
            </div>
            <ul>
                <li>
                    <NavLink>Details</NavLink>
                </li>
                <li>
                    <NavLink>Pricing</NavLink>
                </li>
                <li>
                    <NavLink>Photos</NavLink>
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
        <section>
            <Link 
                to=".."
                relative="path"
                className="main__vanDetails__vansLink"
                >
                    <img src={arrow} alt=""/> <span>Back to all vans</span>
            </Link>
            <Van van={data}/>
        </section>
    )
}

export default HostVanDetail