import React, { useCallback, useState } from 'react';
import {
    Image,
    Text,
    TouchableOpacity,
    TouchableWithoutFeedback,
    View,
} from 'react-native';
import { useMovie } from '../../hooks/useMovie';
import { styles } from './styles';

interface MovieCardProps {
    title: string;
    description: string;
    img: string;
    rating: number;
    popularity: number;
    id: number;
    mode: 'remove' | 'add';
}

const MovieCard: React.FC<MovieCardProps> = ({
    title,
    img,
    rating,
    description,
    popularity,
    id,
    mode,
}) => {
    const [showDetails, setShowDetails] = useState(false);
    const { updateMovieRating, addMovieToMyMovies, removeMovie } = useMovie();

    const handleButtonPress = useCallback(async () => {
        if (mode === 'add') {
            await addMovieToMyMovies(id);
        } else {
            await removeMovie(id);
        }
    }, [addMovieToMyMovies, id, mode, removeMovie]);

    const handleShowDetails = useCallback(async () => {
        if (!showDetails) {
            await updateMovieRating(title);

            setShowDetails(true);
        }
    }, [showDetails, title, updateMovieRating]);

    return (
        <View style={styles.container}>
            <Image
                style={styles.img}
                source={{
                    uri: `https://image.tmdb.org/t/p/original/${img}`,
                }}
            />
            <View style={styles.content}>
                <View style={styles.info}>
                    <View style={styles.cardHeader}>
                        <Text style={styles.title}>{title}</Text>
                        <TouchableOpacity onPress={handleButtonPress}>
                            {mode === 'add' ? (
                                <Text style={styles.btnTxt}>adicionar</Text>
                            ) : (
                                <Text style={styles.btnTxt}>remover</Text>
                            )}
                        </TouchableOpacity>
                    </View>
                    <Text numberOfLines={3} ellipsizeMode={'clip'}>
                        {description}
                    </Text>
                </View>
                <TouchableWithoutFeedback onPress={handleShowDetails}>
                    {showDetails ? (
                        <View style={styles.details}>
                            <Text>Nota: {rating}</Text>
                            <Text>Popularidade: {popularity}</Text>
                        </View>
                    ) : (
                        <View style={styles.details}>
                            <Text>Mostrar detalhes</Text>
                        </View>
                    )}
                </TouchableWithoutFeedback>
            </View>
        </View>
    );
};

export default MovieCard;
