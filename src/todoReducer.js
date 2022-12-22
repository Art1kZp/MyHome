const defaultState = {
    todos: []
};

const todoReducer = (state = defaultState, action) => {
    switch(action.type) {
        case 'ADD_TODO': {
            return {
                ...state,
                todos: [...state.todos, {
                    id: action.id,
                    text: action.text,
                    completed: false
                }]
            }
        }
        case "DELETE_TODO": {
            return {
                ...state,
                todos: state.todos.filter((item) => item.id !== action.payload )
            }
        }
            
        
        case "COMPLETE_TODO": {
            return {
                ...state, 
                todos: state.todos.map((item) => {
                    if (item.id === action.payload) {
                        return {...item, completed: !item.completed}
                    }
                    return item
                })
            }
        }

        case "EDIT_TODO": {
            return {
                ...state,
                todos: state.todos.map((item) => {
                    if (item.id === action.payload.id) {
                        return {...item, text: action.payload.newValue}
                    }
                    return item
                })
            }
        }
            
       

        default: 
            return state 
        }}

export default todoReducer;