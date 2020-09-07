import React from 'react';

const AddCountry = (props) => {
    const addCountry = props.addCountry
   
   const totalPopulation = addCountry.reduce((total,countryPopulation)=>total + countryPopulation.population,0)
    return (
        <div>
            <h3>Number of Added Country: {addCountry.length}</h3>
             <p>Total population: {totalPopulation}</p>
        </div>
    );
};

export default AddCountry;