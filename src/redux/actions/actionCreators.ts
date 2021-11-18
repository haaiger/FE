import {SET_USERS} from "./action";
import {InferActionsType} from '../store'
import { UserType } from "../usersReducer";
export type ActionsType = InferActionsType<typeof actions>

export const actions = {
    setUsers:(users:UserType[]) => ({type: SET_USERS, data: users})
}


