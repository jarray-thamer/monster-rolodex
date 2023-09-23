import React, {useState, useEffect } from 'react';
import './App.css';
import CardList from './components/card-list/card-list-component';
import SearchBox from './components/search-box/search-box-component';


const App = () => {
  
  const [searchString,setSearchString]= useState('');
  const [monsters,setMonsters]=useState([]);
  const [filterMonsters,setFilterMonsters]=useState(monsters);
useEffect(()=>{
    const filteredMonsters = monsters.filter(monster =>{
      return monster.name.toLocaleLowerCase().startsWith(searchString);
    });
    setFilterMonsters(filteredMonsters);
},[monsters,searchString])

const onSearchChange =(e)=>{
const searchStringValue = e.target.value.toLocaleLowerCase();
    setSearchString(searchStringValue);
}

useEffect(()=>{
  fetch('https://jsonplaceholder.typicode.com/users')
    .then((response)=>response.json())
    .then((users)=> setMonsters(users))
},[]);

  return(
      <div className='App'>
        <h2 className='app-title'>Monster_Rolodex</h2>  
        <SearchBox 
            onSearchChange={onSearchChange}
            className='search-box'
            placeholder='Search for a monster' 
        />
        <CardList monsters={filterMonsters} />
      </div>
    );
}
  

export default App;
