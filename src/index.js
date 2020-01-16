import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import { createStore } from 'redux';
import { Provider } from 'react-redux'
import photoReducer from './redux/reducers/reducers';
import { setList1, setList2 } from './redux/actions/actions';
import './index.scss';
import App from './App';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

const store = createStore(
  photoReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

axios.get('https://picsum.photos/v2/list?page=4&limit=6')
  .then(response => store.dispatch(setList1(response.data)))
  .then(() => {
    axios.get('https://picsum.photos/v2/list?page=10&limit=3')
      .then(response => store.dispatch(setList2(response.data)))
      .then(() =>
        ReactDOM.render(
          <Provider store={store}>
            <App />
          </Provider>,
          document.getElementById('root'))
      )
  })


ReactDOM.render(
  <div className='loader-container'>
    <FontAwesomeIcon icon={faSpinner} size="3x" className='loader' spin />
  </div>
  , document.getElementById('root'));
