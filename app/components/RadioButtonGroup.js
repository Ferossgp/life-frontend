import React from 'react';
import PropTypes from 'prop-types';

import { Fieldset, Legend, ErrorBox } from './styled';

const RadioButtonGroup = ({ error, touched, label, children }) => (
  <div>
    <Fieldset>
      <Legend>{label}</Legend>
      {children}
      {error && touched && <ErrorBox>{error}</ErrorBox>}
    </Fieldset>
  </div>
);

RadioButtonGroup.propTypes = {
  error: PropTypes.string,
  touched: PropTypes.bool,
  label: PropTypes.string.isRequired,
  children: PropTypes.array.isRequired,
};

export default RadioButtonGroup;
