import * as types from "./appActionType"

const initialState={
    payload:[],
    isLoading:false,
    isError:false
}

const appReducer=(state=initialState,action)=>{
    const{type,payload}=action;
    switch(type){
        case types.GET_REQUEST:
            return {...state,isLoading:true}
        
        case types.GET_SUCCESS:
            return {...state,isLoading:false,payload}
            
        case types.GET_ERROR:
            return {...state,isLoading:false,isError:true}

            
        default:
            return state;    
    }
}

export  default appReducer;