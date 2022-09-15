import React from 'react';

function CountryInfo(props){
    
    return(
        <div className='country-info'>
            <div className='country-info-head'>
            <img src={props.countryData.flag} className='flag'/>
            <h1>{props.countryData.name}</h1>
            </div>
            <h4>Capital: {props.countryData.capital}</h4>
            <h4>Region: {props.countryData.region}</h4>
            <h4>Sub Region: {props.countryData.subRegion}</h4>
            <h4>population: {props.countryData.population}</h4>
            {/* <iframe src={props.countryData.map} width="600" height="450" style={{border: 0}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe> */}

        </div>
    )
}


export default CountryInfo