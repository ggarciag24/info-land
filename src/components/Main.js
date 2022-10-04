import React from 'react';
import CountryInfo from './CountryInfo';
import CountryCard from './CountryCard';
import OptionCard from './OptionCard';



function Main(props){
    const [isSearchWord, setIsSearchWord] = React.useState('')
    const [isResult, setIsResult] = React.useState([])
    const [isCountries, setIsCountries] = React.useState([]);
    const [isSort, setIsSort] = React.useState('alphabetical');
    const [isFilter, setIsFilter] = React.useState('all');


React.useEffect(() => {
        fetch(`https://restcountries.com/v3.1/all`)
        .then(res => res.json())
        .then(data => setIsCountries(data))
},[])

function handleSearch(e){
    e.preventDefault()
    retrieveData(isSearchWord)
    setIsSearchWord('')
}

function handleChange(e){
    setIsSearchWord(e.target.value);
}

function handleOptionSelect(country) {
    props.handleSelect(country)
    setIsResult([])
}

function retrieveData(word){
    fetch(`https://restcountries.com/v3.1/all`)
    .then(res => res.json())
    .then(data => data.map(place => {
        if (place.name.common.toLowerCase().includes(word.toLowerCase())) {
            setIsResult((prev => {
                return [
                    ...prev,
                    place.name.common
                ]
            }))
        } else { 
            return isResult;
        }
    }))
}

const optionsElement = isResult.map((place, index) => {
    return <OptionCard name={place} key={index} handleOptionSelect={handleOptionSelect}/>
})

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

function elementClicked(e, name){
    handleOptionSelect(name)
}

const countryElement = filteredArr.map((place, index) => {
    return <CountryCard key={index}
    data-testid={index}
        name={place.name.common} 
        capital={place.capital}
        region={place.region}
        subRegion={place.subregion}
        flag={place.flags.svg}
        map={place.maps.googleMaps}
        population={place.population}
        elementClicked={elementClicked}/>
})

function handleSort(e){
    setIsSort(e.target.value);
}

function handleFilter(e){
    setIsFilter(e.target.value);
}


    return(
        <div>
            <div className='search'>
            <form onSubmit={handleSearch}>
            <input value={isSearchWord} type='text' onChange={handleChange}></input>
            <button data-testid='searchBtn'>Search</button>
            </form>
            {optionsElement}
        </div>
            <br></br>
            <br></br>
            <br></br>

            {props.countryData.name !== '' && <CountryInfo countryData={props.countryData}/>}
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
            {countryElement}
        </div>
        </div>
        </div>
    )
}


export default Main