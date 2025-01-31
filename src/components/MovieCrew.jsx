/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import MovieCrewCard from "./MovieCrewCard";

const MovieCrew = ({ id, apiKey }) => {
  const [MovieCrew, setMovieCrew] = useState([]);

  useEffect(() => {
    const fetchMovie = async () => {
      await fetch(
        `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${apiKey}&language=en-US`
      )
        .then((response) => response.json())
        .then((data) => setMovieCrew([data.crew]));
    };

    fetchMovie();
  }, [id, apiKey]);
  // console.log(MovieCrew);

  return (
    <div className="md:px-10">
      <h1 className="text-neutral-300 text-3xl md:text-4xl pt-4 ml-8 md:ml-10">
        Crew
      </h1>

      <MovieCrewCard crew={MovieCrew[0]} />
      
    </div>
  );
};

export default MovieCrew;
