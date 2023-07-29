import { BaseTable, THead, Th, Tr, Td } from './CryptoHistory.styled';

import { formateDate } from 'helpers/formateDateTransactions';

export const CryptoHistory = ({ transactionsData }) => {
  return (
    <BaseTable>
      <THead>
        <tr>
          <Th>№</Th>
          <Th>PRICE</Th>
          <Th>AMOUNT</Th>
          <Th>DATE</Th>
        </tr>
      </THead>

      <tbody>
        {transactionsData.map((el, index) => (
          <Tr>
            <Td>{index + 1}</Td>
            <Td>{el.price}</Td>
            <Td>{el.amount}</Td>
            <Td>{formateDate(el.date)}</Td>
          </Tr>
        ))}
      </tbody>
    </BaseTable>
  );
};
