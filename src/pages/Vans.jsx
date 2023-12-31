import React from "react";
import { Link, useSearchParams, useLoaderData } from "react-router-dom";
import { getVans } from '../utils/api'

export function loader() {
    return getVans()
}

const Van = ({img, name, price, type, id, state, sortedby})=> (
    <div className='van'>
        <Link to={id} state={{search: `?${state}`, type: sortedby}}>
            <img src={img} alt="" className="van__img"/>
            <div className="van__info">
                <h2 className="van__info__name">{name}</h2>
                <h3 className="van__info__price">{price} <span>/day</span></h3>
            </div>
            <p className={`van__info__link ${type}`}>{type}</p>
        </Link>
    </div>
)
const Vans = ()=> {
    const [searchParams, setSearchParams] = useSearchParams()
    const typeFilter = searchParams.get('type')
    
    const vans = useLoaderData()

    const sortedVan = typeFilter 
        ? vans.filter(vans => vans.type.toLowerCase() === typeFilter)
        : vans


    const VanElements = sortedVan.map(item => (
        <Van 
            key={item.id}
            id={item.id}
            sortedby={typeFilter}
            state={searchParams.toString()}
            img={item.imageUrl} 
            name={item.name}
            price={item.price}
            type={item.type}
        />
    ))

    function handleFilterChange(key, value) {
        setSearchParams(prevParams => {
          if (value === null) {
            prevParams.delete(key)
          } else {
            prevParams.set(key, value)
          }
          return prevParams
        })
    }
    return (
        <>
            <main className="main__vans">
                <h1 className="main__vans__title">Explore our van options</h1>
                <ul className="main__vans__nav">
                    <li className="main__vans__nav__item">
                        <button 
                            className={`main__vans__nav__item__filter simple ${typeFilter === 'simple' ? 'selected' : ''}`}  
                            onClick={() => handleFilterChange('type', 'simple')}
                            >
                            Simple
                        </button>
                    </li>
                    <li className="main__vans__nav__item">
                        <button 
                            className={`main__vans__nav__item__filter luxury ${typeFilter === 'luxury' ? 'selected' : ''}`}  
                            onClick={() => handleFilterChange('type', 'luxury')}
                            >
                            Luxury
                        </button>
                    </li>
                    <li className="main__vans__nav__item">
                        <button 
                            className={`main__vans__nav__item__filter rugged ${typeFilter === 'rugged' ? 'selected' : ''}`}  
                            onClick={() => handleFilterChange('type', 'rugged')}
                            >
                            rugged
                        </button>
                    </li>
                    { typeFilter ?
                        (
                        <li className="main__vans__nav__item">
                            <button className="main__vans__nav__item__clear" onClick={() => handleFilterChange('type', null)}>Clear filters</button>
                        </li>
                        )
                        : null }
                </ul>
                <div className="main__vans__container">
                    {VanElements}
                </div>
            </main>
        </>
    )

}
export default Vans