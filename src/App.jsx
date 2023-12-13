import './App.css';
import { Header } from './components/Header/Header';
import { Layout } from './pages/layout/layout';
// import { Drawer } from './components/Drawer/Drawer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

function App() {
	const dispatch = useDispatch();
	const cards = useSelector(state => state.cards.cards);
	const filteredCards = useSelector(state => state.cards.filteredCards);

	return (
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
							cards={cards} 
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
				{/* {drawerState ? <Drawer/> : <></>} */}
			</div>
		</BrowserRouter>
	);
}

export default App;
