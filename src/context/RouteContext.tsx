import { createContext } from 'react'
import { ICtx } from '../interfaces/Interfaces'

export const RouteContext = createContext<Partial<ICtx>>({})

