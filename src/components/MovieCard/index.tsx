import React from 'react';
import { Image, Text, View } from 'react-native';
import { styles } from './styles';

interface MovieCardProps {
  title: string;
  description: string;
  img: string;
  rating: number;
}

const MovieCard: React.FC<MovieCardProps> = ({
  title,
  img,
  rating,
  description,
}) => {
  return (
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
  );
};

export default MovieCard;
