import React from 'react';
import { use } from 'react';
import Country from '../Country/Country';
import './Countries.css'
import { useState } from 'react';

const Countries = ({ countries }) => {
    const countriesData = use(countries)
    const countriesValue = countriesData.countries
    // console.log(countriesValue)

    //declare state:
    const [visitedCountries, setVisitedCountries] = useState([])
    //declare event handler:
    const handleVisitedCountry = (country) => {
        console.log("I am from countries component!", country)
        const newVisitedCountries = [...visitedCountries, country]
        setVisitedCountries(newVisitedCountries)
    }

    //declare State for flag:
    const [visitedFlag, setVisitedFlag] = useState([])

    const handleVisitedFlag = (country) => {
        console.log("Hello, form flag", country)
        const totalVisited = [...visitedFlag, country]
        setVisitedFlag(totalVisited)
    }

    return (
        <div>
            <h1>React World Tour of: {countriesValue.length} Countries</h1>
            <h3>Visited Countries:{visitedCountries.length} </h3>
            <ol>
                {
                    visitedCountries.map(country => <li key={country.cca3.cca3}>
                        {country.name.common}</li>)
                }
            </ol>

            {/* flags */}
            <h3>Added Flags: {visitedFlag.length}</h3>
            <div className='flag-mini img'>
                {
                    visitedFlag.map(visitFlag =><img src={visitFlag.flags.flags.png} alt="" />)
                }
            </div>
            <div className='countries'>
                {
                    countriesValue.map(country =>
                        <Country key={country.name.common}
                            country={country}
                            handleVisitedCountry={handleVisitedCountry}
                            handleVisitedFlag={handleVisitedFlag}
                        ></Country>)
                }
            </div>

        </div>
    );
};

export default Countries;