import unlock from "./assets/images/unlock.png";
import {NavLink} from "react-router-dom";
import { TUser} from "./redux/usersReducer";
import { FC } from "react";

interface IListItem{
    user:TUser,
    onUserClick: (user:TUser) => void
}
export const ListItem:FC<IListItem> = ({user, onUserClick}) => {
    const {first_name: name, last_name: role, id: login, email: access} = user
    return (
        <div className="personal">
            <div className="lock-block">
                <img src={unlock} className="lock"/>
            </div>
            <NavLink onClick={() => onUserClick(user)} to={"/profile"}>
                <div className="name">{name}</div>
            </NavLink>
            <div className="login-personal">{login}</div>
            <div className="role-personal">{role}</div>
            <div className="access-personal">{access}'</div>'
        </div>
    )
}