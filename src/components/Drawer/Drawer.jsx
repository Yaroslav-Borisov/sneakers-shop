export const Drawer = ({isActive, onChange}) => {

	const drawerCloser = (evt) => {
		evt.preventDefault();
		onChange(false);
	};

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
				<div className="drawer__message message-block">
					<img className="message-block__image" src="img/box.jpg" width="120" height="120"/>
					<h3 className="message-block__title">Корзина пустая</h3>
					<span className="message-block__desc">Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ.</span>
					<button className="message-block__button button button--back" onClick={drawerCloser}>
						<span className="button__text">Вернуться назад</span>
						<img className="button__icon" src="img/arrow.svg" width="14" height="12"/>
					</button>
				</div>
			</div>
		</div>
	);
};