export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
}

export const products = [
  {
    id: 1,
    name: 'Aplicativo Delivery',
    price: 799,
    description: 'Um aplicativo voltado a comércios'
  },
  {
    id: 2,
    name: 'Aplicativo Barbearia',
    price: 699,
    description: 'Sua barbearia de cara nova'
  },
  {
    id: 3,
    name: 'Aplicativo escola',
    price: 299,
    description: 'Um novo conceito em ensinar'
  }
];


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/