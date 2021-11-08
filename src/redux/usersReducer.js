const SET_USERS = 'SET_USERS'
export const initialState = {
    users: [],
}
const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USERS:
            return {
                ...state,
                users: action.data,
            }
        default:
            return state
    }
}

export const setUsers = (users) => ({type: SET_USERS, data: users})
export default usersReducer
