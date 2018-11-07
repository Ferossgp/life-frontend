import React from 'react';
import PropTypes from 'prop-types';

import { RadioLabel } from './styled';

const RadioButton = ({
  field: { name, value, onChange, onBlur },
  id,
  label,
  className,
  ...props
}) => (
  <div>
    <input
      name={name}
      id={id}
      type="radio"
      value={id}
      checked={id === value}
      onChange={onChange}
      onBlur={onBlur}
      {...props}
    />
    <RadioLabel htmlFor={id}>{label}</RadioLabel>
  </div>
);

RadioButton.propTypes = {
  field: PropTypes.object.isRequired,
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default RadioButton;
