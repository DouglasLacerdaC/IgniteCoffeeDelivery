export interface CoffeeType {
  id: number
  imageUrl: string
  tags: string[]
  name: string
  description: string
  price: number
}

export const coffees: CoffeeType[] = [
  {
    id: 1,
    imageUrl: 'coffees/expresso.png',
    tags: ['Tradicional'],
    name: 'Expresso Tradicional',
    description: 'O tradicional café feito com água quente e grãos moídos',
    price: 4.5,
  },
  {
    id: 2,
    imageUrl: 'coffees/americano.png',
    tags: ['Tradicional'],
    name: 'Expresso Americano',
    description: 'Expresso diluído, menos intenso que o tradicional',
    price: 2.3,
  },
  {
    id: 3,
    imageUrl: 'coffees/americano-cremoso.png',
    tags: ['Tradicional'],
    name: 'Expresso Cremoso',
    description: 'Café expresso tradicional com espuma cremosa',
    price: 3.5,
  },
  {
    id: 4,
    imageUrl: 'coffees/cafe-gelado.png',
    tags: ['Tradicional', 'gelado'],
    name: 'Expresso Gelado',
    description: 'Bebida preparada com café expresso e cubos de gelo',
    price: 3.9,
  },
  {
    id: 5,
    imageUrl: 'coffees/cafe-com-leite.png',
    tags: ['Tradicional', 'com leite'],
    name: 'Café com Leite',
    description: 'Meio a meio de expresso tradicional com leite vaporizado',
    price: 2.5,
  },
  {
    id: 6,
    imageUrl: 'coffees/latte.png',
    tags: ['Tradicional', 'com leite'],
    name: 'Latte',
    description:
      'Uma dose de café expresso com o dobro de leite e espuma cremosa',
    price: 2.9,
  },
  {
    id: 7,
    imageUrl: 'coffees/capuccino.png',
    tags: ['Tradicional', 'com leite'],
    name: 'Capuccino',
    description:
      'Bebida com canela feita de doses iguais de café, leite e espuma',
    price: 4.5,
  },
  {
    id: 8,
    imageUrl: 'coffees/macchiato.png',
    tags: ['Tradicional', 'com leite'],
    name: 'Macchiato',
    description:
      'Café expresso misturado com um pouco de leite quente e espuma',
    price: 4.7,
  },
  {
    id: 9,
    imageUrl: 'coffees/mocaccino.png',
    tags: ['Tradicional', 'com leite'],
    name: 'Mocaccino',
    description: 'Café expresso com calda de chocolate, pouco leite e espuma',
    price: 4.7,
  },
  {
    id: 10,
    imageUrl: 'coffees/chocolate-quente.png',
    tags: ['Especial', 'com leite'],
    name: 'Chocolate Quente',
    description: 'Bebida feita com chocolate dissolvido no leite quente e café',
    price: 5.5,
  },
  {
    id: 11,
    imageUrl: 'coffees/cubano.png',
    tags: ['Especial', 'alcoólico', 'gelado'],
    name: 'Cubano',
    description:
      'Drink gelado de café expresso com rum, creme de leite e hortelã',
    price: 6.5,
  },
  {
    id: 12,
    imageUrl: 'coffees/havaiano.png',
    tags: ['Especial'],
    name: 'Havaiano',
    description: 'Bebida adocicada preparada com café e leite de coco',
    price: 7.5,
  },
  {
    id: 13,
    imageUrl: 'coffees/arabe.png',
    tags: ['Especial', 'alcoólico'],
    name: 'Árabe',
    description: 'Bebida preparada com grãos de café árabe e especiarias',
    price: 7,
  },
  {
    id: 14,
    imageUrl: 'coffees/irlandes.png',
    tags: ['Especial'],
    name: 'Irlandês',
    description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
    price: 9.5,
  },
]
