import React from 'react';
import { Route } from 'react-router-dom';

import { default as CollectionOverview } from '../../components/collections-overview/CollectionsOverviewContainer';
import { default as CollectionPage } from '../collection/CollectionPageContainer';

function Shop({ match }) {
  return (
    <div className='shop-page'>
      <Route exact path={`${match.path}`} component={CollectionOverview} />
      <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
    </div>
  );
}

export default Shop;
