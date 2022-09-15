import React from 'react';
import './index.css';
import Header from './components/Header';
import Main from './components/Main';
import About from './components/About';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'



function App() {

  const [isCountryData, setIsCountryData] = React.useState({
    name: '',
    capital: '',
    region: '',
    subRegion: '',
    flag: '',
    map: '',
    population: '',
    // language: ''
  })

  function handleSelect(e){
    const country = e.target.innerText

    fetch(`https://restcountries.com/v3.1/name/${country}`)
    .then(res => res.json())
    .then(data => 
      setIsCountryData({
      name: data[0].name.common,
      capital: data[0].capital[0],
      region: data[0].region,
      subRegion: data[0].subregion,
      flag: data[0].flags.svg,
      map: data[0].maps.googleMaps,
      population: data[0].population
    // language: data[0].languages
    })
    )
  }
  console.log(isCountryData)


  return (
    <Router>
    <div className="App">
      <Header />
      <Routes>
      <Route path='/' element={<Main handleSelect={handleSelect} countryData={isCountryData} />}>
      </Route>
      <Route path='/about' element={<About />}>
      </Route>
      </Routes>

    </div>
    </Router>
  );
}

export default App;
