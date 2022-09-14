import React from 'react';
import SearchBar from './SearchBar';
import CountryInfo from './CountryInfo';

function Main(props){
    return(
        <div>
            <SearchBar handleSelect={props.handleSelect}/>
            <CountryInfo />
        </div>
    )
}


export default Main