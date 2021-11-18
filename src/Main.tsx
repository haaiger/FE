import users from "./assets/images/users.png";
import watch from "./assets/images/watch.png";
import sliders from "./assets/images/sliders.png";
import {Route, Switch} from "react-router-dom";
import {ListPage} from "./ListPage";
import {Profile} from "./Profile";
import {useState} from "react";

export const Main = () => {
    const [selectedUser,setSelectedUser] = useState(null)
    const onUserClick = (user) => setSelectedUser(user)
    console.log(selectedUser);
    return (
        <body className="body">
        <div className="left">
            <div className="users-block">
                <div>
                    <img src={users} className="users-profile"/>
                </div>
                <div className="users">Пользователи</div>
            </div>
            <div className="time-block">
                <div>
                    <img src={watch} className="watch"/>
                </div>
                <div className="time">Учёт времени</div>
            </div>
            <div className="settings-block">
                <div>
                    <img src={sliders} className="sliders"/>
                </div>
                <div className="settings">Настройки</div>
            </div>
        </div>
        <Switch>
            <Route exact path='/' render={() => <ListPage onUserClick={onUserClick}/>}/>
            <Route path='/profile' render={() => <Profile selectedUser={selectedUser}/>}/>
        </Switch>
        </body>
    )
}
