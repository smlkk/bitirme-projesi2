import React, { useState } from 'react';

const AddEvent = ({ onAddEvent }) => {
  const [newEvent, setNewEvent] = useState({ title: '', description: '', date: '', time: '', location: '' });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewEvent({ ...newEvent, [name]: value });
  };

  const handleAddEvent = () => {
    onAddEvent(newEvent);
    setNewEvent({ title: '', description: '', date: '', time: '', location: '' });
  };

  return (
    <div>
      <h2>Yeni Etkinlik Ekle</h2>
      <form>
        <label>Başlık:
          <input type="text" name="title" value={newEvent.title} onChange={handleInputChange} />
        </label>
        <label>Açıklama:
          <textarea name="description" value={newEvent.description} onChange={handleInputChange} />
        </label>
        <label>Tarih:
          <input type="date" name="date" value={newEvent.date} onChange={handleInputChange} />
        </label>
        <label>Saat:
          <input type="time" name="time" value={newEvent.time} onChange={handleInputChange} />
        </label>
        <label>Yer:
          <input type="text" name="location" value={newEvent.location} onChange={handleInputChange} />
        </label>
        <button type="button" onClick={handleAddEvent}>Etkinlik Ekle</button>
      </form>
    </div>
  );
};

export default AddEvent;
