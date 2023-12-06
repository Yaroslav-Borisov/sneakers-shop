
export const Search = ({searchState, onChange}) => {

	const inputChanger = (evt) => {
		onChange(evt.target.value.trim());
	};

	return (
		<div className="page-content__search search">
			<img className="search__icon" src="img/search.svg" width="14" height="`4" />
			<input className="search__field" type="search" placeholder="Поиск" value={searchState} onChange={inputChanger}/>
		</div>
	);
};