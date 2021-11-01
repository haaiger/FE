import unlock from "./assets/images/unlock.png";
import {NavLink} from "react-router-dom";

export const ListItem = ({name, login, role, access}) => {
    return (
        <div className="personal">
            <div className="lock-block">
                <img src={unlock} className="lock"/>
            </div>
            <NavLink to={"/profile"}>
                <div className="name">{name}</div>
            </NavLink>
            <div className="login-personal">{login}</div>
            <div className="role-personal">{role}</div>
            <div className="access-personal">{access}</div>
        </div>
    )
}