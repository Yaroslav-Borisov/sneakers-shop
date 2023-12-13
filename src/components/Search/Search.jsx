import { filterCardsAction } from '../../store/cardReducer';
import { useDispatch } from 'react-redux';

export const Search = () => {
	const dispatch = useDispatch();

	const inputChangeHandler = (evt) => {
		dispatch(filterCardsAction(evt.target.value.trim()));
	};

	return (

		<div className="page-content__search search">
			<img className="search__icon" src="img/search.svg" width="14" height="`4" />
			<input className="search__field" type="search" placeholder="Поиск" onChange={inputChangeHandler}/>
		</div>
	);
};