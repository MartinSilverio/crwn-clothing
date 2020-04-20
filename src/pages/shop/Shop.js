import React, { Component } from 'react';
import CollectionPreview from '../../components/collection-preview/CollectionPreview';

import data from '../../data';

class Shop extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collections: data,
    };
  }

  render() {
    const { collections } = this.state;
    return (
      <div>
        {collections.map(({ id, ...otherCollectionProps }) => (
          <CollectionPreview key={id} {...otherCollectionProps} />
        ))}
      </div>
    );
  }
}

export default Shop;
