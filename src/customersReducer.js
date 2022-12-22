const defaultState = {
    users: [] ,
};
export const SET_USERS = "SET_USERS"
export const FETCH_USERS = "FETCH_USERS"
export const CLEAN_USERS = "CLEAN_USERS"

const customersReducer = (state = defaultState, action) => {
    switch(action.type) {
        case "SET_USERS": {
            return {...state, users: action.payload}
        }

        case "CLEAN_USERS": {
            return {...state, users: []}
        }

        default: 
            return state
    }
}

export const setUsers = payload => ({
    type: "SET_USERS",
    payload
})

export const cleanUsers = () => ({
    type: "CLEAN_USERS"
})

export const fetchUsers = () => ({
    type: "FETCH_USERS",
})

export default customersReducer;