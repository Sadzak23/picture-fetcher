import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { connect } from 'react-redux';
import { setFilter } from '../redux/actions/actions';

export const SearchBar = ({ setFilter }) => {
  const [searchVal, setSearchVal] = useState('')
  const onSubmit = () => {
    setFilter(searchVal)
  }
  return (
    <div className='search-bar'>
      <input
        className='search-input'
        value={searchVal}
        onChange={e => setSearchVal(e.target.value)}
        type='text'
        placeholder='Search for artist, event or venue'
        onKeyPress={event => event.key === 'Enter' && onSubmit()}
      />
      <button type='submit' onClick={onSubmit} className='search-btn'>
        <FontAwesomeIcon icon={faSearch} size='lg' />
      </button>
    </div>
  )
}

const mapDispatchToProps = (dispatch) => ({
  setFilter: (text) => dispatch(setFilter(text))
})

export default connect(undefined, mapDispatchToProps)(SearchBar)