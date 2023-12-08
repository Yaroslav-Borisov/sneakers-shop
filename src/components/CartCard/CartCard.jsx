import { useContext } from 'react';
import { AppContext } from '../../context/app.context';
import { ChangeEvents } from '../../consts';

export const CartCard = ({card}) => {
	const { cardChanger } = useContext(AppContext);

	const {id, image, title, price} = card;
	const formatedPrice = new Intl.NumberFormat('ru-RU').format(price);

	return (
		<div className="drawer__card-item card card--cart">
			<img className="card__image" src={image} width="133" height="112" />
			<span className="card__title">{title}</span>
			<div className="card__price-block">
				<span className="card__price-value">{formatedPrice} руб.</span>
			</div>
			<button className="card__button card__button--remove" onClick={() => cardChanger(id, ChangeEvents.ToggleCart)}>
				<img className="card__button-icon" src="img/btn-remove.svg" width="32" height="32"/>
			</button>
		</div>
	);
};