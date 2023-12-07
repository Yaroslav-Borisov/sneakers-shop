import { useContext } from 'react';
import { AppContext } from '../../context/app.context';

export const Search = () => {
	const { setSearchInputText, searchInputText } = useContext(AppContext);

	const inputChangeHandler = (evt) => {
		setSearchInputText(evt.target.value.trim());
	};

	return (

		<div className="page-content__search search">
			<img className="search__icon" src="img/search.svg" width="14" height="`4" />
			<input className="search__field" type="search" placeholder="Поиск" value={searchInputText} onChange={inputChangeHandler}/>
		</div>
	);
};