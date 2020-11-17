import React from 'react'
import './App.css';
import {Header} from '../src/Components/Header'
import { SearchBar } from '../src/Components/SearchBar';
import { ShowList } from '../src/Components/ShowList';
import {List} from '../src/resources/emojiList'

export class App extends React.Component {
  constructor(props) { 
    super (props)
    this.state = {searchText: "",List:List}
    this.textHandler = this.textHandler.bind(this)
  }

smbl () {
let  arr = [];
let mainList = []
mainList = this.state.List;
let key = "";
key = this.state.searchText;
arr = mainList.filter ((object) => { return object.keywords.indexOf(key) === -1})
console.log (arr)
return;
}

textHandler (e) { 
this.setState({searchText:e.target.value})
console.log(e.target.value)
}

  render () {
    let a = smbl ();
    if (this.smbl.length < 11) { 
      for (i= 0; i <= this.smbl.length; i++) { 
<ShowList  symbol = {a[i].symbol} title = {a[i].title} /> 
    }
    
      
    }
    return (
      <React.Fragment>
        <Header/> 
        <SearchBar changedText={this.textHandler} /> 
        <ShowList/> 
      </React.Fragment>
    )
  }
}

export default App;
