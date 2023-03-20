import PropTypes from 'prop-types';
import { TableRow, TableLine } from './TransactionHistory.styled';

export default function Transaction({type, amount, currency}) {
  return (
    <TableLine>
      <TableRow>{type}</TableRow>
      <TableRow>{amount}</TableRow>
      <TableRow>{currency}</TableRow>
    </TableLine>
  );
}

Transaction.propTypes = {
    type: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired,
}
