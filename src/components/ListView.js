import React, { useState } from 'react';
import { Title } from './Title';
import { ListItem } from './ListItem';
import { Card } from './Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTh, faList, faSortAmountDown, faSortAmountDownAlt } from '@fortawesome/free-solid-svg-icons';

export const ListView = ({ title, GridView, data }) => {
  const [isGridView, setIsGridView] = useState(GridView)
  const [sort, setSort] = useState(null)
  const onViewChange = () => setIsGridView(!isGridView)
  const onSort = () => setSort(sort === 'asc' ? 'des' : 'asc')
  const sortedData = onSortBy(data, sort)
  return (
    <div>
      <div className='view-title-container'>
        <Title title={title} />
        <div>
          <button onClick={onSort} className='title-btn'>
            <FontAwesomeIcon icon={sort === 'asc' ? faSortAmountDownAlt : faSortAmountDown} size='lg' />
          </button>
          <button onClick={onViewChange} className='title-btn'>
            <FontAwesomeIcon icon={isGridView ? faList : faTh} size='lg' />
          </button>
        </div>
      </div>
      <div className={isGridView ? 'grid' : 'list'}>
        {sortedData.length > 0 ?
          sortedData.map((photo, index) =>
            isGridView ?
              <Card photo={photo} key={photo.id} /> :
              <div key={photo.id}>
                <ListItem photo={photo} />
                {index !== sortedData.length - 1 && <hr />}
              </div>
          ) :
          <p>No images match search text</p>
        }
      </div>
    </div>
  )
}

const onSortBy = (data, type) => {
  if (type === 'asc')
    return data.sort((a, b) => {
      return (a.width + a.height) < (b.width + b.height) ? 1 : -1
    })
  else if (type === 'des')
    return data.sort((a, b) => {
      return (a.width + a.height) > (b.width + b.height) ? 1 : -1
    })
  else return data
}

