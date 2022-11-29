import React, { useCallback, useEffect } from 'react';
import { StatusBar, View } from 'react-native';

import Lottie from 'lottie-react-native';
import Logo from '../../assets/splash.json';
import { styles } from './styles';
import { useNavigation } from '@react-navigation/native';
import { useMovie } from '../../hooks/useMovie';

const Splash: React.FC = () => {
    const navigation = useNavigation();
    const { loadMovies } = useMovie();

    const setUp = useCallback(async () => {
        StatusBar.setHidden(true);

        await loadMovies();

        setTimeout(() => {
            StatusBar.setHidden(false);
            navigation.navigate('app' as never);
        }, 3500);
    }, [loadMovies, navigation]);

    useEffect(() => {
        setUp();
    }, [setUp]);

    return (
        <View style={styles.container}>
            <Lottie source={Logo} autoPlay style={styles.content} />
        </View>
    );
};

export default Splash;
