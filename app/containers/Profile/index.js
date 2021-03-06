import React from 'react';
import PropTypes from 'prop-types';

import { Formik, Field } from 'formik';
import * as Yup from 'yup';
import {
  FormWrapper,
  FormGroup,
  Form,
  Label,
  Input,
  ErrorBox,
  Title,
  Fieldset,
  Legend,
  RadioLabel,
  FormFooter,
  Button,
} from './components';

/* eslint-disable react/no-multi-comp */
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

// Radio group
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

/* eslint-disable react/prefer-stateless-function */
class ProfileForm extends React.PureComponent {
  render() {
    return (
      <Formik
        initialValues={{
          email: '',
          name: '',
          year: null,
          month: null,
          day: null,
          sex: null,
          hasDiabet: false,
        }}
        onSubmit={this.props.onSubmit}
        validationSchema={Yup.object().shape({
          email: Yup.string()
            .email()
            .required('Your email is Required'),
          name: Yup.string()
            .min(5, 'Name should have at least 5 chars')
            .required('Your name is Required'),
          year: Yup.number('Please enter a valid year')
            .min(1900, 'Please enter a valid year')
            .max(new Date().getFullYear(), 'Please enter a valid year')
            .required('Birth year is required'),
          month: Yup.number('Please enter a valid month number')
            .min(1, 'Please enter a valid month number')
            .max(12, 'Please enter a valid month number')
            .required('Birth month is required'),
          day: Yup.number('Please enter a valid day number')
            .min(1, 'Please enter a valid day number')
            .max(31, 'Please enter a valid day number')
            .required('Birth day is required'),
          sex: Yup.string().required('Your sex is required'),
          hasDiabet: Yup.bool(),
        })}
      >
        {props => {
          const {
            values,
            touched,
            errors,
            dirty,
            isSubmitting,
            handleChange,
            handleBlur,
            handleSubmit,
            handleReset,
          } = props;
          return (
            <Form onSubmit={handleSubmit}>
              <FormGroup>
                <Label htmlFor="name">Full Name</Label>
                <Input
                  id="name"
                  placeholder="Enter your Full Name"
                  type="text"
                  value={values.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={errors.name && touched.name && 'error'}
                />
                {errors.name &&
                  touched.name && <ErrorBox>{errors.name}</ErrorBox>}
              </FormGroup>
              <FormGroup>
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  placeholder="Enter your email"
                  type="text"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={errors.email && touched.email && 'error'}
                />
                {errors.email &&
                  touched.email && <ErrorBox>{errors.email}</ErrorBox>}
              </FormGroup>
              <FormGroup>
                <RadioButtonGroup
                  id="sex"
                  label="Sex"
                  value={values.sex}
                  error={errors.sex}
                  touched={touched.sex}
                >
                  <Field
                    component={RadioButton}
                    name="sex"
                    id="male"
                    label="Male"
                  />
                  <Field
                    component={RadioButton}
                    name="sex"
                    id="female"
                    label="Female"
                  />
                </RadioButtonGroup>
              </FormGroup>
              <FormGroup>
                <Label htmlFor="year">Birthday</Label>
                <div>
                  <Input
                    id="year"
                    placeholder="Year"
                    type="text"
                    value={values.year}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    style={{ width: '33.33333%' }}
                    className={errors.year && touched.year && 'error'}
                  />
                  <Input
                    id="month"
                    placeholder="Month"
                    type="text"
                    value={values.month}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    style={{ width: '33.33333%' }}
                    className={errors.month && touched.month && 'error'}
                  />
                  <Input
                    id="day"
                    placeholder="Day"
                    type="text"
                    value={values.day}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    style={{ width: '33.33333%' }}
                    className={errors.day && touched.day && 'error'}
                  />
                  {errors.day &&
                    touched.day && <ErrorBox>{errors.day}</ErrorBox>}
                  {errors.month &&
                    touched.month && <ErrorBox>{errors.month}</ErrorBox>}
                  {errors.email &&
                    touched.year && <ErrorBox>{errors.year}</ErrorBox>}
                </div>
              </FormGroup>
              <FormGroup>
                <Field
                  component={Checkbox}
                  name="hasDiabet"
                  id="hasDiabet"
                  label="Do you have diabet?"
                />
              </FormGroup>
              <FormFooter>
                <Button
                  type="button"
                  className="outline"
                  onClick={handleReset}
                  disabled={!dirty || isSubmitting}
                >
                  Reset
                </Button>
                <Button type="submit" disabled={isSubmitting}>
                  Submit
                </Button>
              </FormFooter>
            </Form>
          );
        }}
      </Formik>
    );
  }
}

ProfileForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

// This part will be completed with project delivery
class Profile extends React.PureComponent {
  render() {
    return (
      <FormWrapper>
        <Title>
          Please complete the form bellow to find your place in life!
        </Title>
        <ProfileForm onSubmit={e => console.log(e)} />
      </FormWrapper>
    );
  }
}

export default Profile;
