import search from "./assets/images/search.png";
import caretdown from "./assets/images/caret-down-fill.png";
import lock from "./assets/images/lock.png";
import {ListItem} from "./ListItem";
import USER_INFORMATION from "./constants";


export const ListPage = () => {
    return (
        <div className="right">
            <div className="table">
                <div className="sort">
                    <div className="flname-block">
                        <div>
                            <img src={search} className="search"/>
                        </div>
                        <div className="search-flname">Поиск по ФИО</div>
                    </div>
                    <div className="role-block">
                        <div className="choose-role">Выберите роль</div>
                        <div>
                            <img src={caretdown} className="caret-down"/>
                        </div>
                    </div>
                    <div className="access-block">
                        <div className="choose-access">Выберите доступ</div>
                        <div>
                            <img src={caretdown} className="caret-down"/>
                        </div>
                    </div>
                    <div className="reset">Сбросить</div>
                </div>
                <div className="cap">
                    <div className="lock-block">
                        <img src={lock} className="lock"/>
                    </div>
                    <div className="flname">ФИО</div>
                    <div className="login">Логин</div>
                    <div className="role">Роль</div>
                    <div className="access">Доступ</div>
                </div>
                {USER_INFORMATION.map(USER_INFORMATION => <ListItem name={USER_INFORMATION.name} login={USER_INFORMATION.login} role={USER_INFORMATION.role}
                                             access={USER_INFORMATION.access}/>)}
            </div>
            <div className="lower-table">
                <div className="select">
                    <div className="select-text">10 на странице</div>
                    <div className="block-caret-down">
                        <img src={caretdown} className="caret-down-select"/>
                    </div>
                </div>
                <div className="choose-page">
                    <div className="stripes-left page"> {'<'} </div>
                    <div className="one page">1</div>
                    <div className="two page">2</div>
                    <div className="three page">3</div>
                    <div className="ellipsis">...</div>
                    <div className="twenty-eight">28</div>
                    <div className="stripes-right"> {'>'} </div>
                </div>
            </div>
        </div>
    )
}