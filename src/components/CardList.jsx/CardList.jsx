import { Card } from '../Card/Card';

export const CardList = ({cards, favChanger}) => {
	return (
		<>
			{cards.length > 0 ? 
				<div className="page-content__list card-list">
					{cards.map((card) => <Card card={card} key={card.id} favChanger={favChanger}/>)}
				</div> : 
				<h2>К сожалению, по вашему запросу ничего не найдено...</h2>
			}
		</>
	);
};