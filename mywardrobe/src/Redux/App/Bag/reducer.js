import * as types from "./actionType"

const initialState={
    payload:[],
    isLoading:false,
    isError:false
}

export const reducer=(state=initialState,action)=>{
    const{type,payload}=action;
    switch(type){
        case types.GET_BAG_REQUEST:
            return {...state,isLoading:true}
        
        case types.GET_BAG_SUCCESS:
            return {...state,isLoading:false,payload}
            
        case types.GET_BAG_ERROR:
            return {...state,isLoading:false,isError:true}

            // delete bag -
        case types.DELETE_BAG_REQUEST:
            return {...state,isLoading:true}
        
        case types.DELETE_BAG_SUCCESS:
            return {...state,isLoading:false,payload}
            
        case types.DELETE_BAG_ERROR:
            return {...state,isLoading:false,isError:true}

            
        default:
            return state;    
    }
}