import { useLocation, useNavigate } from 'react-router-dom'
import { CompletedOrder } from './components/CompletedOrder'
import { MotorcyclistSVG } from './components/MotorcyclistSVG'

import { SuccessPageContainer } from './styles'
import { useEffect } from 'react'

export function SuccessPage() {
  const { state } = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    if (!state) {
      return navigate('/')
    }
  }, [])

  return (
    <>
      {state && (
        <SuccessPageContainer>
          <CompletedOrder />
          <MotorcyclistSVG />
        </SuccessPageContainer>
      )}
    </>
  )
}
