import React from 'react';
import CountryCard from './CountryCard';


function AllCountries(){
    const [isCountries, setIsContries] = React.useState([])

React.useEffect(() => {
    fetch(`https://restcountries.com/v3.1/all`)
        .then(res => res.json())
        .then(data => setIsContries(data))
},[])

const countryElement = isCountries.map((place, index) => {
    return <CountryCard name={place.name.common} 
        capital={place.capital}
        region={place.region}
        subRegion={place.subregion}
        flag={place.flags.svg}
        map={place.maps.googleMaps}
        population={place.population}
        key={index}/>
})

    return(
        <div className='all-countries-container'>
            <div>
            {countryElement}
            </div>
        </div>
    )
}


export default AllCountries;