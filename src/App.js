import React from 'react';
import './App.scss';
import { connect } from 'react-redux';
import { Header, ListView, Footer } from './components';
import { filterData } from './components/filter';

const App = ({ hotTickets, upcomingEvents, filter }) => {
  return (
    <div className="App">
      <Header className='header-container' />
      <div className='content-container'>
        <ListView
          title='Hot Tickets'
          GridView
          data={filterData(hotTickets, filter)}
        />
        <ListView
          title='Upcoming Events'
          data={filterData(upcomingEvents, filter)}
        />
      </div>
      <Footer />
    </div>
  )
};

const mapStateToProps = (state) => ({
  hotTickets: state.hotTickets,
  upcomingEvents: state.upcomingEvents,
  filter: state.filter
});

export default connect(mapStateToProps)(App)
