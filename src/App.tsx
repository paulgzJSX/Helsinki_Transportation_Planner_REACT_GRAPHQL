import { useReducer, useEffect } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from 'react-query'
import { ApolloClient, InMemoryCache } from '@apollo/client';
import { ApolloProvider } from '@apollo/client';
import Header from './components/Header/Header'
import SchedulePage from './pages/SchedulePage'
import { RouteContext } from './context/RouteContext'
import { formReducer, initialState } from './reducers/formReducer'

const queryClient = new QueryClient()

const client = new ApolloClient({
  uri: 'https://api.digitransit.fi/routing/v1/routers/finland/index/graphql',
  cache: new InMemoryCache()
});

function App() {
  const [state, dispatch] = useReducer(formReducer, initialState)

  useEffect(() => {
    if (!state?.origin || !state?.destination) {
      dispatch({ type: 'SELECT_LEG', payload: null })
    }
    if (state?.origin && state?.destination) {
      dispatch({ type: 'ALLOW_COORDS', payload: { state: false } })
    }
  }, [state?.origin, state?.destination])

  return (
    <ApolloProvider client={client}>
      <QueryClientProvider client={queryClient}>
        <RouteContext.Provider value={{ state, dispatch }}>
          <BrowserRouter>
            <Header />
            <Switch>
              <Route exact path='/' component={SchedulePage} />
              <Route path='/schedule' component={SchedulePage} />
            </Switch>
          </BrowserRouter>
        </RouteContext.Provider>
      </QueryClientProvider>
    </ApolloProvider>
  );
}

export default App;
