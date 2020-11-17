import React from 'react'
import './App.css';
import {Header} from '../src/Components/Header'
import { SearchBar } from '../src/Components/SearchBar';
import { ShowList } from '../src/Components/ShowList';
import {List} from '../src/resources/emojiList'

export class App extends React.Component {
  constructor(props) { 
    super (props)
    this.textHandler = this.textHandler.bind(this)
  }



textHandler (e) { 
this.setState({searchText:e.target.value})
console.log(e.target.value)
}

makeEmo (emo) {
  let i = emo.length > 10 ? 10 : emo.length
  let listOut = []
  for (let a= 0; a < i; a++) {
    listOut.push (
      < ShowList symbol={ emo[a].symbol} title= {emo[a].title}/> 
    )
  }
  return emo;
}
filterEmo(searchText,data) {
  return data.filter((val) => {
    return val.keywords.indexOf(searchText) !=-1
  })
}
  render () {
    let show = this.makeEmo(filterEmo(this.state.searchText,List))
    return (
      <React.Fragment>
        <Header/> 
        <SearchBar changedText={this.textHandler} /> 
        {show}
      </React.Fragment>
    )
  }
}

export default App;
