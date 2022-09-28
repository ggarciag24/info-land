import React from 'react';
import CountryCard from './CountryCard';


function AllCountries(){
    const [isCountries, setIsCountries] = React.useState([]);
    const [isSort, setIsSort] = React.useState('alphabetical');
    const [isFilter, setIsFilter] = React.useState('all');

React.useEffect(() => {
        fetch(`https://restcountries.com/v3.1/all`)
        .then(res => res.json())
        .then(data => setIsCountries(data))
},[])


const filteredArr = isCountries.filter((place) => {
    if(isFilter === 'all'){
        return true;
    } else {
        return place.region === isFilter;
    }
})


function sortCountries(){
        if(isSort === 'alphabetical'){
            filteredArr.sort(function(a, b){
                if(a.name.common < b.name.common) { return -1; }
                if(a.name.common > b.name.common) { return 1; }
                return 0;
            })
        }
        if(isSort === 'mostPopulated'){
            return filteredArr.sort((a,b) => b.population - a.population)
        }
        if(isSort === 'leastPopulated'){
            return filteredArr.sort((a,b) => a.population - b.population)
        }
        return filteredArr;
    }

sortCountries(); 


const countryElement = filteredArr.map((place, index) => {
    return <CountryCard key={index}
    data-testid={index}
        name={place.name.common} 
        capital={place.capital}
        region={place.region}
        subRegion={place.subregion}
        flag={place.flags.svg}
        map={place.maps.googleMaps}
        population={place.population}/>
})

function handleSort(e){
    setIsSort(e.target.value);
}


 
function handleFilter(e){
    setIsFilter(e.target.value);
}
    return(
        <div>
        <div className='allCountriesPageBtns'>
            <label>Filter by Region: 
            <select value={isFilter} onChange={handleFilter}>
                <option value="all">All</option>
                <option value="Americas">Americas</option>
                <option value="Europe">Europe</option>
                <option value="Africa">Africa</option>
                <option value="Asia">Asia</option>
                <option value="Oceania">Oceania</option>
                <option value="Antarctic">Antarctic</option>
            </select>
            </label>
            <label>Sort by: 
            <select onChange={handleSort}>
                <option value="alphabetical">Alphabetical</option>
                <option value="mostPopulated">most populated</option>
                <option value="leastPopulated">least populated</option>
            </select>
            </label>
            </div>
        <div className='all-countries-container'>
            <div>
            {countryElement}
            </div>
        </div>
        </div>
    )
}


export default AllCountries;