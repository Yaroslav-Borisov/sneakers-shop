import { useContext } from 'react';
import { AppContext } from '../../context/app.context';
import { CartCard } from '../CartCard/CartCard';

export const Drawer = () => {
	const {updatedCards, setUpdatedCards, setDrawerState, orderState, setOrderState} = useContext(AppContext);

	const cartCards = updatedCards.filter(card => card.isCart);

	const priceSum = cartCards.map(card => card.price).reduce((sum, current) => sum + current, 0);
	const tax = Math.trunc(priceSum * 5 / 100);
	const formatedPriceSum = new Intl.NumberFormat('ru-RU').format(priceSum);
	const formatedtax = new Intl.NumberFormat('ru-RU').format(tax);

	const closeDrawer = () => {
		setDrawerState(false);
		setOrderState(false);
	};

	const makeOrderDone = () => {
		const resetedCards = updatedCards.map((card) => {
			if (card.isCart) {
				card.isCart = false;
			}
			return card;
		});

		setUpdatedCards(resetedCards);
		setOrderState(true);
	};

	return (
		<>
			<div className="page-drawer drawer drawer--active">
				<div className="drawer__overlay"></div>
				<div className="drawer__body">
					<div className="drawer__header">
						<h2 className="drawer__title">Корзина</h2>
						<button className="drawer__close" onClick={closeDrawer}>
							<img className="card__close-icon" src="img/btn-remove.svg" width="32" height="32" />
						</button>
					</div>
					{orderState ? 
						<div className="drawer__message message-block message-block--success">
							<img className="message-block__image" src="img/order.jpg" width="83" height="120" />
							<h3 className="message-block__title">Заказ оформлен!</h3>
							<span className="message-block__desc">Ваш заказ скоро будет передан курьерской доставке</span>
							<button className="message-block__button button button--back" onClick={closeDrawer}>
								<span className="button__text">Вернуться назад</span>
								<img className="button__icon" src="img/arrow.svg" width="14" height="12" />
							</button>
						</div>  :
						cartCards.length === 0 ?
							<div className="drawer__message message-block">
								<img className="message-block__image" src="img/box.jpg" width="120" height="120"/>
								<h3 className="message-block__title">Корзина пустая</h3>
								<span className="message-block__desc">Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ.</span>
								<button className="message-block__button button button--back" onClick={closeDrawer}>
									<span className="button__text">Вернуться назад</span>
									<img className="button__icon" src="img/arrow.svg" width="14" height="12"/>
								</button>
							</div>
							:
							<div className="drawer__main">
								<div className="drawer__card-list">
									{cartCards.map(card => <CartCard card={card} key={card.id}/>)}
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
								<button className="drawer__button button" onClick={makeOrderDone}>
									<span className="button__text">Оформить заказ</span>
									<img className="button__icon" src="img/arrow.svg" width="14" height="12"/>
								</button>
							</div>
					}
				</div>
			</div>
		</>
	);
};