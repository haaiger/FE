import {NavLink, useLocation} from "react-router-dom";
import {useEffect, useState} from "react";
import logo from "./assets/images/Vector.png";
import printer from "./assets/images/printer.png";
import git from "./assets/images/git-pull-request.png";
import userplus from "./assets/images/user-plus.png";
import profile from "./assets/images/profile.png";
import points from "./assets/images/more-vertical.png";
import arrowLeft from "./assets/images/arrow-left.png";

export const Header = () => {
    const location = useLocation()
    const [showBackArrow, setShowBackArrow] = useState(false)
    useEffect(() => {
        setShowBackArrow(location.pathname.includes("profile"))
    }, [location.pathname])
    return (
        <header className="header-app">
            <div className="user-app-block">
                <img src={logo} className="logo"/>
                <div className="user-app">UserApp</div>
            </div>
            <div className="header">
                {showBackArrow && <NavLink to={"/"}><img src={arrowLeft} className="arrow-left"/></NavLink>}
                <div className="header-text">Управление пользователями</div>
                <img src={printer} className="printer"/>
                <img src={git} className="git"/>
                <img src={userplus} className="user-plus"/>
            </div>
            <div className="avatar">
                <img src={profile} className="photo"/>
                <div className="user">Alex Petrov</div>
                <div className="points">
                    <img src={points} className="point"/>
                </div>
            </div>
        </header>
    )
}