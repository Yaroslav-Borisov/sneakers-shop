import './App.css';
import { Header } from './components/Header/Header';
import { Layout } from './pages/layout/layout';
import { Drawer } from './components/Drawer/Drawer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useState } from 'react';

function App() {
	const [drawerState, setDrawerState] = useState(false);
	const cards = useSelector(state => state.cards.cards);
	const searchText = useSelector(state => state.cards.search);
	const filteredCards = cards.filter(card => card.title.toLowerCase().includes(searchText.toLowerCase()));

	return (
		<BrowserRouter>
			<div className="page-wrapper">
				<Header setDrawerState={setDrawerState}/>
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
							cards={filteredCards.filter(card => card.isFavorite)} 
							title={'Избранные кроссовки'} 
							hasSearch={false}/>}
					/>
					<Route
						path='/orders'
						element={<Layout 
							cards={cards} 
							title={'Мои заказы'} 
							hasSearch={false}/>}
					/>
				</Routes>
				{drawerState ? <Drawer setDrawerState={setDrawerState}/> : <></>}
			</div>
		</BrowserRouter>
	);
}

export default App;
