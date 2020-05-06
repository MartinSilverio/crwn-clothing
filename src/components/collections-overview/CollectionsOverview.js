import React from 'react';

import CollectionPreview from '../collection-preview/CollectionPreview';
import './CollectionsOverview.scss';

function CollectionsOverview({ collections }) {
  return (
    <div className='collections-overview'>
      {collections.map(({ id, ...otherCollectionProps }) => (
        <CollectionPreview key={id} {...otherCollectionProps} />
      ))}
    </div>
  );
}

export default CollectionsOverview;
