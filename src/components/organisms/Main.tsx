import React from 'react';
import MovieCards from '../molecules/MovieCards';

const Main: React.FC = () => {
  return (
    <section className="h-[100vh] bg-hero-section">
      <div className="flex flex-col items-center place-content-center">
        <h1 className="py-2 sm:text-[100px] text-[80px] font-bold hero-text">Movder</h1>
        <p className="sm:text-[30px] text-[20px] text-zinc-100 mt-[-30px] tracking-widest font-semibold">
          Find your perfect match!
        </p>
      </div>
      <MovieCards />
    </section>
  );
};

export default Main;
