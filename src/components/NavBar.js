import './NavBar.scss'


const NavBar = () => {
	return (
		<header className="header">
			<div className="primary-header">
				<div className="header-button header-menu">
					<button className="menu" id="boton-menu">
						<i className="fas fa-bars fa-lg"></i>
						<span className="bar-text">menu</span>
					</button>
				</div>
				<div className="header-titulo">
					<a href="./index.html"><span className="titulo">Cube</span></a>
				</div>
				<div className="header-button header-cart">
					<button className="cart">
						<i className="fas fa-shopping-cart fa-lg"></i>
						<span></span>
					</button>
				</div>
				<div className="header-search search"><form className="search-form" action="#" method="get"><input type="search" name="" id="" placeholder="Search products..."/></form></div>
				<div className="header-list list">
					<ul>
						<li><a href="./sesion.html"><span>Iniciar Sesion</span></a></li>
						<li><a href=""><span>Contacto</span></a></li>
						<li><a href="./catalogo.html"><span>Catalogo</span></a></li>
					</ul>
				</div>
			</div>
			<nav className="second-header list">
				<ul>
					<li><a href="./sesion.html"><span>Iniciar Sesion</span></a></li>
					<li><a href=""><span>Contacto</span></a></li>
					<li><a href="./catalogo.html"><span>Catalogo</span></a></li>
				</ul>
			</nav>
			<div className="toggle-header">
				<div className="toggle-header-search search">
					<form className="search-form" action="" method="get"><input type="search" name="" id="" placeholder="Search products..."/></form>
				</div>
				<div className="toggle-header-list list">
					<ul>
						<li><a href="./sesion.html"><span>Iniciar Sesion</span></a></li>
						<li><a href=""><span>Carrito</span></a></li>
						<li><a href="./catalogo.html"><span>Catalogo</span></a></li>
					</ul>
				</div>
			</div>
			<div className="toggle-cart">
				<div className="toggle-cart-header">
					<div className="toggle-cart-head">Shopping Cart</div>
					<div className="toggle-cart-cancel cart"></div>
				</div>
				<div className="toggle-cart-carrito"></div>
			</div>
		</header>
	)
}

export default NavBar;
