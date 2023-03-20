import PropTypes from 'prop-types';
import Transaction from './Transaction';
import { Table, Caption } from './TransactionHistory.styled';

export default function TransactionHistory({ transactions }) {
  return (
    <Table>
      <thead>
        <tr>
          <Caption>Type</Caption>
          <Caption>Amount</Caption>
          <Caption>Currency</Caption>
        </tr>
      </thead>

      <tbody>
        {transactions.map(transaction => (
          <Transaction
            key={transaction.id}
            type={transaction.type}
            amount={transaction.amount}
            currency={transaction.currency}
          />
        ))}
      </tbody>
    </Table>
  );
}

TransactionHistory.propTypes = {
    transactions: PropTypes.array.isRequired,
}
