import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { MainPage } from './pages/main-page/main-page';
import { sneakers } from '../mock-data/mock-data';
import { FavoritesPage } from './pages/favorites-page/favorites-page';
import { OrdersPage } from './pages/orders-page/orders-page';
import { useState } from 'react';


function App() {
	const [updatedCards, setUpdatedCards] = useState(sneakers);
	const [orderState, setOrderState] = useState(false);

	const cartCards = updatedCards.filter(card => card.isCart);

	const cartChanger = (id) => {
		const card = updatedCards.find(card => card.id === id);
		const updatedCard = {...card, isCart: !card.isCart};
		const index = updatedCards.findIndex(card => card.id === id);
        
		setUpdatedCards([...updatedCards.slice(0, index), updatedCard, ...updatedCards.slice(index + 1)]);
	};

	if (orderState) {
		cartCards.map(card => cartChanger(card.id));
	}


	const router = createBrowserRouter([
		{
			path: '/',
			element: <MainPage 
				updatedCards={updatedCards} 
				setUpdatedCards={setUpdatedCards} 
				cartCards={cartCards}
				orderState={orderState}
				setOrderState={setOrderState}/>
		},
		{
			path: '/favorites',
			element: <FavoritesPage 
				updatedCards={updatedCards} 
				setUpdatedCards={setUpdatedCards} 
				cartCards={cartCards}
				orderState={orderState}
				setOrderState={setOrderState}/>
		},
		{
			path: '/orders',
			element: <OrdersPage 
				updatedCards={updatedCards} 
				setUpdatedCards={setUpdatedCards} 
				cartCards={cartCards}
				orderState={orderState}
				setOrderState={setOrderState}/>
		}
	]);
	

	return (
		<RouterProvider router={router} />
	);
}

export default App;
