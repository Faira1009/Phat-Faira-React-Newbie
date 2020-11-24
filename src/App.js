import React from 'react'
import {WeatherAppTitle} from '../src/Components/WeatherApp/WeatherAppTitle'
import {WeatherAppSearch} from '../src/Components/WeatherApp/WeatherAppSearch'
import {WeatherAppShow} from '../src/Components/WeatherApp/WeatherAppShow'
import '../src/assets/WeatherAppCSS/WeatherApp.css'
const apiKey = "4d8fb5b93d4af21d66a2948710284366";
function apiHandle () {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${inputVal}&appid=${apiKey}&units=metric`;
    fetch (url)
    .then (res => res.json())
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {weatherAppSearchText : ""}
    this.weatherAppSearchHandle = this.weatherAppSearchHandle.bind(this)
    
  }
  weatherAppSearchHandle (e) {
    this.setState({weatherAppSearchText:e.target.value})
    console.log(this.state.weatherAppSearchText)
  }
  

  render () {
    return (
      < React.Fragment>
      <WeatherAppTitle/>
      <WeatherAppSearch onChange={this.weatherAppSearchHandle} />
      <div className="weatherAppShowMainDiv1">
      <WeatherAppShow/>
      </div>
      
      </ React.Fragment> 
    )
      
  }
  
}
export default App;