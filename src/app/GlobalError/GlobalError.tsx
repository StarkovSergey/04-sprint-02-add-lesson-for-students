import { useEffect } from 'react'
import { toast, ToastContainer } from 'react-toastify'

export const GlobalError = () => {
  const errorMessage = ''

  useEffect(() => {
    if (errorMessage) {
      toast.error(errorMessage)
    }
  }, [errorMessage])

  return <ToastContainer theme="dark" autoClose={3000} />
}
