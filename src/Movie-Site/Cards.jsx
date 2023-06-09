
import React from "react";
function Cards(props) {
    return(
        <div className="card">
            <img src={props.poster} alt="poster"/>
            <h1>{props.title}</h1>
            <h3>{props.type}</h3>
            <h3>{props.year}</h3>
            <h3>{props.Genre}</h3> 
        </div>
    )
}
export default Cards;