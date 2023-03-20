import styled from '@emotion/styled';

export const Friends = styled.ul`
  list-style: none;
  padding: 0;
  width: 300px;
  margin: 50px auto 0;
`;

export const Item = styled.li`
  display: flex;
  align-items: center;
  margin: 10px 10px 0;
  box-shadow: 0px 0px 5px 2px rgba(0, 0, 0, 0.2);
  padding: 7px;
`;

export const UserName = styled.p`
  margin-left: 30px;
  font-weight: bold;
`;

export const Status = styled.span`
  width: 15px;
  height: 15px;
  margin: 0 10px;
  border-radius: 50%;
  background-color: ${props => (
    props.isOnline ? 'green' : 'red'
  )};
`;
