import { CompleteOrderFormType } from '@/pages/Cart'
import { AddressFormContainer, Input, InputWrapper, TextError } from './styles'
import { useFormContext } from 'react-hook-form'

export function AddressForm() {
  const {
    register,
    formState: { errors },
  } = useFormContext<CompleteOrderFormType>()

  return (
    <AddressFormContainer>
      <InputWrapper className={`cep ${errors?.cep ? 'error' : ''}`}>
        <Input>
          <input placeholder="CEP" {...register('cep')} />
        </Input>
        <TextError>{errors?.cep?.message}</TextError>
      </InputWrapper>
    </AddressFormContainer>
  )
}
