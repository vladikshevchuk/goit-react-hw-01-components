import PropTypes from 'prop-types';
import css from './Statistics.module.css';
import Stat from './Stat';

export default function Statistics({ title, data }) {
  return (
    <section className={css.statistics}>
      {title ? <h2 className="title">{ title }</h2> : <h2 className="title">Upload stats</h2> }

      <ul className={css.statList}>
        {data.map(stat => (
          <Stat key={stat.id} label={stat.label} percentage={stat.percentage} />
        ))}
      </ul>
    </section>
  );
}

Statistics.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  title: PropTypes.string,
};
