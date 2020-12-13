import Header from './components/Header'
import {useState,useEffect} from 'react'
import './App.css';
import axios from 'axios'
import Character from './components/Character'
import Search from './components/Search';

function App() {
const [item,setitem] =useState([])
const [loading,setloading] =useState(true)
const[query,setquery] =useState('')
const getquery=(search)=>{
    setquery(search)
}

useEffect(()=>{
  const Item = async()=>{
    const result =await axios(
      `https://www.breakingbadapi.com/api/characters?name=${query}
      `)
    console.log(result.data)
    setitem(result.data)
    setloading(false)
  }
  Item()
},[query])

  return (
    <div className="container">
       
      <Header/>
      <Search getquery={getquery} />
      <Character item={item}  loading={loading}/>
    </div>
  );
}

export default App;
