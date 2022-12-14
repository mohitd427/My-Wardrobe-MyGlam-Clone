import * as types from "./appActionType"

const initialState={
    products:[],
    isLoading:false,
    isError:false
}

const appReducer=(state=initialState,action)=>{
    const{type,payload}=action;
    switch(type){
        case types.GET_PRODUCTS_REQUEST:
            return {...state,isLoading:true}
        
        case types.GET_PRODUCTS_SUCCESS:
            return {...state,isLoading:false,books:payload}
            
        case types.GET_PRODUCTS_ERROR:
            return {...state,isLoading:false,isError:true}
            
        default:
            return state;    
    }
}

export  default appReducer;