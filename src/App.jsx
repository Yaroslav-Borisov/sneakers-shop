import './App.css';
import { Header } from './components/Header/Header';
import { Layout } from './pages/layout/layout';
import { sneakers } from '../mock-data/mock-data';
import { Drawer } from './components/Drawer/Drawer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AppContext } from './context/app.context';
import { useEffect, useState } from 'react';

function App() {
	const [updatedCards, setUpdatedCards] = useState(sneakers);
	const [filteredCards, setFilteredCards] = useState(updatedCards);
	const [searchInputText, setSearchInputText] = useState('');

	useEffect(() => {
		setFilteredCards(updatedCards.filter(card => card.title.toLowerCase().includes(searchInputText.toLowerCase())));
	}, [searchInputText, updatedCards]);

	return (
		<AppContext.Provider value={{searchInputText, setSearchInputText, updatedCards, setUpdatedCards}}>
			<BrowserRouter>
				<div className="page-wrapper">
					<Header/>
					<Routes>
						<Route
							path='/'
							element={<Layout cards={filteredCards} title={'Все кроссовки'} hasSearch={true}/>}
						/>
						<Route
							path='/favorites'
							element={<Layout cards={updatedCards} title={'Избранные кроссовки'} hasSearch={false}/>}
						/>
						<Route
							path='/orders'
							element={<Layout cards={updatedCards} title={'Мои заказы'} hasSearch={false}/>}
						/>
					</Routes>
					<Drawer/>
				</div>
			</BrowserRouter>
		</AppContext.Provider>
	);
}

export default App;
