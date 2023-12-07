export const SuccessDrawer = ({ isActive, drawerCloser}) => {
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
				<div className="drawer__message message-block message-block--success">
					<img className="message-block__image" src="img/order.jpg" width="83" height="120" />
					<h3 className="message-block__title">Заказ оформлен!</h3>
					<span className="message-block__desc">Ваш заказ скоро будет передан курьерской доставке</span>
					<button className="message-block__button button button--back" onClick={drawerCloser}>
						<span className="button__text">Вернуться назад</span>
						<img className="button__icon" src="img/arrow.svg" width="14" height="12" />
					</button>
				</div>
			</div>
		</div>
	);
};