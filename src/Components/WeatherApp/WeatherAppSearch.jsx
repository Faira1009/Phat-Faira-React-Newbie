import React from 'react'
import '../../assets/WeatherAppCSS/WeatherAppSearch.css'

export function WeatherAppSearch (props) {
    return (
        <input className="weatherAppSearch" onChange={props.onChange} type="text" placeholder="Type in a city name"/>
    )
}