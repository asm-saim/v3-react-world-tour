import React from 'react';
import { use } from 'react';
import Country from '../Country/Country';
import './Countries.css'
const Countries = ({ countries }) => {
    const countriesData = use(countries)
    const countriesValue = countriesData.countries
    // console.log(countriesValue)
    return (
        <div>
            <h1>React World Tour of: {countriesValue.length} Countries</h1>
            <div className='countries'>
                {
                    countriesValue.map(country =>
                        <Country key={country.name.common} country={country}></Country>)
                }
            </div>

        </div>
    );
};

export default Countries;