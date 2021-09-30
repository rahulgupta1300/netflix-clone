import axios from "axios";
import React, { useEffect, useState } from "react";
import { imageURL } from "./url";
import './Banner.css'


const Banner = ({ fetchUrl }) => 
{
  const [movie, setMovie] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1) 
        ]
      );
      return request;
    }
    fetchData();
  }, [fetchUrl]);

    function truncate(str, n){
      return str?.length > n ? str.substr(0, n-1)+"...":str;
  }
  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url(${imageURL}/${movie?.backdrop_path})`,
        backgroundPosition: "center center",
      }}
    >
      <div className="banner_contents">
        <h1 className="banner_title">
            {movie.title || movie.name || movie.original_name}
        </h1>
        <div className="banner_buttons">
            <button className="banner_button">Play</button>
            <button className="banner_button">My List</button>
        </div>
        <h1 className="banner_description">
            {truncate(movie?.overview,150)}
        </h1>
      </div>
      <div className="banner--fadeBottom" />
    </header>
  );
};

export default Banner;
