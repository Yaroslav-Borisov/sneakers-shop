import { nanoid } from 'nanoid';
import { sneakers } from '../../mock-data/mock-data';
import { ActionTypes } from '../consts';

const defaultState = {
	cards: [...sneakers],
	orderedCards: [],
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
	case ActionTypes.TOGGLE_CART: {
		const index = state.cards.findIndex((card) => card.id === action.payload);
		const oldCard = state.cards[index];
		const newCard = {
			...oldCard,
			isCart: !oldCard.isCart
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
	case ActionTypes.ORDER_CARDS: {
		const orderedCards = action.payload.map((card) => {
			return {
				...card,
				isCart: false,
				id: nanoid()
			};
		});

		return {
			...state,
			cards: state.cards.map((card) => {
				if (card.isCart) {
					card.isCart = false;
				}
				return card;
			}),
			orderedCards: [...state.orderedCards, ...orderedCards]
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

export const toggleCartAction = (payload) => {
	return {
		type: ActionTypes.TOGGLE_CART,
		payload
	};
};

export const orderCardsAction = (payload) => {
	return {
		type: ActionTypes.ORDER_CARDS,
		payload
	};
};
