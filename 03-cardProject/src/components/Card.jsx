import React from 'react'
import {Bookmark} from 'lucide-react'


const Card = (props) => {
  console.log(props);
  
  return (
    <div>
      <div className="card" id = {props.index}>
        <div className="top">
          <img src={props.lg} alt="" />
          <button>Save <Bookmark size = {12} /> </button>
        </div>

        <div className="center">
          <h3>{props.cmp} <span>{props.tm} Days ago</span> </h3>
          <h2>{props.rl}</h2>
          <div className='hashtags'>
            <h4>{props.tg1}</h4>
            <h4>{props.tg2}</h4>
          </div>
        </div>

        <div className="bottom">
          <div>
            <h2>${props.inc}/hr</h2>
            <h6>{props.loc}</h6>
          </div>
          <button>Apply Now</button>
        </div>
      </div>
    </div>
  )
}

export default Card
