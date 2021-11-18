import {combineReducers, createStore} from "redux";
import usersReducer from "./usersReducer";

const rootReducer = combineReducers({
    users: usersReducer
})
export const store = createStore(rootReducer)


type RootReducerType = typeof rootReducer
export type AppStateType = ReturnType<RootReducerType>

type PropertiesType<T> = T extends { [key: string]: infer U } ? U : never
export type InferActionsType<
  T extends { [key: string]: (...args: any[]) => any }
> = ReturnType<PropertiesType<T>>

