import React from 'react';

const EventDetail = ({ event }) => {
  return (
    <div>
      <h2>{event.title}</h2>
      <p>{event.description}</p>
      <p>Tarih: {event.date}</p>
      <p>Saat: {event.time}</p>
      <p>Yer: {event.location}</p>
    </div>
  );
};

export default EventDetail;
