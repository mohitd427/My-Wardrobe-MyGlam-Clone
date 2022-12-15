
const initialState = {
    loading: false,
    currentUser : null,
    error:false
}


const userReducer = (state = initialState , action) =>{
    const {payload, type} = action ;
    switch(type){
        default: return state
    }
}

export { userReducer }