import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useEffect,
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
  addMovieToMyMovies: (movieId: number) => Promise<void>;
  removeMovie: (movieId: number) => Promise<void>;
}

const MovieContext = createContext<MovieContextData>({} as MovieContextData);

export function MovieProvider({ children }: MovieProviderProps) {
  const [movies, setMovies] = useState<IMovies[]>([]);
  const [myMovies, setMyMovies] = useState<IMovies[]>([]);

  const _saveMovies = useCallback(async () => {
    try {
      const json = JSON.stringify(myMovies);

      await AsyncStorage.setItem('@my_movies', json);
    } catch (e) {
      console.log(e);
    }
  }, [myMovies]);

  const _loadStoragedMovies = useCallback(async () => {
    try {
      const json = await AsyncStorage.getItem('@my_movies');

      if (json) {
        const listOfMovies = JSON.parse(json);

        setMyMovies(listOfMovies);

        return listOfMovies;
      }
    } catch (e) {
      console.log(e);
    }
  }, []);

  const loadMovies = useCallback(async () => {
    const list = await _loadStoragedMovies();
    try {
      const response = await api.get(
        `${process.env.REACT_APP_URL_TMDB_API}?api_key=${process.env.REACT_APP_TMDB_KEY}&page=1`,
      );

      setMovies(
        response.data.results.filter((m: IMovies) => {
          return !list.map((item: IMovies) => item.id).includes(m.id);
        }),
      );
    } catch (err) {
      console.log(err);
    }
  }, [_loadStoragedMovies]);

  const addMovieToMyMovies = useCallback(
    async (movieId: number) => {
      const movie = movies.find(m => m.id === movieId);

      if (!movie) {
        return;
      }

      setMyMovies(state => [...state, movie]);
      setMovies(s => s.filter(m => m.id !== movieId));
    },
    [movies],
  );

  const removeMovie = useCallback(
    async (movieId: number) => {
      const movie = myMovies.find(m => m.id === movieId);

      if (!movie) {
        return;
      }

      setMovies(state => [...state, movie]);
      setMyMovies(s => s.filter(m => m.id !== movieId));
    },
    [myMovies],
  );

  useEffect(() => {
    _saveMovies();
  }, [_saveMovies, myMovies]);

  return (
    <MovieContext.Provider
      value={{ movies, loadMovies, myMovies, addMovieToMyMovies, removeMovie }}>
      {children}
    </MovieContext.Provider>
  );
}

export function useMovie() {
  const context = useContext(MovieContext);

  return context;
}
