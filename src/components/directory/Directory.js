import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import MenuItem from '../menu-item/MenuItem';
import { selectDirectorySections } from '../../redux/directory/directorySelectors';
import './Directory.scss';

function Directory({ sections }) {
  return (
    <div className='directory-menu'>
      {sections.map(({ id, ...otherSectionProps }) => (
        <MenuItem key={id} {...otherSectionProps}></MenuItem>
      ))}
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections,
});

export default connect(mapStateToProps)(Directory);
