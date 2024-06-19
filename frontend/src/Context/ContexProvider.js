import { createContext, useContext, useReducer } from "react"
import Reducer from "./Reducer"


const initialState ={
    currentUser:null
}

const Context  = createContext(initialState)

export const useValue =() => {
    return useContext(Context)
}





const ContexProvider = ({children}) => {
    const [state , dispatch] = useReducer(Reducer,initialState)
  return (
    <Context.Provider value={{state,dispatch}}>
        {children}
    </Context.Provider>
  )
}

export default ContexProvider
