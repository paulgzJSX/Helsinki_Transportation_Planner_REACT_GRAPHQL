import { useState, createContext, useEffect, useReducer } from 'react'
import { IRouteContext, IFormData, ILeg } from '../interfaces/Interfaces'


export const RouteContext = createContext<Partial<IRouteContext>>({})

