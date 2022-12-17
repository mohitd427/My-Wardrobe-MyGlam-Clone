import * as types from "./actionType"

const initialState={
    payload:{},
    isLoading:false,
    isError:false
}

export const reducer=(state=initialState,action)=>{
    const{type,payload}=action;
    switch(type){
        // get address-
        case types.GET_ADDRESS_REQUEST:
            return {...state,isLoading:true}
        
        case types.GET_ADDRESS_SUCCESS:
            return {...state,isLoading:false,payload}
            
        case types.GET_ADDRESS_ERROR:
            return {...state,isLoading:false,isError:true}


        // post address-
        case types.ADD_ADDRESS_REQUEST:
            return {...state,isLoading:true}
        
        case types.ADD_ADDRESS_SUCCESS:
            return {...state,isLoading:false,payload}
            
        case types.ADD_ADDRESS_ERROR:
            return {...state,isLoading:false,isError:true}

            
        default:
            return state;    
    }
}