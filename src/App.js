import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import React, { useState } from 'react';
import Header from './components/Header';
import SpellList from './components/SpellList';

function App() {
  const [data, setData] =useState('All')

  const filterList = (listType) => {
    setData(listType)
  }

  return (
    <div className="App">
      <Header filterList={filterList}/>
      <SpellList listType={data}/>
    </div>
  );
}

export default App;
