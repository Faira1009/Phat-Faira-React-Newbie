import React from "react";
import { SearchBar } from "./Components/SearchBar";
import { ShowList } from "./Components/ShowList";
import { Title } from "./Components/Title";
import "../src/assets/mainApp.css";

const apiKey = "4d8fb5b93d4af21d66a2948710284366";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { showCities: [] };
    this.enterHandler = this.enterHandler.bind(this);
    this.apiDataFetch = this.apiDataFetch.bind(this);
  }
  
  apiDataFetch(nameCity) {
    return fetch(`https://api.openweathermap.org/data/2.5/weather?q=${nameCity}&appid=${apiKey}&units=metric`)
    .then((res) => {res.json()});
  }

  enterHandler(e) {
   
    console.log(e.target.value);
    console.log(e.key);
    if (e.key === 'Enter') {

      this.apiDataFetch(e.target.value).then((data) => {
        let showc = this.state.showCities
        showc.push (data)
        console.log(showc);
      });
    }
  }
  render() {
    return (
      <React.Fragment>
        <Title />
        <SearchBar onKeyDown={this.enterHandler} />
        <div className="appShowList">
          <ShowList />
        </div>
      </React.Fragment>
    );
  }
}
export default App;
