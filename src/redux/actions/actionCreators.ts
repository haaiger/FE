import {SET_USERS} from "./action";
import {TInferActions} from '../store'
import { TUser } from "../usersReducer";
export type TActions = TInferActions<typeof actions>

export const actions = {
    setUsers:(users:TUser) => ({
        type: SET_USERS, 
        data: users,
    })
}


