import { createContext, useContext, useReducer } from "react"
import Reducer from "./Reducer"
import { FastForward } from "@mui/icons-material"


const initialState ={
    currentUser:null,
    openLogin:false,
    loading:false,
    alert:{open:false,severity:'info',message:''},
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
