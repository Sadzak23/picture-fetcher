import React from 'react';
import './App.scss';
import { connect } from 'react-redux';
import { Header, ListView, Footer } from './components';

const App = ({ photos }) => {
  // const selection1 = photos.
  return (
    <div className="App">
      <Header className='header-container' />
      <div className='content-container'>
        <ListView
          title='Hot Tickets'
          GridView
          data={photos}
        />
        <ListView
          title='Upcoming Events'
          data={photos}
        />
      </div>
      <Footer />
    </div>
  )
};

const mapStateToProps = (state) => ({
  photos: state
});

export default connect(mapStateToProps)(App)