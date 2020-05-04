import React, { useContext } from 'react';

import CollectionPreview from '../collection-preview/CollectionPreview';
import CollectionsContext from '../../context/collections/collectionsContext';
import './CollectionsOverview.scss';

function CollectionsOverview() {
  const collectionsMap = useContext(CollectionsContext);
  const collections = Object.keys(collectionsMap).map(
    (key) => collectionsMap[key]
  );

  return (
    <div className='collections-overview'>
      {collections.map(({ id, ...otherCollectionProps }) => (
        <CollectionPreview key={id} {...otherCollectionProps} />
      ))}
    </div>
  );
}

export default CollectionsOverview;
