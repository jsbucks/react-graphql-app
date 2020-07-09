import React, { useEffect } from 'react';
import './App.css';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
import { PokemonContainer } from './containers/PokemonContainer';
import ReactGA from 'react-ga';

export default function App() {
  useEffect(() => {
    ReactGA.initialize('UA-172022121-3');
    ReactGA.pageview(window.location.pathname);
  }, []);

  const client = new ApolloClient({
    uri: 'https://graphql-pokemon.now.sh'
  });

  return (
   <ApolloProvider client={client}>
     <main>
       <PokemonContainer />
     </main>
   </ApolloProvider>
  );
}
