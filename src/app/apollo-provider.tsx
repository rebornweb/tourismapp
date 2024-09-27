// components/ApolloProvider.tsx
import React from 'react';
import { ApolloProvider as ApolloProviderBase } from '@apollo/client';
import client from './apollo-client';

const ApolloProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <ApolloProviderBase client={client}>
      {children}
    </ApolloProviderBase>
  );
};

export default ApolloProvider;
