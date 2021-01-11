import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from 'react-query'
import { ApolloClient, InMemoryCache } from '@apollo/client';
import { ApolloProvider } from '@apollo/client';
import Header from './components/Header/Header'
import SchedulePage from './pages/SchedulePage'
import RouteContextProvider from './context/RouteContext'

const queryClient = new QueryClient()

const client = new ApolloClient({
  uri: 'https://api.digitransit.fi/routing/v1/routers/finland/index/graphql',
  cache: new InMemoryCache()
});

function App() {
  return (
    <ApolloProvider client={client}>
      <QueryClientProvider client={queryClient}>
        <RouteContextProvider>
          <BrowserRouter>
            <Header />
            <Switch>
              <Route exact path='/' component={SchedulePage} />
              <Route path='/schedule' component={SchedulePage} />
            </Switch>
          </BrowserRouter>
        </RouteContextProvider>
      </QueryClientProvider>
    </ApolloProvider>
  );
}

export default App;
