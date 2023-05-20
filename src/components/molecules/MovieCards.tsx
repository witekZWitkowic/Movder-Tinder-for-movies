import React, { useState, useEffect } from 'react';
import TinderCard from 'react-tinder-card'; //Using tinder-react-card gives us a bit of a TinderApp look
import { movies } from '../../data/movies'; //As the data was given earlier, the file was created with this very data (without it, we'd use the axios.get)
import Button from '../atoms/Button';
import { getMovies } from '../../requests/getRequest';

interface Movie {
  id: string;
  title: string;
  rating: number;
  imageURL: string;
  summary: string;
}

const MovieCards: React.FC = () => {
  const [allMovies, setAllMovies] = useState<Movie[]>(movies);

    //To import the movies, we'd use UseEffect hook.
  useEffect(() => {
    getMovies();
  }, []);

  //To imitate request that was sent, we'll use remove function for this app prototype 
  const removeMovie = (id: string) => {
    const newMovies = allMovies.filter((movie) => movie.id !== id);
    setAllMovies(newMovies);
  };

  return (
    <div className="">
      {allMovies.map((movie) => (
        <TinderCard
          key={movie.id}
          className={`swipe pressable sm:w-[420px] w-[300px] sm:h-[680px] h-[530px] flex flex-col items-center card-bg rounded-3xl sm:top-[140px] top-[120px] bottom-0 left-0 right-0 m-auto`}
          preventSwipe={['left', 'down', 'up']}
          onSwipe={() => removeMovie(movie.id)}
          swipeRequirementType={('position')}
          swipeThreshold={(200)}
        >
          <div className="flex flex-col items-center">
            <h2 className="text-white sm:text-[20px] text-[14px] font-bold pt-2">{movie.title}</h2>
            <span
              className={`sm:text-[16px] text-[14px] font-bold  mb-2 ${
                movie.rating >= 7 ? 'text-green-500' : movie.rating >= 5 ? 'text-orange-500' : 'text-red-500'
              }`}
            >
              ({movie.rating}/10)
            </span>
          </div>
          <img
            className="sm:w-[350px] sm:h-[500px] h-[370px] w-[250px] rounded-3xl drag-none"
            draggable={false}
            src={movie.imageURL}
            alt={movie.title}
          />
          <p className="text-[16px] text-white mt-2">{movie.summary}</p>
          <div className="w-[200px] flex justify-between">
            <div onClick={() => removeMovie(movie.id)}>
              <Button variation={1} background="bg-green-500" hover="bg-green-800"/>
            </div>
            <div onClick={() => removeMovie(movie.id)}>
              <Button variation={2} background="bg-red-500" hover="bg-red-800" />
            </div>
          </div>
        </TinderCard>
      ))}
    </div>
  );
};

export default MovieCards;