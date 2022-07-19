import Information from './Information'
import Button from './Button'

const Display = ({ keyword, countries }) => {
    let filteredCountries = []
    if (countries) {
        console.log(countries[0].name.official);
        filteredCountries = countries.filter(country => country.name.official.toLowerCase().includes(keyword.toLowerCase()))
    }

    const displayMatches = () => {
        if (filteredCountries.length == 0) {
            return ""
        }

        if (filteredCountries.length == 1) {
            return (<Information country={filteredCountries[0]}></Information>)
        }

        if (filteredCountries.length > 10) {
            return "Too many matches, specifiy another filter"
        } else {
            console.log(filteredCountries.map(country => country.name))
            return filteredCountries.map(country => {
                return (
                    <div>
                        {country.name.common}
                        <Button key={country.name.common} country={country}></Button>
                    </div>
                )
            })
        }
    }

    return (
        <div>
            {displayMatches()}
        </div>
    )
}

export default Display