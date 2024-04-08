import React from 'react';
import Nav from './components/nav';
import MovieList from './components/MovieList';
import MovieSlider from './components/MovieSlider';



export default function Home() {
  return (
    <section>
      <Nav />
      <MovieList />
      <MovieSlider />
    </section>
  );
}
