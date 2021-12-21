export const getBalance = (transactions) => {
  const { income, outcome } = transactions.reduce(
    (accumulator, transaction) => {
      const priceIncome = Number(transaction.price);
      const priceOutcome = Number(transaction.price);
      switch (transaction.transaction) {
        case 'income':
          accumulator.income += priceIncome;
          break;
        case 'outcome':
          accumulator.outcome += priceOutcome;
          break;
        default:
          break;
      }
      return accumulator;
    },
    {
      income: 0,
      outcome: 0,
      total: 0,
    },
  );

  const total = income - outcome;

  return { income, outcome, total };
};
