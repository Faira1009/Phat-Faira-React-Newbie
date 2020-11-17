import React from 'react'
import './App.css';
import {Header} from '../src/Components/Header'
import { SearchBar } from '../src/Components/SearchBar';
import { ShowList } from '../src/Components/ShowList';

import {List} from '../src/resources/emojiList'
function App() {
console.log (List)
let sList = [];
for (let i = 0; i <10; i++) {
  sList.push(
    <ShowList symbol={List[i].symbol} title={List[i].title}/> 
  )
}
  return (
    <React.Fragment> 
    <Header/>
    <SearchBar/>
    {sList}
    </React.Fragment>  
  );
}

export default App;
