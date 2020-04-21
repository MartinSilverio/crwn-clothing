import React from 'react';
import './FormInput.scss';

function FormInput({ id, handleChange, label, ...otherProps }) {
  return (
    <div className='group'>
      <input
        id={id}
        className='form-input'
        onChange={handleChange}
        {...otherProps}
      />
      {label && (
        <label
          htmlFor={id}
          className={`${
            otherProps.value.length ? 'shrink' : ''
          } form-input-label`}
        >
          {label}
        </label>
      )}
    </div>
  );
}

export default FormInput;
