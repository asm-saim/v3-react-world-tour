import React from 'react';

const Country = ({ country }) => {
    console.log(country)
    return (
        <div className='universal'>
            <img src={country.flags.flags.png} alt={country.flags.flags.alt} />
            <h3>Name: {country.name.common}</h3>
            <h4>Capital: {country.capital.capital[0]}</h4>
            <h4>Region: {country.region.region}</h4>
            <h4>Population: {country.population.population}</h4>
        </div>
    );
};

export default Country;