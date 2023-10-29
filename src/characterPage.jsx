import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import List from './Components/List'
import CharacterCard from './Components/CharacterCard'
import axios from "axios"
import { useSearchParams, useNavigate } from 'react-router-dom';

function CharacterPage() {
  // Set up navigation to see more heroes using an offset
  const navigate=useNavigate();

  // Use query  parameters to identify the current offset
  const [searchParams, setSearchParams] = useSearchParams();
  let offset = searchParams.get('offset');
 
  // Get data for each hero
  const [url,setUrl] = useState(`${import.meta.env.VITE_CHARACTERS}${import.meta.env.VITE_API_KEY}&offset=${offset}`)
  const [item,setItem] = useState();
  useEffect( () => {
    const fetch = async() => {
      const res = await axios.get(url)
      setItem(res.data.data.results);
    }
    fetch();
  },[url])
  
  // If there is no offest, then the offset is set to 0
  if (!!!offset)
    offset = 0;

  return (
    <>
    <div className="header">
      <div className="search-bar">
        <input type="search" placeholder='Hero Search' className='search'/>
      </div>
    </div>

    {/* Display a grid of heroes (20 total) */}
    <div className="content">
      {
        (!item || item == undefined || item.length <= 0)?<p>Not Found</p>:<CharacterCard data={item}/>
      }

    </div>
    {/* Determine whether previous or next buttons should be shown */}
    {
      (offset > 0) ?
      <div onClick={()=>{
          navigate(`/Heroes/?offset=${parseInt(offset)-20}`)
          navigate(0)}}>
        Previous
      </div> : ""
    }
    {
    (!item || item == undefined || item.length <= 0) ? "" :
    <div onClick={()=>{
        navigate(`/Heroes/?offset=${parseInt(offset)+20}`)
        navigate(0)}}>
      Next
    </div>
    }
    </>
  )
}

export default CharacterPage
