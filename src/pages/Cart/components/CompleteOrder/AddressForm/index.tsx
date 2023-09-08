import { AddressFormContainer, Input } from './styles'

export function AddressForm() {
  return (
    <AddressFormContainer>
      <Input className="cpf">
        <input placeholder="CPF" />
      </Input>

      <Input className="street">
        <input placeholder="Rua" />
      </Input>

      <Input>
        <input placeholder="Número" />
      </Input>

      <Input className="complement">
        <input placeholder="Complemento" />
        <span>Opcional</span>
      </Input>

      <Input>
        <input placeholder="Bairro" />
      </Input>

      <Input>
        <input placeholder="Cidade" />
      </Input>

      <Input>
        <input placeholder="UF" />
      </Input>
    </AddressFormContainer>
  )
}
