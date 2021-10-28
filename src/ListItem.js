import unlock from "./assets/images/unlock.png";
import {NavLink} from "react-router-dom";

export const ListItem = ({name, login, role, access}) => {
    return (
        <div className="Personal">
            <div className="LockBlock">
                <img src={unlock} className="Lock"/>
            </div>
            <NavLink to={"/profile"}>
                <div className="Name">{name}</div>
            </NavLink>
            <div className="LoginPersonal">{login}</div>
            <div className="RolePersonal">{role}</div>
            <div className="AccessPersonal">{access}</div>
        </div>
    )

}