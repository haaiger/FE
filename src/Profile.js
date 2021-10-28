import photo1 from "./assets/images/image 1.png";
import caretdown from "./assets/images/caret-down-fill.png";
import deleteAccess from "./assets/images/delete.png";
import plusAccess from "./assets/images/plus.png";
import lock from "./assets/images/lock.png";

export const Profile = () => {
    return (<div className="RightProfile">
            <div className="LeftRightProfile">
                <img src={photo1} className="ProfilePhoto"/>
                <div className="ResetPassword">
                    Сбросить пароль
                </div>
                <div className="DeleteUser">
                    Удалить пользователя
                </div>
            </div>
            <div className="DescriptionProfile">
                <div className="ProfileName">Александров Иван Иванович</div>
                <div className="ProfileBlock">
                    <div className="LoginProfile">Логин</div>
                    <div className="LoginProfileText">bykovas</div>
                </div>
                <div className="ProfileBlock">
                    <div className="RoleProfile">Роль</div>
                    <div className="BlockForRole">
                        <div className="RoleProfileText">Аналитик</div>
                        <img src={caretdown} className="CaretDownProfile"/>
                    </div>
                </div>
                <div className="ProfileBlock">
                    <div className="AccessProfile">Доступ</div>
                    <div className="PreLastBlock">
                        <div className="TextDelete">
                            <div className="AccessProfileText">Просмотр аналитических отчетов</div>
                            <div>
                                <img src={deleteAccess} className="DeleteAccess"/>
                            </div>
                        </div>
                        <div>

                            <img src={plusAccess} className="PlusAccess"/>
                        </div>
                    </div>
                </div>
                <div className="UnlockBlock">
                    <img src={lock} className="LockProfile"/>
                    <div className="Unlock">Разблокирован</div>
                </div>
                <div className="LastBlock">
                    <div className="LastChanges">Последние изменения 29.12.2020</div>
                    <div className="Save">Сохранить</div>
                </div>
            </div>
        </div>
    )
}