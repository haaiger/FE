import photo1 from "./assets/images/image 1.png";
import caretdown from "./assets/images/caret-down-fill.png";
import deleteAccess from "./assets/images/delete.png";
import plusAccess from "./assets/images/plus.png";
import lock from "./assets/images/lock.png";

export const Profile = () => {
    return (<div className="right-profile">
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
                <div className="profile-name">Александров Иван Иванович</div>
                <div className="profile-block">
                    <div className="login-profile">Логин</div>
                    <div className="login-profile-text">bykovas</div>
                </div>
                <div className="profile-block">
                    <div className="role-profile">Роль</div>
                    <div className="block-for-role">
                        <div className="role-profile-text">Аналитик</div>
                        <img src={caretdown} className="caret-down-profile"/>
                    </div>
                </div>
                <div className="profile-block">
                    <div className="access-profile">Доступ</div>
                    <div className="prelast-block">
                        <div className="text-delete">
                            <div className="access-profile-text">Просмотр аналитических отчетов</div>
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