import React from 'react'
import Navbar from './Navbar'
import MovieList from './MovieList'
import './Movie.css';
import ApiLists from './ApiLists';
const Homepage = () => {
  return (
    <>
    <Navbar/>
    <MovieList/>
    <ApiLists/>
    </>
  )
}

export default Homepage