import React from 'react';
import { Query } from 'react-apollo';
import { gql } from 'apollo-boost';

import CollectionsOverView from './CollectionsOverview';
import Spinner from '../spinner/Spinner';

const GET_COLLECTIONS = gql`
  {
    collections {
      id
      title
      items {
        id
        name
        price
        imageUrl
      }
    }
  }
`;

function CollectionsOverviewContainer() {
  return (
    <Query query={GET_COLLECTIONS}>
      {({ loading, error, data }) => {
        console.log({ loading });
        console.log({ error });
        console.log({ data });
        if (loading) return <Spinner />;
        return <CollectionsOverView collections={data.collections} />;
      }}
    </Query>
  );
}

export default CollectionsOverviewContainer;
