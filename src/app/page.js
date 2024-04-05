import React from 'react';
import Nav from './components/nav';
import MovieList from './components/MovieList';


export default function Home() {
  return (
    <section>
      <Nav />
      <MovieList />
    </section>
  );
}
