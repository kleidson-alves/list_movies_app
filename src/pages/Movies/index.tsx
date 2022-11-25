import React from 'react';
import { ScrollView } from 'react-native';
import MovieCard from '../../components/MovieCard';
import { useMovie } from '../../hooks/useMovie';

const Movies: React.FC = () => {
  const { myMovies, removeMovie } = useMovie();

  return (
    <ScrollView>
      {myMovies &&
        myMovies.map(movie => (
          <MovieCard
            key={movie.id}
            handle={() => removeMovie(movie.id)}
            img={movie.poster_path}
            title={movie.title}
            description={movie.overview}
            rating={movie.vote_average}
            popularity={movie.popularity}
          />
        ))}
    </ScrollView>
  );
};

export default Movies;
