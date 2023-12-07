import { Card } from '../Card/Card';

export const CardList = ({cards}) => {
	return (
		<>
			{cards.length > 0 ? 
				<div className="page-content__list card-list">
					{cards.map((card) => <Card card={card} key={card.id}/>)}
				</div> : 
				<h2 className='page-content__list'>Пока здесь пусто...</h2>
			}
		</>
	);
};