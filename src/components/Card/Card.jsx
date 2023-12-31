import { useDispatch } from 'react-redux';
import { toggleCartAction, toggleFavoritesAction } from '../../store/cardReducer';
import { useLocation } from 'react-router-dom';

export const Card = ({card}) => {
	const dispatch = useDispatch();
	const {id, image, title, price, isFavorite, isCart} = card;
	const formatedPrice = new Intl.NumberFormat('ru-RU').format(price);

	const toggleFavorites = () => {
		dispatch(toggleFavoritesAction(id));
	};

	const toggleCart = () => {
		dispatch(toggleCartAction(id));
	};

	const location = useLocation();

	return (
		<>
			{location.pathname === '/orders' ?
				<div className="card-list__item card">
					<button className="card__button card__button--fav">
						<img className="card__button-icon" src='img/btn-fav.svg' width="32" height="32" />
					</button>
					<img className="card__image" src={image} width="133" height="112" />
					<span className="card__title">{title}</span>
					<div className="card__price-block">
						<span className="card__price-label">Цена:</span>
						<span className="card__price-value">{formatedPrice} руб.</span>
					</div>
					<button className="card__button card__button--cart">
						<img className="card__button-icon" src='img/btn-plus.svg' width="32" height="32" />
					</button>
				</div>
				:
				<div className="card-list__item card">
					<button className="card__button card__button--fav" onClick={toggleFavorites}>
						<img className="card__button-icon" src={isFavorite ? 'img/btn-fav-active.svg' : 'img/btn-fav.svg'} width="32" height="32" />
					</button>
					<img className="card__image" src={image} width="133" height="112" />
					<span className="card__title">{title}</span>
					<div className="card__price-block">
						<span className="card__price-label">Цена:</span>
						<span className="card__price-value">{formatedPrice} руб.</span>
					</div>
					<button className="card__button card__button--cart" onClick={toggleCart}>
						<img className="card__button-icon" src={isCart ? 'img/btn-plus-active.svg' : 'img/btn-plus.svg'} width="32" height="32" />
					</button>
				</div>
			}
		</>
	);
};