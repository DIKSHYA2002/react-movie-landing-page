import React from 'react'
import MovieCards from './MovieCards'
const data = [
  {
    movie_name:"suzume",
   image:"https://static.lag.vn/upload/news/22/09/29/anime-movie-suzume-no-tojimari-1_XNYU.jpg?w=800&encoder=wic&subsampling=444",
   about:"Suzume is a 2022 Japanese animated romance fantasy adventure film written and directed by Makoto Shinkai, produced by CoMix Wave Films, and distributed by Toho. The film follows 17-year-old",
   rating:"7.8⭐",
   releaseDate:"April 14,2023",
   Genre:["animation","action","adventure","fantasy"]
  },
  {
    movie_name:"Spiderman:Across the Spider-Verse",
   image:"https://i0.wp.com/aiptcomics.com/wp-content/uploads/2019/03/spider-verse-featured-miles-min.jpg?resize=1000%2C563&ssl=1",
   about:"Spider-Man: Across the Spider-Verse is a 2023 American computer-animated superhero film featuring the Marvel Comics character Miles Morales / Spider-Man ",
   rating:"9.1⭐",
   releaseDate:"April 14,2023",
   Genre:["animation","action","adventure","fantasy"]
  },
  {
    movie_name:"puss in boots",
    image:"https://i0.wp.com/www.heyuguys.com/images/2015/01/Puss-in-Boots.jpg?fit=1280%2C720",
    about:"Puss in Boots: The Last Wish is a 2022 American computer-animated adventure-comedy film produced by DreamWorks Animation and distributed by Universal Pictures. in the Shrek franchise,",
    rating:"7.8⭐",
    releaseDate:"April 14,2023",
    Genre:["animation","action","adventure","fantasy"]
  }
  
]
const MovieList = () => {
  return (
    <div className='movie-list'>
       {
        data.map((e)=>{
          return(
            <MovieCards 
            movie_name={e.movie_name}
            image={e.image} 
            about = {e.about}
            rating={e.rating}
            releaseDate={e.releaseDate}
            Genre = {e.Genre}/>
          )
        })
       }
    </div>
  )
}

export default MovieList