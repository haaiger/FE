import search from "./assets/images/search.png";
import caretdown from "./assets/images/caret-down-fill.png";
import lock from "./assets/images/lock.png";
import {ListItem} from "./ListItem";
import {useEffect, useState} from "react";
import axios from "axios";
import {useDispatch, useSelector} from "react-redux";
import {setUsers} from "./redux/usersReducer";


export const ListPage = ({onUserClick}) => {
    const users = useSelector(state => state.users.users)
    const dispatch = useDispatch()
    const [page, setPage] = useState(1)
    useEffect(() => {
        const fetchUser = async (page = 1) => {
            return await axios.get(`https://reqres.in/api/users?page=${page}&per_page=10`)
        }
        fetchUser(page).then(res => {
            dispatch(setUsers(res.data.data))
        })
    }, [page])
    if (users.length === 0) return null
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
                {users.map(user => <ListItem onUserClick={onUserClick} user={user}/>)}
            </div>
            <div className="lower-table">
                <div className="select">
                    <div className="select-text">10 на странице</div>
                    <div className="block-caret-down">
                        <img src={caretdown} className="caret-down-select"/>
                    </div>
                </div>
                <div className="choose-page">
                    <div className="stripes-left page" onClick={() => setPage(page - 1)}> {'<'} </div>
                    <div onClick={() => setPage(1)} className="one page">1</div>
                    <div onClick={() => setPage(2)} className="two page">2</div>
                    <div onClick={() => setPage(3)} className="three page">3</div>
                    <div onClick={() => setPage(4)} className="ellipsis">...</div>
                    <div onClick={() => setPage(5)} className="twenty-eight">28</div>
                    <div onClick={() => setPage(page + 1)} className="stripes-right"> {'>'} </div>
                </div>
            </div>
        </div>
    )
}