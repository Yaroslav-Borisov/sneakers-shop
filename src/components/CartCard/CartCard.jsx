import { useDispatch } from 'react-redux';
import { toggleCartAction } from '../../store/cardReducer';

export const CartCard = ({card}) => {
	const dispatch = useDispatch();
	const { id, image, title, price} = card;
	const formatedPrice = new Intl.NumberFormat('ru-RU').format(price);

	const toggleCart = () => {
		dispatch(toggleCartAction(id));
	};

	return (
		<div className="drawer__card-item card card--cart">
			<img className="card__image" src={image} width="133" height="112" />
			<span className="card__title">{title}</span>
			<div className="card__price-block">
				<span className="card__price-value">{formatedPrice} руб.</span>
			</div>
			<button className="card__button card__button--remove" onClick={toggleCart}>
				<img className="card__button-icon" src="img/btn-remove.svg" width="32" height="32"/>
			</button>
		</div>
	);
};