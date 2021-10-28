import users from "./assets/images/users.png";
import watch from "./assets/images/watch.png";
import sliders from "./assets/images/sliders.png";
import {Route, Switch} from "react-router-dom";
import {ListPage} from "./ListPage";
import {Profile} from "./Profile";

export const Main = () => {
    return (
        <body className="Body">
        <div className="Left">
            <div className="UsersBlock">
                <div>
                    <img src={users} className="UsersProfile"/>
                </div>
                <div className="Users">Пользователи</div>
            </div>
            <div className="TimeBlock">
                <div>
                    <img src={watch} className="Watch"/>
                </div>
                <div className="Time">Учёт времени</div>
            </div>
            <div className="SettingsBlock">
                <div>
                    <img src={sliders} className="Sliders"/>
                </div>
                <div className="Settings">Настройки</div>
            </div>
        </div>
        <Switch>
            <Route path="/" exact render={() => <ListPage/>}/>
            <Route path="/profile/" render={() => <Profile/>}/>
        </Switch>
        </body>
    )
}
