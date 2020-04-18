import React from 'react';
import Directory from '../../components/directory/Directory';
import './Homepage.scss';

function Homepage(props) {
  console.log(props);
  return (
    <div className='homepage'>
      <Directory />
    </div>
  );
}

export default Homepage;
