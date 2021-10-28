import search from "./assets/images/search.png";
import caretdown from "./assets/images/caret-down-fill.png";
import lock from "./assets/images/lock.png";
import {ListItem} from "./ListItem";


export const ListPage = () => {
    const items = [
        {
            id: 1,
            name: 'Александр Иван Иванович',
            login: 'aleksandrovii',
            role: 'Старший аналитик',
            access: 'Визуализация данных, Просмотр аналитической ин...'
        },
        {
            id: 2,
            name: 'Бубенцов Прохор Андреевич',
            login: 'bubencovpa',
            role: 'Аналитик',
            access: 'Просмотр аналитических отчетов'
        },
        {
            id: 3,
            name: 'Быков Анатолий Степанович',
            login: 'bykovas',
            role: 'Аналитик',
            access: 'Просмотр аналитических отчетов'
        },
        {
            id: 4,
            name: 'Голиков Пётр Евгеньевич',
            login: 'golikovpe',
            role: 'Аналитик',
            access: 'Просмотр аналитических отчетов'
        },
        {
            id: 5,
            name: 'Жолобов Анатолий Сергеевич',
            login: 'zhobovas',
            role: 'zhobovas',
            access: 'Просмотр аналитических отчетов'
        },
        {
            id: 6,
            name: 'Иванов Иван Иванович',
            login: 'ivanovii',
            role: 'Аналитик',
            access: 'Просмотр аналитических отчетов'
        },
        {
            id: 7,
            name: 'Куликов Степан Анатольевич',
            login: 'kulikovsa',
            role: 'Финансовый директор',
            access: 'Управление аналитическими отчетами'
        },
        {
            id: 8,
            name: 'Лом Павел Сергеевич',
            login: 'lomps',
            role: 'Главный бухгалтер',
            access: 'Сервисные возможности'
        },
        {
            id: 9,
            name: 'Мамонтов Сергей Витальевич',
            login: 'lomps',
            role: 'Главный бухгалтер',
            access: 'Сервисные возможности'
        },
        {
            id: 10,
            name: 'Петров Аркадий Семенович',
            login: 'lomps',
            role: 'Главный бухгалтер',
            access: 'Сервисные возможности'
        }
    ]
    return (


        <div className="Right">

            <div className="Table">
                <div className="Sort">
                    <div className="FlnameBlock">
                        <div>
                            <img src={search} className="Search"/>
                        </div>
                        <div className="Search-flname">Поиск по ФИО</div>
                    </div>
                    <div className="RoleBlock">
                        <div className="Choose-role">Выберите роль</div>
                        <div>
                            <img src={caretdown} className="CaretDown"/>
                        </div>
                    </div>
                    <div className="AccessBlock">
                        <div className="Choose-access">Выберите доступ</div>
                        <div>
                            <img src={caretdown} className="CaretDown"/>
                        </div>
                    </div>
                    <div className="Reset">Сбросить</div>
                </div>
                <div className="Cap">
                    <div className="LockBlock">
                        <img src={lock} className="Lock"/>
                    </div>
                    <div className="Flname">ФИО</div>
                    <div className="Login">Логин</div>
                    <div className="Role">Роль</div>
                    <div className="Access">Доступ</div>
                </div>

                {items.map(item => <ListItem name={item.name} login={item.login} role={item.role}
                                             access={item.access}/>)}


            </div>
            <div className="LowerTable">
                <div className="Select">
                    <div className="SelectText">10 на странице</div>
                    <div className="BlockCaretDown">
                        <img src={caretdown} className="CaretDownSelect"/>
                    </div>
                </div>
                <div className="ChoosePage">
                    <div className="StripesLeft page"> {'<'} </div>
                    <div className="One page">1</div>
                    <div className="Two page">2</div>
                    <div className="Three page">3</div>
                    <div className="Ellipsis">...</div>
                    <div className="TwentyEight">28</div>
                    <div className="StripesRight"> {'>'} </div>
                </div>
            </div>

        </div>
    )
}