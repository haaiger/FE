import users from "./assets/images/users.png";
import watch from "./assets/images/watch.png";
import sliders from "./assets/images/sliders.png";
import {Route, Switch} from "react-router-dom";
import {ListPage} from "./ListPage";
import {Profile} from "./Profile";

export const Main = () => {
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
            <Route exact path='/' component={ListPage}/>
            <Route path='/profile' component={Profile}/>
        </Switch>
        </body>
    )
}
