import React from 'react';
import { MovieProvider } from './src/hooks/useMovie';
import Routes from './src/routes';

const App: React.FC = () => {
  return (
    <MovieProvider>
      <Routes />
    </MovieProvider>
  );
};

export default App;
