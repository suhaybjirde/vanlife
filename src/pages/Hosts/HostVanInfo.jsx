import React from "react";
import { useOutletContext } from "react-router-dom";

const Details = ()=> {
    const { data } = useOutletContext()
    return (
        <div>
            <h4>Category: <span></span>{data.type}</h4>
            <h4>Name: <span>{data.name}</span></h4>
            <h4>Description: <span>{data.description}</span></h4>
            <h4>Visibility: public</h4>
        </div>
    )
}

const Pricing = ()=> {
    const { data } = useOutletContext()
    return (
        <h4>{data.price} <span>/day</span></h4>
    )
}

const Photos = ()=> {
    const { data } = useOutletContext()
    return (
        <img src={data.imageUrl} alt="" width={"100px"}/>
    )
}

export {Details, Pricing, Photos}