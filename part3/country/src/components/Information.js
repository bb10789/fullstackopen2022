import Weather from './Weather'

const Information = ({country}) => {
    return (
        <div>
            <h1><b>{country.name.common}</b></h1>
            <p>capital {country.capital[0]}</p>
            <p>area {country.area}</p>
            <b>languages: </b>
            <ul>
                {Object.keys(country.languages).map((k) => <li key={k}>{country.languages[k]}</li>)}
            </ul>
            <img src={country.flags.png}></img>
            <Weather country={country}></Weather>
        </div>
    )

}

export default Information