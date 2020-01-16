import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import { createStore } from 'redux';
import { Provider } from 'react-redux'
import photoReducer from './redux/reducers/photosReducer';
import { setPhotos } from './redux/actions/actions';
import './index.scss';
import App from './App';

const store = createStore(
  photoReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

axios.get('https://picsum.photos/v2/list?page=4&limit=6')
  .then((response) => store.dispatch(setPhotos(response.data)))

// axios.get('https://picsum.photos/v2/list?page=8&limit=3')

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'));