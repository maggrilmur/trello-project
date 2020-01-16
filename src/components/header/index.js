import React from 'react'
import './style.css';
import homeIcon from '../../img/home.png';
import trelloLogo from '../../img/trello.png';
import searchIcon from '../../img/search.png';
import plusIcon from '../../img/plus.png';
import infoIcon from '../../img/info.png';
import bellIcon from '../../img/bell.png';
import photoIcon from '../../img/user-photo.png';


const Header = () => (
    <div className="header">

        {/* Navegação à esquerda*/}
        <div className="left-nav">
            <div className="home-div">
                <img src={homeIcon} alt="home" className="home" />
            </div>
            <div className="quadros-div">
                <img src={trelloLogo} alt="logo" className="logo" />
                <p className="quadros-p">Quadros</p>
            </div>
            <div className="input-div">
                <input type="text" placeholder="" className="input" />
                <img src={searchIcon} alt="search" />
            </div>
        </div>
        {/* Navegação à esquerda*/}

        {/* Centro */}
        <div className="logo-div">
            <div className="logo">
                <img src={trelloLogo} alt="logo-center" className="trello-logo-center" />
                <p className="trello-p-center">Logo Name</p>
            </div>
        </div>
        {/* Centro */}
        
        {/* Navegação à direita*/}
        <div className="right-nav">
            <div className="plus-div item-right-nav bg">
                <img src={plusIcon} />
            </div>
            <div className="info-div item-right-nav bg">
                <img src={infoIcon} />
            </div>
            <div className="bell-div item-right-nav bg">
                <img src={bellIcon} />
            </div>
            <div className="photo-div item-right-nav">
                <img src={photoIcon} />
            </div>
        </div>
        {/* Navegação à direita*/}
    </div>
)

export default Header;