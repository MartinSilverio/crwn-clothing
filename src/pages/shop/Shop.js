import React, { useEffect } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

import CollectionsOverviewContainer from '../../components/collections-overview/CollectionsOverviewContainer';
import CollectionPageContainer from '../collection/CollectionPageContainer';

import { fetchCollectionsStart } from '../../redux/shop/shopActions';

function Shop({ match, fetchCollectionsStart }) {
  useEffect(() => {
    fetchCollectionsStart();
  }, [fetchCollectionsStart]);

  return (
    <div className='shop-page'>
      <Route
        exact
        path={`${match.path}`}
        component={CollectionsOverviewContainer}
      />
      <Route
        path={`${match.path}/:collectionId`}
        component={CollectionPageContainer}
      />
    </div>
  );
}

const mapDispatchToProps = (dispatch) => ({
  fetchCollectionsStart: () => dispatch(fetchCollectionsStart()),
});

export default connect(null, mapDispatchToProps)(Shop);

// componentDidMount() {
// const { updateCollections } = this.props;
// const collectionRef = firestore.collection('collections');
// Promise style access to snapshot, but is not live like the observable pattern
// collectionRef.get().then((snapshot) => {
//   const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
//   console.log(collectionsMap);
//   updateCollections(collectionsMap);
//   this.setState({ loading: false });
// })
// Fetch method for getting data
// fetch(
//   'https://firestore.googleapis.com/v1/projects/crwn-db-2976e/databases/(default)/documents/collections'
// )
//   .then((response) => response.json())
//   .then((collections) => console.log(collections));
// collectionRef.onSnapshot(async (snapshot) => {
//   const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
//   console.log(collectionsMap);
//   updateCollections(collectionsMap);
//   this.setState({ loading: false });
// });

// }
