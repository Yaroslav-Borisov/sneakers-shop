import { useState } from 'react';
import { CardList } from '../../components/CardList.jsx/CardList';
import { Drawer } from '../../components/Drawer/Drawer';
import { Header } from '../../components/Header/Header';
import { Main } from '../../components/Main/Main';
import { PageWrapper } from '../../components/PageWrapper/PageWrapper';

export const FavoritesPage = ({updatedCards, setUpdatedCards, cartCards, orderState, setOrderState}) => {
	const [drawerState, setDrawerState] = useState(false);
	const favoriteCards = updatedCards.filter(card => card.isFavorite);

	const drawerStateChanger = (isDrawerActive) => {
		setDrawerState(isDrawerActive);
	};

	const favChanger = (id) => {
		const card = updatedCards.find(card => card.id === id);
		const updatedCard = {...card, isFavorite: !card.isFavorite};
		const index = updatedCards.findIndex(card => card.id === id);
        
		setUpdatedCards([...updatedCards.slice(0, index), updatedCard, ...updatedCards.slice(index + 1)]);
	};

	const cartChanger = (id) => {
		const card = updatedCards.find(card => card.id === id);
		const updatedCard = {...card, isCart: !card.isCart};
		const index = updatedCards.findIndex(card => card.id === id);
        
		setUpdatedCards([...updatedCards.slice(0, index), updatedCard, ...updatedCards.slice(index + 1)]);
	};

	return (
		<PageWrapper>
			<Header 
				cartCards={cartCards} 
				onChange={drawerStateChanger}/>
			<Main>
				<h1 className="page-content__title page-title">Мои закладки</h1>
				<CardList 
					cards={favoriteCards} 
					favChanger={favChanger}
					cartChanger={cartChanger}/>
			</Main>
			<Drawer 
				cartCards={cartCards} 
				isActive={drawerState}
				orderState={orderState}
				setOrderState={setOrderState} 
				onChange={setDrawerState} 
				removeCard={cartChanger}/>
		</PageWrapper>
	);
};