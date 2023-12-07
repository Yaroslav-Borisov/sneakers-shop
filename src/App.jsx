import './App.css';
import { Header } from './components/Header/Header';
import { Layout } from './pages/layout/layout';
import { sneakers } from '../mock-data/mock-data';
import { Drawer } from './components/Drawer/Drawer';

function App() {

	return (
		<div className="page-wrapper">
			<Header/>
			<Layout cards={sneakers} title={'Все кроссовки'} hasSearch={true}/>
			<Drawer/>
		</div>
	);
}

export default App;
