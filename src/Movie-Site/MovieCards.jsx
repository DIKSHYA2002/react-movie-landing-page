import React from 'react'

const MovieCards = ({movie_name,image,about,rating,releaseDate,Genre}) => {
  return (
    <div className='moviecard'>
       <div className="movie-image">
        <img src={image} alt="" />
      </div>
      <div className="movie-detail">
      <div className="movie-name">
      {movie_name}
      </div>
     
      <div className="movie-about">
      {about}
      </div>
      <div className="movie-rating">
        {rating}
      </div>
      <div className="date">
        {releaseDate}
      </div>
      <div className="genre">
       {Genre}
      </div>
      </div>
     
    </div>
  )
}

export default MovieCards