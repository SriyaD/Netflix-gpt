import { useDispatch,useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { useEffect } from "react";
import {  addOnTheAirSeries } from "../utils/Slice/moviesSlice";

const useOnTheAirSeries = () => {
    // Fetch Data from TMDB API and update store
    const dispatch = useDispatch();
  
    const onTheAirSeries = useSelector((store) => store.movies.onTheAirSeries);
    
    const getOnTheAirSeries = async () => {
      const data = await fetch(
        "https://api.themoviedb.org/3/tv/on_the_air?language=en-US&page=1",
        API_OPTIONS
      );
      const json = await data.json();
      console.log(json.results);
      dispatch(addOnTheAirSeries(json.results));
    };
  
    useEffect(() => {
      !onTheAirSeries && getOnTheAirSeries();
    }, []);
  };
  
  export default useOnTheAirSeries;