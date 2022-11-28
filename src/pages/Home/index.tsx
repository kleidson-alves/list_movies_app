import React, { useEffect } from 'react';
import { ScrollView } from 'react-native';

import MovieCard from '../../components/MovieCard';
import { useMovie } from '../../hooks/useMovie';

const Home: React.FC = () => {
  const { loadMovies, movies, addMovieToMyMovies } = useMovie();

  useEffect(() => {
    loadMovies();
  }, [loadMovies]);

  return (
    <ScrollView>
      {movies &&
        movies.map(movie => (
          <MovieCard
            key={movie.id}
            handle={() => addMovieToMyMovies(movie.id)}
            img={movie.poster_path}
            title={movie.title}
            description={movie.overview}
            rating={movie.rating}
            popularity={movie.popularity}
          />
        ))}
    </ScrollView>
  );
};

export default Home;
