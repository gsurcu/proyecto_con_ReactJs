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
					<span className="titulo">Cube</span>
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
						<li><span>Iniciar Sesion</span></li>
						<li><span>Contacto</span></li>
						<li><span>Catalogo</span></li>
					</ul>
				</div>
			</div>
			<nav className="second-header list">
				<ul>
					<li><span>Iniciar Sesion</span></li>
					<li><span>Contacto</span></li>
					<li><span>Catalogo</span></li>
				</ul>
			</nav>
			<div className="toggle-header">
				<div className="toggle-header-search search">
					<form className="search-form" action="" method="get"><input type="search" name="" id="" placeholder="Search products..."/></form>
				</div>
				<div className="toggle-header-list list">
					<ul>
						<li><span>Iniciar Sesion</span></li>
						<li><span>Carrito</span></li>
						<li><span>Catalogo</span></li>
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
