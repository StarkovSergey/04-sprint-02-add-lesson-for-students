import { AppRootState } from './store.ts'

export const selectAppStatus = (state: AppRootState) => state.app.status
export const selectAppError = (state: AppRootState) => state.app.error
