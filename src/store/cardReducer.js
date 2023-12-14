import { sneakers } from '../../mock-data/mock-data';
import { ActionTypes } from '../consts';

const defaultState = {
	cards: [...sneakers],
	search: ''
};

export const cardReducer = (state = defaultState, action) => {
	switch (action.type) {
	case ActionTypes.SET_SEARCH_TEXT: {
		return {
			...state,
			search: action.payload
		};
	}
	case ActionTypes.TOGGLE_FAVORITES: {
		const index = state.cards.findIndex((card) => card.id === action.payload);
		const oldCard = state.cards[index];
		const newCard = {
			...oldCard,
			isFavorite: !oldCard.isFavorite
		};

		return {
			...state,
			cards: [
				...state.cards.slice(0, index),
				newCard,
				...state.cards.slice(index + 1)
			]
		};
	}
	default:
		return state;
	}
};

export const setSearchAction = (payload) => ({
	type: ActionTypes.SET_SEARCH_TEXT,
	payload
});

export const toggleFavoritesAction = (payload) => {
	return {
		type: ActionTypes.TOGGLE_FAVORITES,
		payload
	};
};
