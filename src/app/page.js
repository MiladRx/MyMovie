import React from 'react';
import Nav from './components/nav';
import MovieList from './components/MovieList';
import MovieSlider from './components/MovieSlider';
import BottomNav from './components/BottomNav';





export default function Home() {
  return (
    <section>
      <Nav />
      <MovieList />
      <MovieSlider />
     <BottomNav className="" />
    </section>
  );
}
