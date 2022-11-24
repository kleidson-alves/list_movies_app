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
  loadMovies: () => Promise<void>;
}

const MovieContext = createContext<MovieContextData>({} as MovieContextData);

export function MovieProvider({ children }: MovieProviderProps) {
  const [movies, setMovies] = useState<IMovies[]>([]);

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

  return (
    <MovieContext.Provider value={{ movies, loadMovies }}>
      {children}
    </MovieContext.Provider>
  );
}

export function useMovie() {
  const context = useContext(MovieContext);

  return context;
}
