import React from 'react'
import {useNavigate} from 'react-router-dom'

function ComicsItem(props) {
    // Allow the user to view a single series when clicked
    const navigate = useNavigate();
    const {title, thumbnail, id} = props.comic;
  
    return (
      <>
        <div className="comic" onClick={()=>navigate(`/Comics/${id}`)}>
          <div className="comic-cover-container">
            <img className="comic-cover" src={`${thumbnail.path}.${thumbnail.extension}`}></img>
          </div>
          <div className="comic-data-container">
            <h1>{title}</h1>
          </div>
        </div>
      </>
    )
  }
  
  export default ComicsItem;
  