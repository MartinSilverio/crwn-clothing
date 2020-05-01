import React from 'react';
import Directory from '../../components/directory/Directory';

import { HomePageContainer } from './HomepageStyles';

function Homepage(props) {
  return (
    <HomePageContainer>
      <Directory />
    </HomePageContainer>
  );
}

export default Homepage;
