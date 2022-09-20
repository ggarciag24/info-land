import React from 'react';

function CountryInfo(props){
    

    function numberWithCommas(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
    
    console.log(props.countryData.map)

    return(
        <div className='country-info'>
            <div className='country-info-head'>
            <img src={props.countryData.flag} className='flag'/>
            <h1 className='country-name'>{props.countryData.name}</h1>
            </div>
            <h4>Capital: {props.countryData.capital}</h4>
            <h4>Region: {props.countryData.region}</h4>
            <h4>Sub Region: {props.countryData.subRegion}</h4>
            <h4>population: {numberWithCommas(props.countryData.population)}</h4>
            <button className='map-btn'><a href={props.countryData.map}  target='_blank'>Open in Google Maps</a></button>
        </div>
    )
}

export default CountryInfo