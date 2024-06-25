

import fetchData from "./utils/fetchData.js"
const url = process.env.REACT_APP_SERVER_URL + '/user'


export const register = async(user,dispatch)=>{
    dispatch({type:'START_LOADING'})


    //Send requests with fetch
    const result = await fetchData({url:url+'/register',body:user},dispatch)
    if(result){
        dispatch({type:'UPDATE_USER',payload:result})
        dispatch({type:'CLOSE_LOGIN'})
        dispatch({type:'UPDATE_ALERT',payload:{open:true,severity:'success',message:'Your Account has been created Successfully!'}})

    }

  dispatch({type:'END_LOADING' })
}


export const login = async(user,dispatch)=>{
    dispatch({type:'START_LOADING'})


    //Send requests with fetch
    const result = await fetchData({url:url+'/login',body:user},dispatch)
    if(result){
        dispatch({type:'UPDATE_USER',payload:result})
        dispatch({type:'CLOSE_LOGIN'})
        

    }

  dispatch({type:'END_LOADING' })
}