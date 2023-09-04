import { Deck } from './decks-api.ts'

const initialState = {
  decks: [] as Deck[],
  searchParams: {
    name: '',
  },
}

type DecksState = typeof initialState

export const decksReducer = (state: DecksState = initialState, action: DecksActions): DecksState => {
  switch (action.type) {
    case 'DECKS/SET-DECKS':
      return {
        ...state,
        decks: action.decks,
      }
    case 'DECKS/ADD-DECK':
      return {
        ...state,
        decks: [action.deck, ...state.decks],
      }
    case 'DECKS/DELETE-DECK':
      return {
        ...state,
        decks: state.decks.filter((deck) => deck.id !== action.id),
      }
    case 'DECKS/UPDATE-DECK':
      return {
        ...state,
        decks: state.decks.map((deck) => (deck.id === action.updatedDeck.id ? action.updatedDeck : deck)),
      }
    default:
      return state
  }
}

type DecksActions =
  | ReturnType<typeof setDecksAC>
  | ReturnType<typeof addDeckAC>
  | ReturnType<typeof deleteDeckAC>
  | ReturnType<typeof updateDeckAC>

export const setDecksAC = (decks: Deck[]) => ({
  type: 'DECKS/SET-DECKS' as const,
  decks,
})
export const addDeckAC = (deck: Deck) => ({
  type: 'DECKS/ADD-DECK' as const,
  deck,
})

export const deleteDeckAC = (id: string) => ({
  type: 'DECKS/DELETE-DECK' as const,
  id,
})

export const updateDeckAC = (updatedDeck: Deck) => ({
  type: 'DECKS/UPDATE-DECK' as const,
  updatedDeck,
})
