import React from "react";
import './Header.css';
import ButtonNav from "./ButtonNav";



function Header() {
    return (
        <header className="header">
            <div className="ancors">
                <ButtonNav nombre='Home' link='#'/>
                <ButtonNav nombre='Cities' link='#'/>
                <ButtonNav nombre='Hotels' link='#'/>
            </div>
            <div className="login">
                <ul className="ul-icon">
                    <li className="li-icon"><img className="nav-menu" src='https://assets.stickpng.com/images/588a6507d06f6719692a2d15.png' alt="" /></li>
                </ul>
                <ul className="ul-nav">
                    <li className="li-but"><ButtonNav nombre='Login' Link='#'/></li>
                    <li className="li-but"><ButtonNav nombre='Register' Link='#'/></li>
                </ul>
            </div>
        </header>
    )
}
export {Header}