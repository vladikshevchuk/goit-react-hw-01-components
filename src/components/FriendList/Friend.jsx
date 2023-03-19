import PropTypes from 'prop-types';

export default function Friend({ isOnline, avatar, name }) {
  return (
    <li className="item">
          <span className="status">{ isOnline }</span>
      <img className="avatar" src={avatar} alt="User avatar" width="48" />
      <p className="name">{name}</p>
    </li>
  );
}

Friend.propTypes = {
    isOnline: PropTypes.bool.isRequired,
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
}
