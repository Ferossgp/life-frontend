import React from 'react';

import { connect } from 'react-redux';
import { compose } from 'redux';
import injectReducer from 'utils/injectReducer';

import { FormWrapper, Title } from './components';
import ProfileForm from './form';
import { MainLayout } from '../../components/Layout';
import { submitForm } from './actions';
import reducer from './reducer';

class Profile extends React.Component {
  onSubmit = data => {
    this.props.history.push('/expectancy');
    this.props.formSubmit(data);
  };

  render() {
    return (
      <MainLayout>
        <FormWrapper>
          <Title>
            Please complete the form bellow to find your place in life!
          </Title>
          <ProfileForm onSubmit={this.onSubmit} />
        </FormWrapper>
      </MainLayout>
    );
  }
}

export function mapDispatchToProps(dispatch) {
  return {
    formSubmit: x => {
      dispatch(submitForm(x));
    },
  };
}

const withConnect = connect(
  null,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'userProfile', reducer });

export default compose(
  withConnect,
  withReducer,
)(Profile);
