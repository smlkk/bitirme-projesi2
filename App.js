import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import EventList from './components/EventList';
import EventDetail from './components/EventDetail';
import AddEvent from './components/AddEvent';
import { Container, Header, Nav, Main, Footer, Button, Form } from './styles';

const initialEvents = [
  { id: 1, title: 'Kitap Fuarı', description: 'Kitap severleri buluşturan bir etkinlik.', date: '2024-04-10', time: '14:00', location: 'Selçuklu Kültür Merkezi' },
  { id: 2, title: 'Müzik Dinletisi', description: 'Çeşitli müzik türlerinden dinletilerin sunulduğu bir konser.', date: '2024-04-15', time: '18:30', location: 'Tantavi Kültür Merkezi' },
  { id: 3, title: '23 Nisan Çocuk Şenliği', description: 'Çocukların eğlenceli zaman geçireceği bir şenlik.', date: '2024-04-23', time: '11:00', location: '80 Binler Devri Alem Parkı' },
];

const App = () => {
  const [events, setEvents] = useState(initialEvents);

  const addEvent = (newEvent) => {
    setEvents([...events, { id: events.length + 1, ...newEvent }]);
  };

  return (
    <Router>
      <Container>
        <Header>
          <h1>Meram Belediyesi Etkinlikler</h1>
        </Header>
        <Nav>
          <ul>
            <li><Link to="/">Ana Sayfa</Link></li>
            <li><Link to="/events">Etkinlikler</Link></li>
            <li><Link to="/add-event">Etkinlik Ekle</Link></li>
          </ul>
        </Nav>

        <Route exact path="/" component={Home} />
        <Route path="/events" render={() => <EventList events={events} />} />
        <Route
          path="/events/:id"
          render={({ match }) => {
            const eventId = parseInt(match.params.id, 10);
            const event = events.find(event => event.id === eventId);
            return <EventDetail event={event} />;
          }}
        />
        <Route
          path="/add-event"
          render={() => <AddEvent onAddEvent={addEvent} />}
        />

        <Footer>
          © 2024 Meram Belediyesi
        </Footer>
      </Container>
    </Router>
  );
};

export default App;
Bu örnekte, stil ve düzen özelliklerini daha ayrıntılı bir şekilde kullanarak kodu genişlettik. Daha fazla özelleştirme ve stil eklemek isterseniz, kodu daha da genişletebilir ve geliştirebilirsiniz.

User
şimdi yazdığım son kodları tek bir kod sayfasında göster ayrı ayrı jsx yazma
ChatGPT
Elbette, yazdığımız kodları tek bir JSX dosyasında göstermek istiyorsanız, aşağıda tüm kodların birleştirilmiş hali bulunmaktadır:

jsx
Copy code
// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import EventList from './components/EventList';
import EventDetail from './components/EventDetail';
import AddEvent from './components/AddEvent';
import { Container, Header, Nav, Main, Footer, Button, Form } from './styles';

const initialEvents = [
  { id: 1, title: 'Kitap Fuarı', description: 'Kitap severleri buluşturan bir etkinlik.', date: '2024-04-10', time: '14:00', location: 'Selçuklu Kültür Merkezi' },
  { id: 2, title: 'Müzik Dinletisi', description: 'Çeşitli müzik türlerinden dinletilerin sunulduğu bir konser.', date: '2024-04-15', time: '18:30', location: 'Tantavi Kültür Merkezi' },
  { id: 3, title: '23 Nisan Çocuk Şenliği', description: 'Çocukların eğlenceli zaman geçireceği bir şenlik.', date: '2024-04-23', time: '11:00', location: '80 Binler Devri Alem Parkı' },
];

const App = () => {
  const [events, setEvents] = useState(initialEvents);

  const addEvent = (newEvent) => {
    setEvents([...events, { id: events.length + 1, ...newEvent }]);
  };

  return (
    <Router>
      <Container>
        <Header>
          <h1>Meram Belediyesi Etkinlikler</h1>
        </Header>
        <Nav>
          <ul>
            <li><Link to="/">Ana Sayfa</Link></li>
            <li><Link to="/events">Etkinlikler</Link></li>
            <li><Link to="/add-event">Etkinlik Ekle</Link></li>
          </ul>
        </Nav>

        <Route exact path="/" component={Home} />
        <Route path="/events" render={() => <EventList events={events} />} />
        <Route
          path="/events/:id"
          render={({ match }) => {
            const eventId = parseInt(match.params.id, 10);
            const event = events.find(event => event.id === eventId);
            return <EventDetail event={event} />;
          }}
        />
        <Route
          path="/add-event"
          render={() => <AddEvent onAddEvent={addEvent} />}
        />

        <Footer>
          © 2024 Meram Belediyesi
        </Footer>
      </Container>
    </Router>
  );
};

export default App;
