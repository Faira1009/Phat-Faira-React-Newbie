import React from 'react'
import '../../assets/WeatherAppCSS/WeatherAppSearch.css'

export function WeatherAppSearch (props) {
    return (
        <input className="weatherAppSearch" onKeyDown={props.onKeyDown} type="text" placeholder="Type in a city name"/>
    )
}