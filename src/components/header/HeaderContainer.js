import React from 'react';
import { Query } from 'react-apollo';
import { gql } from 'apollo-boost';

import Header from './Header';

const GET_CART_HIDDEN = gql`
  {
    cartHidden @client
  }
`;

function HeaderContainer() {
  return (
    <Query query={GET_CART_HIDDEN}>
      {({ data: { cartHidden } }) => <Header hidden={cartHidden} />}
    </Query>
  );
}

export default HeaderContainer;
