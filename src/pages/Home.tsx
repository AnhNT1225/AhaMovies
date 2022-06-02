import React from "react";
import { Link } from "react-router-dom";
import { category, movieType } from "../api/tmdbApi";
import HeroSlide from "../components/hero-slide/HeroSlide";
import MovieList from "../components/movie-list/MovieList";
import { OutlineButton } from "../components/UI/button/Button";

const Home = () => {
  return (
    <>
      <HeroSlide />
      <div className="container">
        <div className="section mb-3">
          <div className="section__header mb-2">
            <h2>Trending Movies</h2>
            <Link to='/movie'>
              <OutlineButton className="small">View more</OutlineButton>
            </Link>
          </div>
          <MovieList category={category.movie} type={movieType.popular}/>
        </div>
      </div>
    </>
  );
};

export default Home;
