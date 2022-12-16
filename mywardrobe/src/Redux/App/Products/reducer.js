import * as types from "./actionType"

const initialState={
    payload:[],
    isLoading:false,
    isError:false
}

export const reducer=(state=initialState,action)=>{
    const{type,payload}=action;
    switch(type){
        case types.GET_PRODUCT_REQUEST:
            return {...state,isLoading:true}
        
        case types.GET_PRODUCT_SUCCESS:
            return {...state,isLoading:false,payload}
            
        case types.GET_PRODUCT_ERROR:
            return {...state,isLoading:false,isError:true}

            // add product into bag -
        case types.ADD_PRODUCT_REQUEST:
            return {...state,isLoading:true}
        
        case types.ADD_PRODUCT_SUCCESS:
            return {...state,isLoading:false,payload}
            
        case types.ADD_PRODUCT_ERROR:
            return {...state,isLoading:false,isError:true}

            
        default:
            return state;    
    }
}