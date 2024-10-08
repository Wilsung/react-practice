import classes from './EventsList.module.css';
import { Link } from 'react-router-dom';

function EventsList({ events }) {
  return (
    <div className={classes.events}>
      <h1>All Events</h1>
      <p>Sample url: https://cdn.mos.cms.futurecdn.net/HdD8pngF8jQNHGtUxdjZ2o.jpg</p>
      <ul className={classes.list}>
        {events.map((event) => (
          <li key={event.id} className={classes.item}>
            <Link to={`/events/${event.id}`}>
              <img src={event.image} alt={event.title} />
              <div className={classes.content}>
                <h2>{event.title}</h2>
                <time>{event.date}</time>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default EventsList;
