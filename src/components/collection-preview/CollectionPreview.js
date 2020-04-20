import React from 'react';
import CollectionItem from '../collection-item/CollectionItem';
import './CollectionPreview.scss';

function CollectionPreview({ title, items }) {
  return (
    <div className='collection-preview'>
      <h1>{title.toUpperCase()}</h1>
      <div className='preview'>
        {items
          .filter((item, ndx) => ndx < 4)
          .map(({ id, ...otherItemProps }) => (
            <CollectionItem key={id} {...otherItemProps} />
          ))}
      </div>
    </div>
  );
}

export default CollectionPreview;
