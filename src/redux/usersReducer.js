import {SET_USERS} from "./actions/action";

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

export default usersReducer
