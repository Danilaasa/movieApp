import React from 'react'
import { Header } from './components/Header/Header'
import { Routes, Route } from 'react-router-dom'
import { SearchBar } from './components/SeachBar/SearchBar'
import { MoviesList } from './components/MoviesList/MoviesList'
import { MoviePage } from './components/MoviePage/MoviePage'

export const App = () => {
  return (
    

    <Routes>
      <Route path='/' element={<Header><SearchBar> <MoviesList /> </SearchBar>   </Header>} />
      <Route path='/favorities' element={<Header> <MoviesList /> </Header>} />
      <Route path='/movie/:id' element={<Header> <MoviePage /> </Header>} />
    
    </Routes>


  )
}
