import {SET_USERS,} from "./actions/action";
import {TActions} from './actions/actionCreators'
import {TInferActions} from './store'
export type TUser = {
        id:number
        avatar:string
        email:string
        first_name:string
        last_name:string
 }

interface IinitialState{
    users: TUser[]
}

export const initialState:IinitialState = {
    users: [],
}
const usersReducer = (state = initialState, action:TActions) => {
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
