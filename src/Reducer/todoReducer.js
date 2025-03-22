import { todoTypes } from '../Types/todoTypes'; 

export const todoReducer = (state = {}, action = {}) =>{
    switch ( action.type ){
        case todoTypes.list:
            return[ ...state, action.payload ]
            
        case todoTypes.add:
            return[ ...state, action.payload ]
            
        case todoTypes.update:
            return state.map((item) =>{
                if(item.id == action.payload.id){
                    return action.payload
                }
                return item;
            });
            
        case todoTypes.delete:
            return state.filter((item) => item.id !== action.payload.id);
        default:
            return state;

    }
}