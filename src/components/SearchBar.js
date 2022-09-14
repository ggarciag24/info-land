import React, { useState } from 'react';

function SearchBar(){
    const [isSearchWord, setIsSearchWord] = React.useState('')
    const [isResult, setIsResult] = React.useState([])


    function handleSearch(e){
        e.preventDefault()
        setIsSearchWord(e.target[0].value);
        
        retrieveData(e.target[0].value)
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

    console.log(isResult);

    return(
        <div className='search'>
            <form onSubmit={handleSearch}>
            <input type='text'></input>
            <button>Search</button>
            </form>
        </div>
    )
}


export default SearchBar