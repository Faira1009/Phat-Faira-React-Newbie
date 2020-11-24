import React from 'react'
import '../../assets/WeatherAppCSS/WeatherAppShow.css'

export function WeatherAppShow (props) {
    return (
        <div className= "weatherAppShowMainDiv">
            <div className="cityName">Tên thành phố</div>
            <div className="temperature">Nhiệt độ</div>
            <div className="icon">Icon</div>
            <div className="weatherState">Trạng thái</div>
        </div>
    )
}