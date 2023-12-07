import { CartCard } from '../CartCard/CartCard';

export const SimpleDrawer = ({ cartCards, makeOrder, isActive, drawerCloser, removeCard}) => {

	const priceSum = cartCards.map(card => card.price).reduce((sum, current) => sum + current, 0);
	const tax = Math.trunc(priceSum * 5 / 100);
	const formatedPriceSum = new Intl.NumberFormat('ru-RU').format(priceSum);
	const formatedtax = new Intl.NumberFormat('ru-RU').format(tax);

	return (
		<div className={isActive ? 'drawer drawer--active' : 'drawer'}>
			<div className="drawer__overlay"></div>
			<div className="drawer__body">
				<div className="drawer__header">
					<h2 className="drawer__title">Корзина</h2>
					<button className="drawer__close" onClick={drawerCloser}>
						<img className="card__close-icon" src="img/btn-remove.svg" width="32" height="32" />
					</button>
				</div>
				<div className="drawer__main">
					<div className="drawer__card-list">
						{cartCards.map(card => <CartCard card={card} key={card.id} removeCard={removeCard}/>)}
					</div>
					<div className="drawer__info-list">
						<div className="drawer__info-item">
							<span className="drawer__info-label">Итого:</span>
							<span className="drawer__info-separator"></span>
							<span className="drawer__info-value">{formatedPriceSum} руб.</span>
						</div>
						<div className="drawer__info-item">
							<span className="drawer__info-label">Налог 5%:</span>
							<span className="drawer__info-separator"></span>
							<span className="drawer__info-value">{formatedtax} руб.</span>
						</div>
					</div>
					<button className="drawer__button button" onClick={() => makeOrder(true)}>
						<span className="button__text">Оформить заказ</span>
						<img className="button__icon" src="img/arrow.svg" width="14" height="12"/>
					</button>
				</div>
			</div>
		</div>
	);
};