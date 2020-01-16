import React from 'react';
import './App.scss';
import { connect } from 'react-redux';
import { Header, ListView, Footer } from './components';

const filterData = (data, text) => {
  const include = e => e.toString().toLowerCase().includes(text.toLowerCase())
  if (!!text) {
    return data.filter(e => include(e.author, text) || include(e.width, text) || include(e.height, text))
  } return data
}

const App = ({ state }) => {
  return (
    <div className="App">
      <Header className='header-container' />
      <div className='content-container'>
        <ListView
          title='Hot Tickets'
          GridView
          data={filterData(state.list1, state.filter)}
        />
        <ListView
          title='Upcoming Events'
          data={filterData(state.list2, state.filter)}
        />
      </div>
      <Footer />
    </div>
  )
};

const mapStateToProps = (state) => ({
  state
});

export default connect(mapStateToProps)(App)
