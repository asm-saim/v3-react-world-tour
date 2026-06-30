import React from 'react';
import './Country.css'
import { useState } from 'react';


const Country = ({ country }) => {

    const [visited, setVisit] = useState(false)

    const handleVisit = () => {
        // rule:1
        // if (visited) {
        //     setVisit(true)
        // }
        // else {
        //     setVisit(false)
        // }

        //rule:2
        // visited ? setVisit(false) : setVisit(true)

        //rule:3
        setVisit(!visited)
    }
    // console.log(country)
    return (
        <div className='country'>
            <img src={country.flags.flags.png} alt={country.flags.flags.alt}
                className='flag' />
            <h2>Name: {country.name.common}</h2>
            <h4>Capital: {country.capital.capital[0]}</h4>
            <h4>Region: {country.region.region}</h4>
            <h4>Population: {country.population.population}</h4>
            <h4>Area: {country.area.area}
                {country.area.area > 300000 ? " (Big Country)" : " (Small Country)"}
            </h4>
            <button className='button' onClick={handleVisit}>
                {visited ? "Visited" : "Not Visited"}
            </button>
        </div>
    );
};

export default Country;