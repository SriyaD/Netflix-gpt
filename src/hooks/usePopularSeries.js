import { useDispatch,useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { useEffect } from "react";
import { addPopularSeries } from "../utils/Slice/moviesSlice";

const usePopularSeries = () => {
    // Fetch Data from TMDB API and update store
    const dispatch = useDispatch();
  
    const popularSeries = useSelector((store) => store.movies.popularSeries);
    
    const getPopularSeries = async () => {
      const data = await fetch(
        "https://api.themoviedb.org/3/tv/popular?language=en-US&page=1",
        API_OPTIONS
      );
      const json = await data.json();
      console.log(json.results);
      dispatch(addPopularSeries(json.results));
    };
  
    useEffect(() => {
      !popularSeries && getPopularSeries();
    }, []);
  };
  
  export default usePopularSeries;