import { createContext, useReducer, useEffect } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Header } from './components'
import SchedulePage from './pages/SchedulePage'
import { formReducer, initialState } from './reducers/formReducer'
import { ICtx } from './interfaces/Interfaces'

export const RouteContext = createContext<Partial<ICtx>>({})

export default function App() {
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
    <RouteContext.Provider value={{ state, dispatch }}>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path='/' component={SchedulePage} />
          <Route path='/schedule' component={SchedulePage} />
        </Switch>
      </BrowserRouter>
    </RouteContext.Provider>
  )
}