import React from 'react'
import {WeatherAppTitle} from '../src/Components/WeatherApp/WeatherAppTitle'
import {WeatherAppSearch} from '../src/Components/WeatherApp/WeatherAppSearch'
import {WeatherAppShow} from '../src/Components/WeatherApp/WeatherAppShow'
import '../src/assets/WeatherAppCSS/WeatherApp.css'
const apiKey = "4d8fb5b93d4af21d66a2948710284366";


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {cities: []}
    this.weatherAppSearchHandle = this.weatherAppSearchHandle.bind(this)
    this.apiDataFetch = this.apiDataFetch.bind(this)
     
  }  
   
  apiDataFetch (cityName) {
    return fetch (`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`)
    .then (res => res.json() )
  }


  weatherAppSearchHandle (e) {
    console.log (e.target.value)
   console.log(e.key)
    if (e.key === 'Enter') {
      this.apiDataFetch (e.target.value)
      .then (data => {
        console.log(data) 
        let cities = this.state.cities
        cities.push ({
          city: data.name,
          tempo:data.main.temp,
          ico: "",
          weatherStat:data.weather[0].description.toUpperCase(),
        })
        this.setState({cities:cities})
      })   
    }    
  }

  

  render () {
    return (
      < React.Fragment>
      <WeatherAppTitle/>
      <WeatherAppSearch onKeyDown={this.weatherAppSearchHandle} />
      <div className="weatherAppShowMainDiv1">
      {this.state.cities.map((city,ind) => <WeatherAppShow {...city} key={ind} />) }
      </div>
      
      </ React.Fragment> 
    )
      
  }
  
}
export default App;
