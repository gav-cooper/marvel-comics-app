import React from 'react';
import {useParams} from 'react-router-dom';
import { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios';
import '../Styles/App.css'
import SeriesList from './SeriesList'

function SingleHero () {
    // Finding out the hero's ID and then retrieving data for the specific hero
    const {id} = useParams();

    const [url,setUrl] = useState(`${import.meta.env.VITE_SINGLE_CHARACTER}${id}${import.meta.env.VITE_API_KEY}`)
    const [comicsUrl,setComicsUrl] = useState(`${import.meta.env.VITE_CHARACTERS}/${id}/series${import.meta.env.VITE_API_KEY}&orderBy=startYear`)
    const [item,setItem] = useState();
    const [series,setSeries] = useState();
    const [search,setSearch]=useState("");

    // Get Hero details
    useEffect( () => {
        const fetch = async() => {
            const res = await axios.get(url)
            setItem(res.data.data.results[0]);
            const res_1 = await axios.get(comicsUrl)
            setSeries(res_1.data.data.results);
        }
        fetch();
  },[comicsUrl]);
  
  const searchSeries = (param) =>{
    if (param)
      setComicsUrl(`${import.meta.env.VITE_CHARACTERS}/${id}/series${import.meta.env.VITE_API_KEY}&orderBy=startYear&titleStartsWith=${search}`)
    else
      setComicsUrl(`${import.meta.env.VITE_CHARACTERS}/${id}/series${import.meta.env.VITE_API_KEY}&orderBy=startYear`)
}

  console.log(series);
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
            <div className="search-bar">
                <input type="search" placeholder='Series Search' className='search'
                 onChange={e=>setSearch(e.target.value)}
                 onKeyUp={e => searchSeries(e.target.value)}/>
            </div>
            {
                (!series) ? "" : <div className="series-content"><SeriesList id = {id} data={series}/></div>
            }
        </>
        
    )
}

export default SingleHero;