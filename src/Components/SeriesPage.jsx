import { useState, useEffect } from 'react'
import { useParams, useSearchParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import ComicsList from './ComicsList'

function SeriesPage(props) {
    const {heroID, seriesID} = useParams();
    const [searchParams, setSearchParams] = useSearchParams();

    const [seriesUrl, setSeriesUrl] = useState(`${import.meta.env.VITE_SERIES}/${seriesID}${import.meta.env.VITE_API_KEY}`);
    const [comicsUrl, setComicsUrl] = useState(`${import.meta.env.VITE_COMICS}${import.meta.env.VITE_API_KEY}&characters=${heroID}&series=${seriesID}&orderBy=onsaleDate`);
    const [item, setItem] = useState();
    const [series,setSeries]= useState();

    useEffect( () => {
      const fetch = async() => {
        const res = await axios.get(comicsUrl);
        setItem(res.data.data.results);
        const res_1 = await axios.get(seriesUrl);
        setSeries(res_1.data.data.results[0])
      }
      fetch();
    },[comicsUrl])

    return (
      <>
        {
          (!series) ? "" : 
          <div className="series-container">
            <h1>{`${series.title}`}</h1>
            <div className="series-description">{`${series.description}`}</div>
          </div>
        }
        {
          (!item) ? "" :
          <div className="series-content"><ComicsList data={item}/></div>
        }
      </>
    )
  }
  
  export default SeriesPage;