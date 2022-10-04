import React from 'react';


function CountryCard(props){

    function numberWithCommas(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    return (
        <div className='countryCard' onClick={(e) => props.elementClicked(e, props.name)}>
            <img className='countryCard-flag' src={props.flag}/>
            <p>{props.name}</p>
            <p><label>Capital: </label>{props.capital}</p>
            <p><label>Region: </label>{props.region}</p>
            <p><label>Sub-Region: </label>{props.subRegion}</p>
            <p><label>Population: </label>{numberWithCommas(props.population)}</p>
            <button href={props.map} target='_blank'>Map</button>
        </div>
    )
}

export default CountryCard;