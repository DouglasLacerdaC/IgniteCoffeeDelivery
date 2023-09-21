export function formatNumberForMoney(number: number) {
  return number.toLocaleString('pt-br', {
    style: 'decimal',
    minimumFractionDigits: 2,
  })
}
