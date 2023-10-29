import React from 'react'
import {useNavigate} from 'react-router-dom'

function CharacterCard(props) {
  let navigate=useNavigate();
    return (
      <>
      {
        /* .map is acting as a ForEach. Creates a grid of heroes */
        (props.data) ? (
        props.data.map((item,index) => {
          return (
            <div className="character" key={item.id} 
            onClick={()=>navigate(`/Heroes/${item.id}`)}>
              <img className="character-img"src={`${item.thumbnail.path}.${item.thumbnail.extension}`}/>
              <div className="title">
                <h3>{`${item.name}`}</h3>
              </div>
          </div>
          )
        })) : ""
      }
      </>
    )
  }
  
  export default CharacterCard;