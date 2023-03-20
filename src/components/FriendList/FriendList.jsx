import PropTypes from 'prop-types';
import { Friends } from './Friend.styled';
import Friend from './Friend';

export default function FriendList({ friends }) {
  return (
    <Friends>
      {friends.map(friend => (
        <Friend
          isOnline={friend.isOnline}
          avatar={friend.avatar}
          name={friend.name}
          key={friend.id}
        />
      ))}
    </Friends>
  );
}

FriendList.propTypes = {
  friends: PropTypes.array,
};
