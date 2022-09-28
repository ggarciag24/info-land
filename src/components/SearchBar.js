import React from 'react';
import OptionCard from './OptionCard';

function SearchBar(props){
    const [isSearchWord, setIsSearchWord] = React.useState('')
    const [isResult, setIsResult] = React.useState([])



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

    return(
        <div className='search'>
            <form onSubmit={handleSearch}>
            <input value={isSearchWord} type='text' onChange={handleChange}></input>
            <button data-testid='searchBtn'>Search</button>
            </form>
            {optionsElement}
        </div>
    )
}


export default SearchBar