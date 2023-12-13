import { sneakers } from '../../mock-data/mock-data';
import { ActionTypes } from '../consts';

const defaultState = {
	cards: [...sneakers],
	filteredCards: [...sneakers]
};

export const cardReducer = (state = defaultState, action) => {
	switch (action.type) {
	case ActionTypes.FILTER_CARDS:
		return {
			...state,
			filteredCards: [...state.cards.filter(card => card.title.toLowerCase().includes(action.payload.toLowerCase()))]
		};
	default:
		return state;
	}
};

export const filterCardsAction = (payload) => ({
	type: ActionTypes.FILTER_CARDS,
	payload
});