import { Dispatch } from 'redux'
import { isAxiosError } from 'axios'
import { setAppError } from '../../app/app-reducer.ts'

export const handleError = (e: unknown, dispatch: Dispatch) => {
  let errorMessage = ''
  if (isAxiosError<ServerError>(e)) {
    // case-1, case-2
    errorMessage = e.response
      ? e.response.data.errorMessages[0].message // case-1
      : e.message // case-2
  } else {
    // case-3
    errorMessage = (e as Error).message
  }

  dispatch(setAppError(errorMessage))
}

type ServerError = {
  errorMessages: Array<{
    message: string
    field: string
  }>
}
