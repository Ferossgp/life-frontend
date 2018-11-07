import React from 'react';
import PropTypes from 'prop-types';

import { Formik, Field } from 'formik';
import * as Yup from 'yup';

import { ErrorBox } from '../../components/styled';

import RadioButtonGroup from '../../components/RadioButtonGroup';
import RadioButton from '../../components/RadioButton';
import Checkbox from '../../components/Checkbox';

import {
  FormGroup,
  Form,
  Label,
  Input,
  FormFooter,
  Button,
} from './components';

const ProfileForm = ({ onSubmit }) => {
  const schema = Yup.object().shape({
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
  });
  return (
    <Formik
      initialValues={{
        email: '',
        name: '',
        year: '',
        month: '',
        day: '',
        sex: '',
        hasDiabet: false,
      }}
      onSubmit={onSubmit}
      validationSchema={schema}
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
                {errors.day && touched.day && <ErrorBox>{errors.day}</ErrorBox>}
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
};

ProfileForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default ProfileForm;
