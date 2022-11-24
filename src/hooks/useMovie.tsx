import React, {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useState,
} from 'react';
import { api } from '../services/api';

interface MovieProviderProps {
  children: ReactNode;
}

interface IMovies {
  id: number;
  overview: string;
  vote_average: number;
  title: string;
  poster_path: string;
}

interface MovieContextData {
  movies: IMovies[];
  myMovies: IMovies[];
  loadMovies: () => Promise<void>;
  updateMyMovies: (movieId: number) => void;
}

const MovieContext = createContext<MovieContextData>({} as MovieContextData);

export function MovieProvider({ children }: MovieProviderProps) {
  const [movies, setMovies] = useState<IMovies[]>([]);
  const [myMovies, setMyMovies] = useState<IMovies[]>([]);

  const loadMovies = useCallback(async () => {
    try {
      const response = await api.get(
        `${process.env.REACT_APP_URL_TMDB_API}?api_key=${process.env.REACT_APP_TMDB_KEY}&page=1`,
      );
      setMovies(response.data.results);
    } catch (err) {
      console.log(err);
    }
  }, []);

  const updateMyMovies = useCallback(
    (movieId: number) => {
      const movie = movies.find(m => m.id === movieId);

      if (!movie) {
        return;
      }

      setMyMovies(state => [...state, movie]);
      setMovies(s => s.filter(m => m.id !== movieId));
    },
    [movies],
  );

  return (
    <MovieContext.Provider
      value={{ movies, loadMovies, myMovies, updateMyMovies }}>
      {children}
    </MovieContext.Provider>
  );
}

export function useMovie() {
  const context = useContext(MovieContext);

  return context;
}
