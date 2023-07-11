import PropTypes from 'prop-types';
import css from './Statistics.module.css';

function getRandomColor() {
    let x = Math.floor(Math.random() * 256);
    let y = Math.floor(Math.random() * 256);
    let z = Math.floor(Math.random() * 256);
    const randomColor = "rgb(" + x + "," + y + "," + z + ")";
    return randomColor;
}

export const Statistics = ({ title, stats }) => {
  return (
    <section className={css.statistics}>
      <>{title && <h2 className={css.title}>{title}</h2>}</>
      <ul className={css.items}>
        {stats.map(stat => (
          <li
            key={stat.id}
            className={css.item}
            style={{
              backgroundColor: getRandomColor(),
              color: 'white',
            }}
          >
            <span className="label">{stat.label}</span>
            <span className={css.percentage}>{stat.percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    docx: PropTypes.number,
    mp3: PropTypes.number,
    pdf: PropTypes.number,
    mp4: PropTypes.number,
  }).isRequired,
};