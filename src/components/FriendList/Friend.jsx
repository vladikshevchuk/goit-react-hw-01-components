import PropTypes from 'prop-types';
import { Item, UserName, Status } from './Friend.styled';

export default function Friend({ isOnline, avatar, name }) {
  return (
    <Item>
      <Status isOnline={isOnline}></Status>
      <img className="avatar" src={avatar} alt="User avatar" width="48" />
      <UserName>{name}</UserName>
    </Item>
  );
}

Friend.propTypes = {
  isOnline: PropTypes.bool.isRequired,
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};
