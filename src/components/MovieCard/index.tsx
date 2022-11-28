import React, { useCallback, useState } from 'react';
import { Image, Text, TouchableWithoutFeedback, View } from 'react-native';
import { useMovie } from '../../hooks/useMovie';
import { styles } from './styles';

interface MovieCardProps {
  title: string;
  description: string;
  img: string;
  rating: number;
  popularity: number;
  handle?: () => void;
}

const MovieCard: React.FC<MovieCardProps> = ({
  title,
  img,
  rating,
  description,
  popularity,
  handle = () => {},
}) => {
  const [showDetails, setShowDetails] = useState(false);
  const { updateMovieRating } = useMovie();

  const handleShowDetails = useCallback(async () => {
    if (!showDetails) {
      await updateMovieRating(title);

      setShowDetails(true);
    }
  }, [showDetails, title, updateMovieRating]);

  return (
    <TouchableWithoutFeedback onLongPress={handle}>
      <View style={styles.container}>
        <Image
          style={styles.img}
          source={{
            uri: `https://image.tmdb.org/t/p/original/${img}`,
          }}
        />
        <View style={styles.content}>
          <View style={styles.info}>
            <Text style={styles.title}>{title}</Text>
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
    </TouchableWithoutFeedback>
  );
};

export default MovieCard;
