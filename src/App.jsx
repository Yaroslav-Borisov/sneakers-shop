import './App.css';
import { Header } from './components/Header/Header';
import { Layout } from './pages/layout/layout';
import { sneakers } from '../mock-data/mock-data';
import { Drawer } from './components/Drawer/Drawer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {

	return (
		<BrowserRouter>
			<div className="page-wrapper">
				<Header/>
				<Routes>
					<Route
						path='/'
						element={<Layout cards={sneakers} title={'Все кроссовки'} hasSearch={true}/>}
					/>
					<Route
						path='/favorites'
						element={<Layout cards={sneakers} title={'Избранные кроссовки'} hasSearch={false}/>}
					/>
					<Route
						path='/orders'
						element={<Layout cards={sneakers} title={'Мои заказы'} hasSearch={false}/>}
					/>
				</Routes>
				<Drawer/>
			</div>
		</BrowserRouter>
	);
}

export default App;
