const defaultState = {
    user: 0,
    count: 1,
};
export const INCREMENT = "INCREMENT"
export const DECREMENT = "DECREMENT"
export const ASYNC_INCREMENT = "ASYNC_INCREMENT"
export const ASYNC_DECREMENT = "ASYNC_DECREMENT"

export const incrementCreator = () => ({type: "INCREMENT"})
export const decrementCreator = () => ({type: "DECREMENT"})
export const asyncIncrementCreator = () => ({type: "ASYNC_INCREMENT"})
export const asyncDecrementCreator = () => ({type: "ASYNC_DECREMENT"})

const counterReducer = (state = defaultState, action) => {
    switch(action.type) {
        case "INCREMENT": {
            return {...state, count: state.count + 1}
        }
        case "DECREMENT": {
            return {...state, count: state.count - 1}
        }      

        default:    
            return state
    }
    
}

export default counterReducer;