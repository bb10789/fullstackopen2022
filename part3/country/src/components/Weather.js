import axios from 'axios'
import { useEffect, useState } from 'react'

const api_key = process.env.REACT_APP_API_KEY

const Weather = ({country}) => {
    const request = "https://api.openweathermap.org/data/2.5/weather?lat=" 
    + country.latlng[0] + "&lon=" + country.latlng[1] + "&appid=" + api_key

    const iconRequest = " http://openweathermap.org/img/wn/"

    const [isBusy, setIsBusy] = useState(true)
    const [weatherData, setWeatherData] = useState()

    useEffect(() => {
        axios.get(request)
        .then(response => {
            console.log('Temp promise fulfilled')
            setIsBusy(false)
            setWeatherData(response.data)
        })
    }, [])



    if (isBusy) {
        return (
            <div>Loading...</div>
        )
    } else {
        return (
            <div>
                <h1><b>Weather in {country.name.common}</b></h1>
                <p>temperature {(weatherData.main.temp - 273.15).toFixed(2)} Celsius</p>
                <img src={iconRequest + weatherData.weather[0].icon + "@2x.png"}></img>
                <p>wind  {weatherData.wind.speed} m/s</p>
            </div>
        )
    }
}

export default Weather