import React from 'react';
import {
  ApolloClient,
  ApolloProvider as Provider,
  InMemoryCache,
  createHttpLink,
  ApolloLink,
} from '@apollo/client';

import { setContext } from '@apollo/client/link/context';
import { onError } from '@apollo/client/link/error';

import AsyncStorage from '@react-native-async-storage/async-storage';

const authLink = setContext(async (_, { headers }) => {
  const idToken = await AsyncStorage.getItem('@idToken');

  return {
    headers: {
      ...headers,
      authorization: idToken ? `Bearer ${idToken}` : '',
    },
  };
});

const httpLink = createHttpLink({
  uri: 'https://seahorse-app-6wz5d.ondigitalocean.app/graphql',
});

const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors) {
    for (let err of graphQLErrors) {
      console.log(err);
    }
  }

  if (networkError) console.log(`[Network error]: ${networkError}`);
});

const client = new ApolloClient({
  link: ApolloLink.from([authLink, errorLink, httpLink]),
  cache: new InMemoryCache(),
});

interface ApolloProviderProps {
  children?: React.ReactNode;
}

export const ApolloProvider: React.FC<ApolloProviderProps> = ({ children }) => {
  return <Provider client={client}>{children}</Provider>;
};
