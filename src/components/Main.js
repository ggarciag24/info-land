import React from 'react';
import SearchBar from './SearchBar';
import CountryInfo from './CountryInfo';

function Main(props){
    return(
        <div>
            <SearchBar handleSelect={props.handleSelect}/>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>

            {props.countryData.name !== '' && <CountryInfo countryData={props.countryData}/>}
        </div>
    )
}


export default Main