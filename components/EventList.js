import React from 'react';
import { Link } from 'react-router-dom';

const EventList = ({ events }) => {
  return (
    <div>
      <h2>Yaklaşan Etkinlikler</h2>
      <ul>
        {events.map(event => (
          <li key={event.id}>
            <Link to={`/events/${event.id}`}>{event.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EventList;
