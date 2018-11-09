import React from 'react';
import PropTypes from 'prop-types';

import { ErrorBox, RadioLabel } from './styled';

const Checkbox = ({
  field: { name, value, onChange, onBlur },
  form: { errors, touched },
  id,
  label,
}) => (
  <div>
    <input
      name={name}
      id={id}
      type="checkbox"
      value={value}
      checked={value}
      onChange={onChange}
      onBlur={onBlur}
    />
    <RadioLabel htmlFor={id}>{label}</RadioLabel>
    {errors[name] && touched[name] && <ErrorBox>{errors[name]}</ErrorBox>}
  </div>
);

Checkbox.propTypes = {
  field: PropTypes.object.isRequired,
  form: PropTypes.object.isRequired,
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};

export default Checkbox;
