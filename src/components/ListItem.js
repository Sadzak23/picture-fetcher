import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';

export const ListItem = ({ photo }) => {
  return (
    <div className='list-item'>
      <div style={{ display: 'flex' }}>
        <img src={photo.download_url} alt={`A photo by ${photo.author}`} className='list-img' />
        <div className='list-date'>
          <p>FEB</p>
          <h4>12</h4>
        </div>
        <div>
          <p className='list-time'>Mon - 19:30</p>
          <p className='list-author'>{photo.author}</p>
          <h4>Width: {photo.width}, Height: {photo.height}</h4>
        </div>
      </div>
      <a href={photo.url} target='_blank'>
        <button className='list-btn'>Find pics
          <FontAwesomeIcon icon={faAngleRight} size='xs' />
        </button>
      </a>
    </div>
  )
}

