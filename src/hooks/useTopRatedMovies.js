import { useDispatch,useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { useEffect } from "react";
import {  addTopRatedMovies } from "../utils/Slice/moviesSlice";

const useTopRatedMovies = () => {
    // Fetch Data from TMDB API and update store
    const dispatch = useDispatch();
  
    const topRatedMovies = useSelector((store) => store.movies.topRatedMovies);
    
    const getTopRatedMovies = async () => {
      const data = await fetch(
        "https://api.themoviedb.org/3/movie/top_rated?&page=1&with_original_language=hi|kn|ml|ta|te",
        API_OPTIONS
      );
      const json = await data.json();
      console.log(json.results);
      dispatch(addTopRatedMovies(json.results));
    };
  
    useEffect(() => {
      !topRatedMovies && getTopRatedMovies();
    }, []);
  };
  
  export default useTopRatedMovies;