import Axios from 'axios';

const mockResponse = [
  {
    product: {
      id: '6bf22773-882c-4dd5-9926-2065fb555f7c',
      code: 'DJVDSD13',
      name: 'Sabonete nivea',
      value: 320,
      created_at: '2021-06-06T14:58:47.352422Z',
      updated_at: null,
    },
    quantity: 2,
    total_value: 640,
  },
  {
    product: {
      id: '3c19bace-24e1-4ccd-92c4-221e1bee4be0',
      code: 'UHSGH12',
      name: 'Amendoin Japones',
      value: 542,
      created_at: '2021-06-06T14:58:47.358542Z',
      updated_at: null,
    },
    quantity: 2,
    total_value: 1084,
  },
  {
    product: {
      id: '3c19bace-24e1-4ccd-92c4-221e1bee4be0',
      code: 'UHSGH12',
      name: 'Amendoin Japones',
      value: 542,
      created_at: '2021-06-06T14:58:47.358542Z',
      updated_at: null,
    },
    quantity: 2,
    total_value: 1084,
  },
  {
    product: {
      id: '3c19bace-24e1-4ccd-92c4-221e1bee4be0',
      code: 'UHSGH12',
      name: 'Amendoin Japones',
      value: 542,
      created_at: '2021-06-06T14:58:47.358542Z',
      updated_at: null,
    },
    quantity: 2,
    total_value: 1084,
  },
  {
    product: {
      id: '3c19bace-24e1-4ccd-92c4-221e1bee4be0',
      code: 'UHSGH12',
      name: 'Amendoin Japones',
      value: 542,
      created_at: '2021-06-06T14:58:47.358542Z',
      updated_at: null,
    },
    quantity: 2,
    total_value: 1084,
  },
  {
    product: {
      id: '3c19bace-24e1-4ccd-92c4-221e1bee4be0',
      code: 'UHSGH12',
      name: 'Amendoin Japones',
      value: 542,
      created_at: '2021-06-06T14:58:47.358542Z',
      updated_at: null,
    },
    quantity: 2,
    total_value: 1084,
  },
  {
    product: {
      id: '3c19bace-24e1-4ccd-92c4-221e1bee4be0',
      code: 'UHSGH12',
      name: 'Amendoin Japones',
      value: 542,
      created_at: '2021-06-06T14:58:47.358542Z',
      updated_at: null,
    },
    quantity: 2,
    total_value: 1084,
  },
  {
    product: {
      id: '3c19bace-24e1-4ccd-92c4-221e1bee4be0',
      code: 'UHSGH12',
      name: 'Amendoin Japones',
      value: 542,
      created_at: '2021-06-06T14:58:47.358542Z',
      updated_at: null,
    },
    quantity: 2,
    total_value: 1084,
  },
  {
    product: {
      id: '3c19bace-24e1-4ccd-92c4-221e1bee4be0',
      code: 'UHSGH12',
      name: 'Amendoin Japones',
      value: 542,
      created_at: '2021-06-06T14:58:47.358542Z',
      updated_at: null,
    },
    quantity: 2,
    total_value: 1084,
  },
  {
    product: {
      id: '3c19bace-24e1-4ccd-92c4-221e1bee4be0',
      code: 'UHSGH12',
      name: 'Amendoin Japones',
      value: 542,
      created_at: '2021-06-06T14:58:47.358542Z',
      updated_at: null,
    },
    quantity: 2,
    total_value: 1084,
  },
  {
    product: {
      id: '3c19bace-24e1-4ccd-92c4-221e1bee4be0',
      code: 'UHSGH12',
      name: 'Amendoin Japones',
      value: 542,
      created_at: '2021-06-06T14:58:47.358542Z',
      updated_at: null,
    },
    quantity: 2,
    total_value: 1084,
  },
  {
    product: {
      id: '3c19bace-24e1-4ccd-92c4-221e1bee4be0',
      code: 'UHSGH12',
      name: 'Amendoin Japones',
      value: 542,
      created_at: '2021-06-06T14:58:47.358542Z',
      updated_at: null,
    },
    quantity: 2,
    total_value: 1084,
  },
  {
    product: {
      id: '3c19bace-24e1-4ccd-92c4-221e1bee4be0',
      code: 'UHSGH12',
      name: 'Amendoin Japones',
      value: 542,
      created_at: '2021-06-06T14:58:47.358542Z',
      updated_at: null,
    },
    quantity: 2,
    total_value: 1084,
  },
  {
    product: {
      id: '3c19bace-24e1-4ccd-92c4-221e1bee4be0',
      code: 'UHSGH12',
      name: 'Amendoin Japones',
      value: 542,
      created_at: '2021-06-06T14:58:47.358542Z',
      updated_at: null,
    },
    quantity: 2,
    total_value: 1084,
  },
  {
    product: {
      id: '3c19bace-24e1-4ccd-92c4-221e1bee4be0',
      code: 'UHSGH12',
      name: 'Amendoin Japones',
      value: 542,
      created_at: '2021-06-06T14:58:47.358542Z',
      updated_at: null,
    },
    quantity: 2,
    total_value: 1084,
  },
  {
    product: {
      id: '3c19bace-24e1-4ccd-92c4-221e1bee4be0',
      code: 'UHSGH12',
      name: 'Amendoin Japones',
      value: 542,
      created_at: '2021-06-06T14:58:47.358542Z',
      updated_at: null,
    },
    quantity: 2,
    total_value: 1084,
  },
  {
    product: {
      id: '3c19bace-24e1-4ccd-92c4-221e1bee4be0',
      code: 'UHSGH12',
      name: 'Amendoin Japones',
      value: 542,
      created_at: '2021-06-06T14:58:47.358542Z',
      updated_at: null,
    },
    quantity: 2,
    total_value: 1084,
  },
  {
    product: {
      id: '3c19bace-24e1-4ccd-92c4-221e1bee4be0',
      code: 'UHSGH12',
      name: 'Amendoin Japones',
      value: 542,
      created_at: '2021-06-06T14:58:47.358542Z',
      updated_at: null,
    },
    quantity: 2,
    total_value: 1084,
  },
  {
    product: {
      id: '3c19bace-24e1-4ccd-92c4-221e1bee4be0',
      code: 'UHSGH12',
      name: 'Amendoin Japones',
      value: 542,
      created_at: '2021-06-06T14:58:47.358542Z',
      updated_at: null,
    },
    quantity: 2,
    total_value: 1084,
  },
];

export const getProducts = async () => {
  try {
    // TODO: Alterar a rota para a verdadeira
    const response = await Axios.get(`http://localhost:3000/products`);
    const { data } = response;
    return data;
  } catch (e) {
    // TODO: Alerar para um array vazio
    return mockResponse;
  }
};
