import {combineReducers, createStore} from "redux";
import usersReducer from "./usersReducer";

const rootReducer = combineReducers({
    users: usersReducer
})
export const store = createStore(rootReducer)

type TRootReducer = typeof rootReducer
export type TAppState = ReturnType<TRootReducer>

type TProperties<T> = T extends { [key: string]: infer U } ? U : never
export type TInferActions<
  T extends { [key: string]: (...args: any[]) => any }
> = ReturnType<TProperties<T>>

