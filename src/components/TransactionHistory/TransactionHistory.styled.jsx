import styled from '@emotion/styled';

export const Table = styled.table`
  width: 800px;
  margin: 50px auto 30px;
`;

export const Caption = styled.th`
  padding: 20px 0;
  background-color: aqua;
`;

export const TableRow = styled.td`
  padding: 10px;
  text-align: center;
`;

export const TableLine = styled.tr`
  :nth-child(even) {
    background-color: #f2f2f2;
  }
`;
