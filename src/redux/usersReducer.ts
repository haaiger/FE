import {SET_USERS,} from "./actions/action";
import {ActionsType} from './actions/actionCreators'
import {InferActionsType} from './store'
export type UserType = {
        id:number
        avatar:string
        email:string
        first_name:string
        last_name:string
 }

interface initialStateI{
    users: UserType[]
}


export const initialState:initialStateI = {
    users: [],
}
const usersReducer = (state = initialState, action:ActionsType) => {
    switch (action.type) {
        case SET_USERS:
            return {
                ...state,
                users: action.data
            }
        default:
            return state
    }
}



export default usersReducer
