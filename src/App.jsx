import './App.css';
import { Header } from './components/Header/Header';
import { Layout } from './pages/layout/layout';
import { sneakers } from '../mock-data/mock-data';
import { Drawer } from './components/Drawer/Drawer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AppContext } from './context/app.context';
import { useEffect, useState } from 'react';
import { ChangeEvents } from './consts';

function App() {
	const [updatedCards, setUpdatedCards] = useState(sneakers);
	const [filteredCards, setFilteredCards] = useState(updatedCards);
	const [orderedCards, setOrderedCards] = useState([]);

	const [searchInputText, setSearchInputText] = useState('');
	const [drawerState, setDrawerState] = useState(false);
	const [orderState, setOrderState] = useState(false);

	useEffect(() => {
		setFilteredCards(updatedCards.filter(card => card.title.toLowerCase().includes(searchInputText.toLowerCase())));
	}, [searchInputText, updatedCards]);

	const cardChanger = (id, changeEvent) => {
		const card = updatedCards.find(card => card.id === id);
		const index = updatedCards.findIndex(card => card.id === id);

		switch (changeEvent) {
		case ChangeEvents.ToggleCart:
			setUpdatedCards([...updatedCards.slice(0, index), {...card, isCart: !card.isCart}, ...updatedCards.slice(index + 1)]);
			break;
		case ChangeEvents.ToggleFav:
			setUpdatedCards([...updatedCards.slice(0, index), {...card, isFavorite: !card.isFavorite}, ...updatedCards.slice(index + 1)]);
			break;
		}
	};

	return (
		<AppContext.Provider value={{searchInputText, setSearchInputText, updatedCards, setUpdatedCards, orderedCards, setOrderedCards, cardChanger, setDrawerState, orderState, setOrderState}}>
			<BrowserRouter>
				<div className="page-wrapper">
					<Header/>
					<Routes>
						<Route
							path='/'
							element={<Layout 
								cards={filteredCards} 
								title={'Все кроссовки'} 
								hasSearch={true}/>}
						/>
						<Route
							path='/favorites'
							element={<Layout 
								cards={updatedCards.filter(card => card.isFavorite)} 
								title={'Избранные кроссовки'} 
								hasSearch={false}/>}
						/>
						<Route
							path='/orders'
							element={<Layout 
								cards={orderedCards} 
								title={'Мои заказы'} 
								hasSearch={false}/>}
						/>
					</Routes>
					{drawerState ? <Drawer/> : <></>}
				</div>
			</BrowserRouter>
		</AppContext.Provider>
	);
}

export default App;
