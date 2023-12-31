import { Link } from 'react-router-dom';

export const Header = ({setDrawerState, cartCards}) => {
	const totalPrice = cartCards.map(card => card.price).reduce((sum, current) => sum + current, 0);

	const openDrawer = () => {
		setDrawerState(true);
	};

	return (
		<header className="page-header">
			<Link className="page-header__logo logo" to="/">
				<img className="logo__image" src="img/logo.png" width="40" height="40" />
				<span className="logo__title">Sneakers-Shop</span>
				<span className="logo__desc">Магазин брендовых кроссовок</span>
			</Link>
			<nav className="page-header__nav main-nav">
				<a className="main-nav__link" onClick={openDrawer}>
					<img className="main-nav__icon" src="img/cart.svg" width="20" height="19" />
					<span className="main-nav__text">{totalPrice} руб.</span>
				</a>
				<Link className="main-nav__link" to="/favorites">
					<img className="main-nav__icon" src="img/fav.svg" width="20" height="19" />
				</Link>
				<Link className="main-nav__link" to="/orders">
					<img className="main-nav__icon" src="img/user.svg" width="20" height="20" />
				</Link>
			</nav>
		</header>
	);
};