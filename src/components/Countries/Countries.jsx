import React from 'react';
import { use } from 'react';
import Country from '../Country/Country';

const Countries = ({ countries }) => {
    const countriesData = use(countries)
    const countriesValue = countriesData.countries
    // console.log(countriesValue)
    return (
        <div>
            <h1>React World Tour of: {countriesValue.length}</h1>
            {
                countriesValue.map(country => <Country key={country.name.common} country={country}></Country>)
            }
        </div>
    );
};

export default Countries;