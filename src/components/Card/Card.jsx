import { useContext } from 'react';
import { AppContext } from '../../context/app.context';
import { ChangeEvents } from '../../consts';

export const Card = ({card}) => {
	const { cardChanger } = useContext(AppContext);

	const {id, image, title, price, isFavorite, isCart} = card;
	const formatedPrice = new Intl.NumberFormat('ru-RU').format(price);

	return (
		<div className="card-list__item card">
			<button className="card__button card__button--fav" onClick={() => cardChanger(id, ChangeEvents.ToggleFav)}>
				<img className="card__button-icon" src={isFavorite ? 'img/btn-fav-active.svg' : 'img/btn-fav.svg'} width="32" height="32" />
			</button>
			<img className="card__image" src={image} width="133" height="112" />
			<span className="card__title">{title}</span>
			<div className="card__price-block">
				<span className="card__price-label">Цена:</span>
				<span className="card__price-value">{formatedPrice} руб.</span>
			</div>
			<button className="card__button card__button--cart" onClick={() => cardChanger(id, ChangeEvents.ToggleCart)}>
				<img className="card__button-icon" src={isCart ? 'img/btn-plus-active.svg' : 'img/btn-plus.svg'} width="32" height="32" />
			</button>
		</div>
	);
};