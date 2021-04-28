fetch("https://restcountries.eu/rest/v2/all")
    .then(response => response.json())
    .then(data => {
        displayCountries(data);
    })

const displayCountries = (countries) => {
    const countriesDiv = document.getElementById("container");
    countries.forEach(country => {
        const countryDiv = document.createElement("div");

        countryDiv.className = "country"
        const countryInfo = `
            <h3 class= "country-name">${country.name}</h3>
            <p><h4> Capital: ${country.capital}</h4></p>
            <button onClick = "displayCountryDetail('${country.name}')"> Details </button>
            `
        countryDiv.innerHTML = countryInfo;
        countriesDiv.appendChild(countryDiv);
    });

}
const displayCountryDetail = name => {
    const url = `https://restcountries.eu/rest/v2/name/${name}`
    fetch(url)
        .then(response => response.json())
        .then(data => renderCountryInfo(data[0]));

}
const renderCountryInfo = country => {
    const countryDetail = document.getElementById("country-detail");
    countryDetail.innerHTML = `
    <div id= "flag">
        <img src = "${country.flag}">
    </div>
    <div id= "information">
        <h1>${country.name}</h1>
        <p>Population: ${country.population}</p>
        <p>Area: ${country.area}</p>
    </div>
    
    
    `



    console.log(country);

}