import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt, faArchway } from '@fortawesome/free-solid-svg-icons';

export const Card = ({ photo }) => (
  <div className='card'>
    <a href={photo.url} target='_blank'>
      <div className='card-img-container'>
        <img src={photo.download_url} alt={`A photo by ${photo.author}`} className='card-img' />
        <p className='card-author'>{photo.author}</p>
      </div>
    </a>
    <div className='card-info-container'>
      <div className='card-info'>
        <FontAwesomeIcon icon={faCalendarAlt} className='card-info-icon' />
        <p className='card-info-text'>Height: {photo.height}</p>
      </div>
      <div className='card-info'>
        <FontAwesomeIcon icon={faArchway} className='card-info-icon' />
        <p className='card-info-text'>Width: {photo.width}</p>
      </div>
    </div>
  </div>
)