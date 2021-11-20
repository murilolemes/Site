import React from 'react';

import Header from '../../components/Header';
import Footer from '../../components/Footer';

import income from '../../assets/income.svg';
import outcome from '../../assets/outcome.svg';
import total from '../../assets/total.svg';

import {
  Container,
  Content,
  CardContainer,
  Card,
  TableContainer,
  InputContainer,
  Inputs,
} from './styles';

// const [transactions, setTransactions] = useState([]);
// const [balance, setBalance] = useState({});

// useEffect(() => {
//   async function loadTransactions() {
//     const response = await api.get('/transactions');

//     const transactonsFormatted = response.data.transactions.map(
//       (transaction) => ({
//         ...transaction,
//         formattedValue: formatValue(transaction.value),
//         formattedDate: new Date(transaction.created_at).toLocaleDateString(
//           'pt-br',
//         ),
//       }),
//     );

//     setTransactions(transactonsFormatted);

//     const balanceFormatted = {
//       income: formatValue(response.data.balance.income),
//       outcome: formatValue(response.data.balance.outcome),
//       total: formatValue(response.data.balance.total),
//     };

//     setBalance(balanceFormatted);
//   }

//   loadTransactions();
// }, []);

const Finances = () => (
  <Container>
    <Header />
    <Content>
      <CardContainer>
        <Card>
          <header>
            <p>Entradas</p>
            <img src={income} alt="Income" />
          </header>
          <h1 className="income">100</h1>
        </Card>
        <Card>
          <header>
            <p>Saídas</p>
            <img src={outcome} alt="Outcome" />
          </header>
          <h1 className="outcome">200</h1>
        </Card>
        <Card total>
          <header>
            <p>Total</p>
            <img src={total} alt="Total" />
          </header>
          <h1 className="total">300</h1>
        </Card>
      </CardContainer>

      <InputContainer>
        <h1>Adicionar finanças</h1>
        <Inputs>
          <div>
            <input
              type="text"
              placeholder="Digite o título da finança"
              className="inputText"
            />
            <input
              type="text"
              placeholder="Digite o valor da finança"
              className="inputValue"
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="Digite a categoria da finança"
              className="inputText"
            />
            <input
              type="text"
              placeholder="Digite a data da finança"
              className="inputValue"
            />
          </div>
        </Inputs>
      </InputContainer>

      <TableContainer>
        <table>
          <thead>
            <tr>
              <th>Título</th>
              <th>Preço</th>
              <th>Categoria</th>
              <th>Data</th>
            </tr>
          </thead>

          <tbody>
            {/* {transactions.map((transaction) => ( */}
            <tr>
              <td className="title">compra</td>
              <td className="outcome">
                {'income' === 'outcome' && '- '}
                {100}
              </td>
              <td>Mercado</td>
              <td>20/09/2021</td>
            </tr>
            <tr>
              <td className="title">compra</td>
              <td className="outcome">
                {'income' === 'outcome' && '- '}
                {100}
              </td>
              <td>Mercado</td>
              <td>20/09/2021</td>
            </tr>
            <tr>
              <td className="title">compra</td>
              <td className="income">
                {'income' === 'outcome' && '- '}
                {100}
              </td>
              <td>Mercado</td>
              <td>20/09/2021</td>
            </tr>
            <tr>
              <td className="title">compra</td>
              <td className="outcome">
                {'income' === 'outcome' && '- '}
                {100}
              </td>
              <td>Mercado</td>
              <td>20/09/2021</td>
            </tr>
            <tr>
              <td className="title">compra</td>
              <td className="income">
                {'income' === 'outcome' && '- '}
                {100}
              </td>
              <td>Mercado</td>
              <td>20/09/2021</td>
            </tr>
            <tr>
              <td className="title">compra</td>
              <td className="outcome">
                {'income' === 'outcome' && '- '}
                {100}
              </td>
              <td>Mercado</td>
              <td>20/09/2021</td>
            </tr>
            {/* ))} */}
          </tbody>
        </table>
      </TableContainer>
    </Content>
    <Footer />
  </Container>
);

export default Finances;
