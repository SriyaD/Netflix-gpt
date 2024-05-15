import React, { useEffect } from "react";
import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";
import useAiringTodaySeries from "../hooks/useAiringTodaySeries";
import useOnTheAirSeries from "../hooks/useOnTheAirSeries";
import usePopularSeries from "../hooks/usePopularSeries";
import useTopRatedSeies from "../hooks/useTopRatedSeries";

const Browse = () => {
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();
  useAiringTodaySeries();
  useOnTheAirSeries();
  usePopularSeries();
  useTopRatedSeies();
  return (
    <div>
      <Header />
      
      <MainContainer />
      <SecondaryContainer />
    </div>
  );
};

export default Browse;
