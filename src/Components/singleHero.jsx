import React from 'react';
import {useParams} from 'react-router-dom';
import { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios';
import '../Styles/App.css'

function SingleHero () {
    // Finding out the hero's ID and then retrieving data for the specific hero
    const {id} = useParams();

    const [url,setUrl] = useState(`${import.meta.env.VITE_SINGLE_CHARACTER}${id}${import.meta.env.VITE_API_KEY}`)
    const [item,setItem] = useState();
    useEffect( () => {
    const fetch = async() => {
      const res = await axios.get(url)
      setItem(res.data.data.results[0]);
    }
    fetch();
  },[url])

  console.log(item)
    return (
        <>
            {
                (!item) ? "" : (
                    <div className="box-content">
                        <div className="right-box">
                            <img className="character-img"src={`${item.thumbnail.path}.${item.thumbnail.extension}`}/>
                        </div>
                        <div className="left-box">
                            <h1>{item.name}</h1>
                            <h4>{item.description}</h4>
                        </div>
                    </div>
                )
            }
        </>
    )
}

export default SingleHero;