import 'react-native-gesture-handler';

import React from 'react';
import { StatusBar } from 'react-native';
import { MovieProvider } from './src/hooks/useMovie';
import Routes from './src/routes';

const App: React.FC = () => {
    return (
        <MovieProvider>
            <StatusBar backgroundColor="#e53030" />
            <Routes />
        </MovieProvider>
    );
};

export default App;
