import { CardList } from '../../components/CardList/CardList';
import { Search } from '../../components/Search/Search';

export const Layout = ({cards, title, hasSearch}) => {
	return (
		<main className="page-content">
			<h1 className="page-content__title page-title">{title}</h1>
			{hasSearch ? <Search/> : ''}
			<CardList cards={cards}/>
		</main>
	);
};