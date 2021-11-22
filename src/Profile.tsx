import {FunctionComponent} from "react";
import {TUser} from "./redux/usersReducer";
import {ListItem} from "./list-item";
import photo1 from "./assets/images/image 1.png";
import caretdown from "./assets/images/caret-down-fill.png";
import deleteAccess from "./assets/images/delete.png";
import plusAccess from "./assets/images/plus.png";
import lock from "./assets/images/lock.png";

interface Profile {
    selectedUser: (TUser)

}

export const Profile : FunctionComponent<Profile> = ({selectedUser}) => {

    if(!selectedUser) {
        return null;
    }
    const {
        first_name: name, 
        last_name: role, 
        id: login, 
        email: access
    } = selectedUser
    return (
        <div className="right-profile">
            <div className="left-right-profile">
                <img src={photo1} className="profile-photo"/>
                <div className="reset-password">
                    Сбросить пароль
                </div>
                <div className="delete-user">
                    Удалить пользователя
                </div>
            </div>
            <div className="description-profile">
                <div className="profile-name">{`${name} ${role}`}</div>
                <div className="profile-block">
                    <div className="login-profile">Логин</div>
                    <div className="login-profile-text">{login}</div>
                </div>
                <div className="profile-block">
                    <div className="role-profile">Роль</div>
                    <div className="block-for-role">
                        <div className="role-profile-text">{role}</div>
                        <img src={caretdown} className="caret-down-profile"/>
                    </div>
                </div>
                <div className="profile-block">
                    <div className="access-profile">Доступ</div>
                    <div className="prelast-block">
                        <div className="text-delete">
                            <div className="access-profile-text">{access}</div>
                            <div className="delete-access-block">
                                <img src={deleteAccess} className="delete-access"/>
                            </div>
                        </div>
                        <div>
                            <img src={plusAccess} className="plus-access"/>
                        </div>
                    </div>
                </div>
                <div className="unlock-block">
                    <img src={lock} className="lock-profile"/>
                    <div className="unlock">Разблокирован</div>
                </div>
                <div className="last-block">
                    <div className="last-changes">Последние изменения 29.12.2020</div>
                    <div className="save">Сохранить</div>
                </div>
            </div>
        </div>
    )
}