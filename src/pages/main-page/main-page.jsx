import { useEffect, useState } from 'react';
import { CardList } from '../../components/CardList.jsx/CardList';
import { Drawer } from '../../components/Drawer/Drawer';
import { Header } from '../../components/Header/Header';
import { Main } from '../../components/Main/Main';
import { PageWrapper } from '../../components/PageWrapper/PageWrapper';
import { Search } from '../../components/Search/Search';

export const MainPage = ({updatedCards, setUpdatedCards}) => {
	const [drawerState, setDrawerState] = useState(false);
	const [searchState, setSearchState] = useState('');

	useEffect(() => {
		const filteredCards = updatedCards.filter(card => card.title.toLowerCase().includes(searchState.toLowerCase()));
		setUpdatedCards(filteredCards);
	}, [searchState]);
    
	const drawerStateChanger = (isDrawerActive) => {
		setDrawerState(isDrawerActive);
	};

	const favChanger = (id) => {
		const card = updatedCards.find(card => card.id === id);
		const updatedCard = {...card, isFavorite: !card.isFavorite};
		const index = updatedCards.findIndex(card => card.id === id);
        
		setUpdatedCards([...updatedCards.slice(0, index), updatedCard, ...updatedCards.slice(index + 1)]);
	};

	return (
		<PageWrapper>
			<Header onChange={drawerStateChanger}/>
			<Main>
				<h1 className="page-content__title page-title">Все кроссовки</h1>
				<Search searchState={searchState} onChange={setSearchState}/>
				<CardList cards={updatedCards} favChanger={favChanger}/>
			</Main>
			<Drawer isActive={drawerState} onChange={setDrawerState}/>
		</PageWrapper>
	);
};