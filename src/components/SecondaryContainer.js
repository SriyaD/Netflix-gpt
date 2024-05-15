import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);
    // console.log(movies.popularMovies);
  return (
    movies.nowPlayingMovies && (
      <div className="bg-black ">
        <div className=" mt-0 md:-mt-52 pl-4 md:pl-12 relative z-20 mx-4">
          <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
          {/* <MovieList title={"Trending"} movies={movies.nowPlayingMovies} /> */}
          <MovieList title={"Popular"} movies={movies.popularMovies} />
          <MovieList title={"Top Rated Movies"} movies={movies.topRatedMovies} />
          <MovieList title={"Upcoming"} movies={movies.upcomingMovies} />
          <MovieList title={"Airing Today Series"} movies={movies.airingTodaySeries} />
          <MovieList title={"On The Air Series"} movies={movies.onTheAirSeries} />
          <MovieList title={"Popular Series"} movies={movies.popularSeries} />
          <MovieList title={"Top Rated Series"} movies={movies.topRatedSeries} />




        </div>
      </div>
    )
  );
};
export default SecondaryContainer;
