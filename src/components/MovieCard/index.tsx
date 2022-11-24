import React from 'react';
import { Image, Text, TouchableWithoutFeedback, View } from 'react-native';
import { styles } from './styles';

interface MovieCardProps {
  title: string;
  description: string;
  img: string;
  rating: number;
  handle?: () => void;
}

const MovieCard: React.FC<MovieCardProps> = ({
  title,
  img,
  rating,
  description,
  handle = () => {},
}) => {
  return (
    <TouchableWithoutFeedback onLongPress={handle}>
      <View style={styles.container}>
        <Image
          style={styles.img}
          source={{
            uri: `https://image.tmdb.org/t/p/original/${img}`,
          }}
        />
        <View style={styles.info}>
          <Text style={styles.title}>{title}</Text>
          <Text numberOfLines={4} ellipsizeMode={'clip'}>
            {description}
          </Text>
          <Text style={styles.rating}>{rating}</Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default MovieCard;
