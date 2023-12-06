import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { MainPage } from './pages/main-page/main-page';
import { sneakers } from '../mock-data/mock-data';
import { FavoritesPage } from './pages/favorites-page/favorites-page';
import { OrdersPage } from './pages/orders-page/orders-page';
import { useState } from 'react';


function App() {
	const [updatedCards, setUpdatedCards] = useState(sneakers);

	const router = createBrowserRouter([
		{
			path: '/',
			element: <MainPage updatedCards={updatedCards} setUpdatedCards={setUpdatedCards} />
		},
		{
			path: '/favorites',
			element: <FavoritesPage updatedCards={updatedCards} setUpdatedCards={setUpdatedCards}/>
		},
		{
			path: '/orders',
			element: <OrdersPage updatedCards={updatedCards} setUpdatedCards={setUpdatedCards}/>
		}
	]);
	

	return (
		<RouterProvider router={router} />
	);
}

export default App;
