import React from 'react'


import logo from './Logo/logo.jpg'

const Header =()=>{
	return (
    <header className="header">
      <div className="container">
        <div className="row">
          <div className="col-md-8">
            <nav>
              <ul className="menu row">
                <li className="menu_list"><a href="url">Главная</a>{" "}</li>
                <li><a href="url">Продвижение в ВКонтакте</a>
                <ul className="submenu">
                  <li><a href="url">ВКонтакте Standart</a></li>
                  <li><a href="url">ВКонтакте Business</a></li>
                  <li><a href="url">ВКонтакте Pro+</a></li>
                  </ul>
                </li>
                <li>
                  <a href="url">Продвижение в Facebook</a>
                  <ul className="submenu">
                    <li><a href="url">Facebook Standart</a></li>
                    <li><a href="url">Facebook Business</a></li>
                    <li><a href="url">Facebook Pro+</a></li>
                  </ul>
                </li>
                <li>
                  <a href="url">Продвижение в Одноклассники</a>
                  <ul className="submenu">
                    <li><a href="url">Одноклассники Standart</a></li>
                    <li><a href="url">Одноклассники Business</a></li>
                    <li><a href="url">Одноклассники Pro+</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="url">Продвижение в Instagram</a>
                  <ul className="submenu">
                    <li><a href="url">Instagram Standart</a></li>
                    <li><a href="url">Instagram Business</a></li>
                    <li><a href="url">Instagram Pro+</a>
                    </li>
                  </ul>
                </li>
              </ul>
            </nav>
          </div>
          <div className="row">
            <div className="col-md-2">
              <div className="logo">
                <a href="url">
                  <img src={logo} alt="icon"/>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
    }

export default Header