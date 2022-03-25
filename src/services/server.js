import { createServer, Model } from 'miragejs';

createServer({
  models: {
    transaction: Model,
  },

  seeds(server) {
    server.db.loadData({
      transactions: [
        {
          id: 'fkljfasdljk',
          title: 'Titulo de teste',
          transaction: 'income',
          price: 12000,
          category: 'Minha categoria de teste da tabela',
          date: new Date('2021-02-12 09:00:00'),
        },
        {
          id: 'fkljfreasasdljk',
          title: 'Titulo de teste',
          transaction: 'income',
          price: 12000,
          category: 'Minha categoria de teste da tabela',
          date: new Date('2021-02-12 09:00:00'),
        },
        {
          id: 'fkljfasgasddljk',
          title: 'Titulo de teste',
          transaction: 'income',
          price: 12000,
          category: 'Minha categoria de teste da tabela',
          date: new Date('2021-02-12 09:00:00'),
        },
        {
          id: 'fkljfgasdasdljk',
          title: 'Titulo de teste',
          transaction: 'income',
          price: 12000,
          category:
            'Minha categoria de teste da tabela flkadsjkfhakjh fhsflkjhds fhfkjdshf ksjhfads',
          date: new Date('2021-02-12 09:00:00'),
        },
        {
          id: 'gagdsagag',
          title: 'Titulo de teste',
          transaction: 'income',
          price: 12000,
          category: 'Minha categoria de teste da tabela',
          date: new Date('2021-02-12 09:00:00'),
        },
        {
          id: 'fkldasfsajfasdljk',
          title: 'Titulo de teste',
          transaction: 'income',
          price: 12000,
          category: 'Minha categoria de teste da tabela',
          date: new Date('2021-02-12 09:00:00'),
        },
        {
          id: 'fkljfasdlgsadsafjk',
          title: 'Titulo de teste',
          transaction: 'income',
          price: 12000,
          category: 'Minha categoria de teste da tabela',
          date: new Date('2021-02-12 09:00:00'),
        },
        {
          id: 'fkljfasdlgsadgjk',
          title: 'Titulo de teste',
          transaction: 'income',
          price: 12000,
          category: 'Minha categoria de teste da tabela',
          date: new Date('2021-02-12 09:00:00'),
        },
      ],
    });
  },

  routes() {
    this.namespace = 'api';

    this.get('/transactions', () => this.schema.all('transaction'));

    this.post('/transactions', (schema, request) => {
      const data = JSON.parse(request.requestBody);

      return schema.create('transaction', data);
    });

    this.delete('/transactions/:id');
  },
});
