import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from 'react-query'
import { ApolloClient, InMemoryCache } from '@apollo/client';
import { ApolloProvider } from '@apollo/client';
import Header from './components/Header/Header'
import { HomePage, SchedulePage } from './pages/'
import PlanningPage from './pages/PlanningPage'
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
              <Route exact path='/' component={HomePage} />
              <Route path='/schedule' component={SchedulePage} />
              <Route path='/planning' component={PlanningPage} />
            </Switch>
          </BrowserRouter>
        </RouteContextProvider>
      </QueryClientProvider>
    </ApolloProvider>
  );
}

export default App;
