import React, { useCallback, useState, useEffect, useRef } from 'react';
import { FiChevronLeft, FiChevronRight, FiTrash2 } from 'react-icons/fi';
import { Form } from '@unform/web';
import * as Yup from 'yup';
import { uuid } from 'uuidv4';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

import Input from '../../components/Form/input';
import api from '../../services/api';
import { getBalance } from '../../utils/getBalance';
import { formatValue } from '../../utils/formatValue';

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
  InputContainer,
  DivForm,
  ButtonAddFinance,
  TableContainer,
  DivPages,
} from './styles';

const Finances = () => {
  const formRef = useRef(null);

  const [transactionFinance, setTransactionFinance] = useState('');
  const [transactions, setTransactions] = useState([]);
  const [updateData, setUpdateData] = useState(true);
  const [balance, setBalance] = useState({});
  const [page, setPage] = useState(0);
  const rowsPerPage = 6;

  useEffect(() => {
    async function loadTransactions() {
      const response = await api.get('/serverFinances');

      const servers = response.data;
      const transactonsFormatted = servers.map((server) => ({
        ...server,
        formattedValue: formatValue(server.price),
      }));

      setTransactions(transactonsFormatted);
      const gBalance = getBalance(response.data);

      const balanceFormatted = {
        income: formatValue(gBalance.income),
        outcome: formatValue(gBalance.outcome),
        total: formatValue(gBalance.total),
      };

      setBalance(balanceFormatted);
      setUpdateData(true);
    }

    loadTransactions();
  }, [updateData]);

  const handleIncome = useCallback(() => {
    setTransactionFinance('income');
  }, []);

  const handleOutcome = useCallback(() => {
    setTransactionFinance('outcome');
  }, []);

  async function handleSubmit(data, { reset }) {
    try {
      const schema = Yup.object().shape({
        titleFinance: Yup.string().required('Título é obrigatório'),
        priceFinance: Yup.string().required('Valor é obrigatório'),
        categoryFinance: Yup.string().required('Categoria é obrigatória'),
        dateFinance: Yup.string().required('Data é obrigatória'),
      });

      await schema.validate(data, {
        abortEarly: false,
      });

      const dataServer = {
        id: uuid(),
        title: data.titleFinance,
        transaction: transactionFinance,
        price: data.priceFinance,
        category: data.categoryFinance,
        date: data.dateFinance,
      };

      await api.post('/serverFinances', dataServer);

      reset();
    } catch (err) {
      if (err instanceof Yup.ValidationError) {
        const errorMessages = {};

        err.inner.forEach((error) => {
          errorMessages[error.path] = error.message;
          toast.error(errorMessages[error.path]);
        });

        formRef.current.setErrors(errorMessages);
      }
    }
  }

  const handleNextPage = useCallback(() => {
    setPage(page + 1);
  }, [page]);

  const handlePreviousPage = useCallback(() => {
    setPage(page - 1);
  }, [page]);

  const firstLinePage = page === 0 ? 1 : page * rowsPerPage + 1;

  const calcLastLinePage = page === 0 ? 6 : page * rowsPerPage + rowsPerPage;

  const restPage = transactions.length % rowsPerPage;

  const lastPage = transactions.length / rowsPerPage;

  const lastLinePage =
    lastPage < page + 1 ? firstLinePage + restPage - 1 : calcLastLinePage;

  async function handleDelete(id) {
    setUpdateData(false);

    await api.delete(`/serverFinances/${id}`);
  }

  return (
    <Container>
      <Header />
      <ToastContainer />
      <Content>
        <CardContainer>
          <Card>
            <header>
              <p>Entradas</p>
              <img src={income} alt="Income" />
            </header>
            <h1 data-testid="balance-income" className="income">
              {balance.income}
            </h1>
          </Card>
          <Card>
            <header>
              <p>Saídas</p>
              <img src={outcome} alt="Outcome" />
            </header>
            <h1 data-testid="balance-outcome" className="outcome">
              {balance.outcome}
            </h1>
          </Card>
          <Card>
            <header>
              <p>Total</p>
              <img src={total} alt="Total" />
            </header>
            <h1 data-testid="balance-total" className="total">
              {balance.total}
            </h1>
          </Card>
        </CardContainer>

        <InputContainer>
          <h1>Adicionar finanças</h1>
          <DivForm>
            <Form ref={formRef} onSubmit={handleSubmit}>
              <Input
                name="titleFinance"
                placeholder="Digite o título da finança"
                className="inputText"
                autoComplete="off"
              />
              <Input
                name="priceFinance"
                placeholder="R$ 0,00"
                className="inputValue"
                autoComplete="off"
              />
              <Input
                name="categoryFinance"
                placeholder="Digite a categoria da finança"
                className="inputText"
                autoComplete="off"
              />
              <Input
                name="dateFinance"
                type="date"
                placeholder="Digite a data da finança"
                className="inputValue"
                autoComplete="off"
              />
              <div id="divRadioAndButton">
                <div className="inputsRadio">
                  <label htmlFor="income">
                    <input
                      name="transactionFinance"
                      type="radio"
                      id="income"
                      value="income"
                      onClick={handleIncome}
                    />
                    Entrada
                    <img src={income} alt="Income" />
                  </label>
                  <label htmlFor="outcome">
                    <input
                      name="transactionFinance"
                      type="radio"
                      id="outcome"
                      value="outcome"
                      onClick={handleOutcome}
                    />
                    Saída
                    <img src={outcome} alt="Outcome" />
                  </label>
                </div>
                <ButtonAddFinance type="submit">Salvar</ButtonAddFinance>
              </div>
            </Form>
          </DivForm>
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
              {transactions
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((transaction) => (
                  <tr key={transaction.id}>
                    <td className="title">{transaction.title}</td>
                    <td className={transaction.transaction}>
                      {'income' === 'outcome' && '- '}
                      {transaction.formattedValue}
                    </td>
                    <td>{transaction.category}</td>
                    <td>{transaction.date}</td>
                    <td className="trash">
                      <button
                        type="button"
                        onClick={() => handleDelete(transaction.id)}
                      >
                        <FiTrash2 size={20} />
                      </button>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </TableContainer>

        <DivPages>
          <p>{`${firstLinePage} - ${lastLinePage} de ${transactions.length}`}</p>
          <button
            type="button"
            disabled={page === 0}
            onClick={handlePreviousPage}
          >
            <FiChevronLeft />
          </button>
          <p>{page + 1}</p>
          <button
            type="button"
            disabled={
              lastPage < page + 1 || lastLinePage === transactions.length
            }
            onClick={handleNextPage}
          >
            <FiChevronRight />
          </button>
        </DivPages>
      </Content>
      <Footer />
    </Container>
  );
};

export default Finances;
