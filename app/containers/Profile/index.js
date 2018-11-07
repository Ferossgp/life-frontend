import React from 'react';

import { FormWrapper, Title } from './components';

import ProfileForm from './form';

/* eslint-disable react/prefer-stateless-function */
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
