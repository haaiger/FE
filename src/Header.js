import logo from "./assets/images/Vector.png";
import printer from "./assets/images/printer.png";
import git from "./assets/images/git-pull-request.png";
import userplus from "./assets/images/user-plus.png";
import profile from "./assets/images/profile.png";
import points from "./assets/images/more-vertical.png";
import {NavLink, useLocation} from "react-router-dom";
import {useEffect, useState} from "react";
import arrowLeft from "./assets/images/arrow-left.png";

export const Header = () => {
    const location = useLocation()
    const [showBackArrow, setShowBackArrow] = useState(false)
    useEffect(() => {
        setShowBackArrow(location.pathname.includes("profile"))
    }, [location.pathname])
    return (
        <header className="HeaderApp">
            <div className="UserAppBlock">
                <img src={logo}/>
                <div className="UserApp">UserApp</div>
            </div>
            <div className="Header">
                {showBackArrow && <NavLink to={"/"}><img src={arrowLeft} className="ArrowLeft"/></NavLink>}
                <div className="HeaderText">Управление пользователями</div>
                <img src={printer} className="Printer"/>
                <img src={git} className="Git"/>
                <img src={userplus} className="UserPlus"/>
            </div>
            <div className="Avatar">
                <img src={profile} className="Photo"/>
                <div className="User">Artem Shevchenko</div>
                <div className="Points">
                    <img src={points} className="Point"/>
                </div>
            </div>
        </header>
    )
}