import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client'
import { QueryClient, QueryClientProvider } from 'react-query'
import './index.css'

const queryClient = new QueryClient()

const client = new ApolloClient({
  uri: process.env.REACT_APP_GRAPHQL_URI,
  cache: new InMemoryCache()
})

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root')
)