import { useFormContext } from 'react-hook-form'

import { CompleteOrderFormType } from '@/pages/Cart'
import { TextField } from '@/components/TextField'

import { AddressFormContainer } from './styles'

export function AddressForm() {
  const {
    register,
    formState: { errors },
  } = useFormContext<CompleteOrderFormType>()

  return (
    <AddressFormContainer>
      <TextField
        placeholder="CEP"
        className="cep"
        {...register('cep')}
        textError={errors.cep?.message}
      />

      <TextField
        placeholder="Rua"
        className="street"
        {...register('street')}
        textError={errors.street?.message}
      />

      <TextField
        placeholder="Número"
        {...register('number', { valueAsNumber: true })}
        textError={errors.number?.message}
      />

      <TextField
        placeholder="Complemento"
        isOptional={true}
        className="complement"
        {...register('complement')}
        textError={errors.complement?.message}
      />

      <TextField
        placeholder="Bairro"
        {...register('neighborhood')}
        textError={errors.neighborhood?.message}
      />

      <TextField
        placeholder="Cidade"
        {...register('city')}
        textError={errors.city?.message}
      />

      <TextField
        placeholder="UF"
        {...register('uf')}
        textError={errors.uf?.message}
      />
    </AddressFormContainer>
  )
}
