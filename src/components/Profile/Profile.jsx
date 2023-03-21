import PropTypes from 'prop-types';
import css from './Profile.module.css';

export default function Profile({ avatar, username, tag, location, stats }) {
  return (
    <div className={css.profile}>
      <div className="description">
        <img
          src={avatar}
          alt="User avatar"
          className={css.avatar}
        />
        <p className="name">{username}</p>
        <p className={css.tag}>{tag}</p>
        <p className={css.location}>{location}</p>
      </div>

      <ul className={css.stats}>
        <li className={css.statItem}>
          <span className={css.lable}>Followers</span>
          <span className="quantity">{stats.followers}</span>
        </li>
        <li className={css.statItem}>
          <span className={css.lable}>Views</span>
          <span className="quantity">{stats.views}</span>
        </li>
        <li className={css.statItem}>
          <span className={css.lable}>Likes</span>
          <span className={css.quantity}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
}

Profile.propTypes = {
  avatar: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  followers: PropTypes.number.isRequired,
  views: PropTypes.number.isRequired,
  likes: PropTypes.number.isRequired,
}
