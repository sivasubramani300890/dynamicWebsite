

const contactReducer = (state = [], action) => {
    switch(action.type){
        case 'ADD_CONATCT':
            return state.concat([action.payload]);
        default :
            return state;
    }
}

//Test Line for Branch1

export default contactReducer;