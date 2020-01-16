import React from 'react';
import './App.scss';
import { connect } from 'react-redux';
import { Title, Header, GridView, Card, ListView, ListItem, Footer } from './components';

const App = ({ photos }) => {
  // const selection1 = photos.
  return (
    <div className="App">
      <Header className='header-container' />
      <div className='content-container'>
        <Title title='Hot Tickets' />
        <GridView children={photos.map(photo => <Card photo={photo} key={photo.id} />)} />
        <Title title='Upcoming Events' />
        <ListView children={photos.map(photo => <ListItem photo={photo} key={photo.id} />)} />
      </div>
      <Footer />
    </div>
  )
};

const mapStateToProps = (state) => ({
  photos: state
});

export default connect(mapStateToProps)(App)