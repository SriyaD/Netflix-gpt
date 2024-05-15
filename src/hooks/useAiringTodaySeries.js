import { useDispatch,useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { useEffect } from "react";
import {  addAiringTodaySeries } from "../utils/Slice/moviesSlice";

const useAiringTodaySeries = () => {
    // Fetch Data from TMDB API and update store
    const dispatch = useDispatch();
  
    const airingTodaySeries = useSelector((store) => store.movies.airingTodaySeries);
    
    const getAiringTodaySeries = async () => {
      const data = await fetch(
        "https://api.themoviedb.org/3/tv/airing_today?language=en-US&page=1",
        API_OPTIONS
      );
      const json = await data.json();
      console.log(json.results);
      dispatch(addAiringTodaySeries(json.results));
    };
  
    useEffect(() => {
      !airingTodaySeries && getAiringTodaySeries();
    }, []);
  };
  
  export default useAiringTodaySeries;