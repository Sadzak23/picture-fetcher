import React, { useState } from 'react';
import { Title } from './Title';
import { ListItem } from './ListItem';
import { Card } from './Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTh, faList, faSortAmountDown } from '@fortawesome/free-solid-svg-icons';

export const ListView = ({ title, GridView, data }) => {
  const [isGridView, setIsGridView] = useState(GridView)
  const onViewChange = () => setIsGridView(!isGridView)
  return (
    <div>
      <div className='view-title-container'>
        <Title title={title} />
        <div>
          <button onClick={onViewChange} className='title-btn'>
          <FontAwesomeIcon icon={isGridView ? faList : faTh} size='lg' />
          </button>
        </div>
      </div>
      <div className={isGridView && 'grid'}>
        {data.map((photo, index) =>
          isGridView ?
            <Card photo={photo} key={photo.id} /> :
            <div key={photo.id}>
              <ListItem photo={photo} />
              {index !== data.length - 1 && <hr />}
            </div>
        )}
      </div>
    </div>
  )
}

