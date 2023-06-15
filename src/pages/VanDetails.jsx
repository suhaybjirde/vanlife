import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Navbar from "../components/Navbar";
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
            <Navbar />
            <main>
                <Link to='/vans'>&larr; Back to all vans</Link>
                {
                    van ? 
                    <div>
                        <img src={van.imageUrl} alt="" />
                        <div className="info">
                            <Link>{van.type}</Link>
                            <h2 className="name">{van.name}</h2>
                            <p className="description">{van.description}</p>
                            <Link>Rent this van</Link>
                        </div>
                    </div>:
                    <h2>Loading......</h2>
                }
            </main>
        </>
    )
}

export default VansDetails