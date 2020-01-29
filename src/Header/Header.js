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
					<li className="menu_list"><a href="">Главная</a>
					<li><a href="">Продвижение в ВКонтакте</a>
					<ul className="submenu">
						<li><a href="">ВКонтакте Standart</a></li>
						<li><a href="">ВКонтакте Business</a></li>
						<li><a href="">ВКонтакте Pro+</a></li>
					</ul>
					</li>
					<li><a href="">Продвижение в Facebook</a>
					<ul className="submenu">
						<li><a href="">Facebook Standart</a></li>
						<li><a href="">Facebook Business</a></li>
						<li><a href="">Facebook Pro+</a></li>
					</ul>
					</li>
					<li><a href="">Продвижение в Одноклассники</a>
					<ul className="submenu">
						<li><a href="">Одноклассники Standart</a></li>
						<li><a href="">Одноклассники Business</a></li>
						<li><a href="">Одноклассники Pro+</a></li>
					</ul>
					</li>
					<li><a href="">Продвижение в Instagram</a>
					<ul className="submenu">
						<li><a href="">Instagram Standart</a></li>
						<li><a href="">Instagram Business</a></li>
						<li><a href="">Instagram Pro+</a></li>
					</ul>
					</li>
                    </li>	
                    </ul>
					</nav>
					</div>
			<div className="row">
			<div className="col-md-2">
							<div className="logo">
						<a href=""><img src={logo}></img></a></div>
				
					</div>
				</div>
			</div>
			</div>
	
		
	</header>
    )
    }

export default Header