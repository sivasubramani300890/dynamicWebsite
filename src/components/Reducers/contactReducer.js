

const contactReducer = (state = [], action) => {
    switch(action.type){
        case 'ADD_CONATCT':
            return state.concat([action.payload]);
        default :
            return state;
    }
}

export default contactReducer;