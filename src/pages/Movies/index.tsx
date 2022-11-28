import React from 'react';
import { ScrollView } from 'react-native';
import MovieCard from '../../components/MovieCard';
import { useMovie } from '../../hooks/useMovie';

const Movies: React.FC = () => {
  const { myMovies } = useMovie();

  return (
    <ScrollView>
      {myMovies &&
        myMovies.map(movie => (
          <MovieCard
            mode="remove"
            key={movie.id}
            id={movie.id}
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

export default Movies;
