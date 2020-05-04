import React, { useContext } from 'react';

import MenuItem from '../menu-item/MenuItem';
import DirectoryContext from '../../context/directory/directoryContext';
import './Directory.scss';

function Directory() {
  const { sections } = useContext(DirectoryContext);
  return (
    <div className='directory-menu'>
      {sections.map(({ id, ...otherSectionProps }) => (
        <MenuItem key={id} {...otherSectionProps}></MenuItem>
      ))}
    </div>
  );
}

export default Directory;
