import React from 'react';
import { ScrollView, Text, View } from 'react-native';
import FeIcon from 'react-native-vector-icons/Feather';

import MovieCard from '../../components/MovieCard';
import { useMovie } from '../../hooks/useMovie';
import { styles } from './styles';

const Movies: React.FC = () => {
    const { myMovies } = useMovie();

    return (
        <>
            {myMovies.length === 0 ? (
                <View style={styles.container}>
                    <View style={styles.content}>
                        <FeIcon name="file" size={60} style={styles.img} />
                        <Text style={styles.text}>
                            Sua lista ainda está vazia
                        </Text>
                    </View>
                </View>
            ) : (
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
            )}
        </>
    );
};

export default Movies;
