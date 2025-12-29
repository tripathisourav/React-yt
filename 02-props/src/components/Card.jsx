import React from 'react'

const Card = (props) => {
    console.log(props.image);

    return (
        <div className="card">

            <img src={props.image} alt="" />
            <h1>{props.name}</h1>
            <p>{props.info}</p>
            <button>View Profile</button>
        </div>
    )
}

export default Card
