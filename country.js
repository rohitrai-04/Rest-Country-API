const mainContainer = document.querySelector('.main-container')
const urlParams = new URLSearchParams(window.location.search);
const countryName = urlParams.get('name');


fetch(`https://restcountries.com/v3.1/name/${countryName}`)
    .then((res) => res.json())
    .then((data) => {
        const country = data[0];
        mainContainer.innerHTML = `
            <section class="main-container">
                <div class="country-flag">
                    <img src="${country.flags.svg}" alt="flag">
                </div>
                <div class="country-Name">
                    <h2>${country.name.common}</h2>
                    <div class="country-Details">
                        <div class="country-details-1">
                            <p><b>Native Name:</b> ${Object.values(country.name.nativeName)[0].common || "N/A"}</p>
                            <p><b>Population:</b> ${country.population.toLocaleString('en-IN')}</p>
                            <p><b>Region:</b> ${country.region}</p>
                            <p><b>Sub Region:</b> ${country.subregion || "N/A"}</p>
                            <p><b>Capital:</b> ${country.capital ? country.capital[0] : "N/A"}</p>
                        </div>
                        <div class="country-details-2">
                            <p><b>Top Level Domain:</b> ${country.tld ? country.tld.join(', ') : "N/A"}</p>
                            <p><b>Currency:</b> ${Object.values(country.currencies)[0].name} (${Object.values(country.currencies)[0].symbol})</p>
                            <p><b>Languages:</b> ${Object.values(country.languages).join(', ')}</p>
                        </div>
                    </div>
                    <div class="border-details"">
                        <p><b>Border Countries:</b></p>
                      
                        ${country.borders ? country.borders.map(border => `<div class="border-country">${border}</div>`).join('') : "No borders"}

                     
                    </div>
                </div>
            </section>
        `;
    })