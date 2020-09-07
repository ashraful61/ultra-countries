import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import Country from './components/Country/Country';
import AddCountry from './components/AddCountry/AddCountry';

function App() {
  const [countries, setCountries] = useState([])

  const [addCountry, setAddCountry] = useState([])

  useEffect(()=>{
    fetch('https://restcountries.eu/rest/v2/all')
    .then(res => res.json())
    .then(data =>{ 
      console.log('data',data)
      setCountries(data)
    })
  },[])
const handleAddCountry = (country)=>{
  console.log(country,'added')
   const addedcountry = [...addCountry, country]
    setAddCountry(addedcountry)
}
  return (
    <div className="App">
      <h1>Contry Loaded: {countries.length}</h1>
      <h3>Added Country: {addCountry.length}</h3>
      <AddCountry addCountry ={addCountry}></AddCountry>
      <ul>
        {
          countries.map(country => <Country country = {country} key={country.alpha3Code} handleAddCountry = {handleAddCountry}></Country>)
        }
      </ul>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
