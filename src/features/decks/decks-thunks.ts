import { Dispatch } from 'redux'
import { decksAPI, UpdateDeckParams } from './decks-api.ts'
import { addDeckAC, deleteDeckAC, setDecksAC, updateDeckAC } from './decks-reducer.ts'
import { setAppError, setAppStatus } from '../../app/app-reducer.ts'
import { isAxiosError } from 'axios'
import { handleError } from '../../common/utils/handle-error.ts'

export const fetchDecksTC = () => async (dispatch: Dispatch) => {
  dispatch(setAppStatus('loading'))
  try {
    const res = await decksAPI.fetchDecks()
    dispatch(setDecksAC(res.data.items))
    dispatch(setAppStatus('succeeded'))
  } catch (e) {
    dispatch(setAppStatus('failed'))
  }
}

export const addDeckTC = (name: string) => async (dispatch: Dispatch) => {
  return decksAPI.addDeck(name).then((res) => {
    dispatch(addDeckAC(res.data))
  })
}

export const deleteDeckTC = (id: string) => (dispatch: Dispatch) => {
  return decksAPI.deleteDeck(id).then((res) => {
    dispatch(deleteDeckAC(res.data.id))
  })
}

// 1. ошибка запроса - бэкенд возвращает ответ с statusCode (400) -  axios создаёт объект ошибки; помещает его в err.response.data
// 2. network error - axios создаёт объект ошибки, текст ошибки в err.message
// 3. синхронные - создаётся JS. текст ошибки в err.message

export const updateDeckTC = (params: UpdateDeckParams) => async (dispatch: Dispatch) => {
  try {
    const res = await decksAPI.updateDeck(params)
    dispatch(updateDeckAC(res.data))
  } catch (e) {
    handleError(e, dispatch)
  }
}
