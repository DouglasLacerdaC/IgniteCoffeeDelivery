import { CartContext } from '@/contexts/CartContext'
import { useContext } from 'react'

export function useCart() {
  return useContext(CartContext)
}
