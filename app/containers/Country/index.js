import React from 'react';
import PropTypes from 'prop-types';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';


import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';

import { 
  makeSelectCountry,
  makeSelectError, 
  makeSelectFetching,
} from './selectors';
import { fetchCountry } from './actions';
import reducer from './reducer';
import saga from './saga';


/* eslint-disable react/prefer-stateless-function */
class Country extends React.PureComponent {
  
  componentDidMount(){
    this.props.onFetchCountry(this.props.match.params.country_id);
  }

  render() {
    return (
      <div>
        <Helmet>
          <title>Country information</title>
        </Helmet>
        <h1>
          <FormattedMessage {...messages.header}/>
        </h1>
        
        <div>
          <strong><FormattedMessage {...messages.currency_code}/></strong>
          <p>{this.props.country.currency_code}</p>

          <strong><FormattedMessage {...messages.geoname_id}/></strong>
          <p>{this.props.country.geoname_id}</p>

          <strong><FormattedMessage {...messages.iso_alpha2}/></strong>
          <p>{this.props.country.iso_alpha2}</p>

          <strong><FormattedMessage {...messages.iso_alpha3}/></strong>
          <p>{this.props.country.iso_alpha3}</p>

          <strong><FormattedMessage {...messages.name}/></strong>
          <p>{this.props.country.name}</p>

          <strong><FormattedMessage {...messages.population}/></strong>
          <p>{this.props.country.population}</p>
        </div>
      </div>
    );
  }
}

Country.defaultProps = {
  cities: [],
  totalCount: 0,
};

Country.propType = {
  onFetchCountry: PropTypes.func.isRequired,
  error: PropTypes.bool.isRequired,
  fetching: PropTypes.bool.isRequired,
  country: PropTypes.object.isRequired,
};

const mapStateToProps = createStructuredSelector({
  country: makeSelectCountry(),
  error: makeSelectError(),
  fetching: makeSelectFetching(),
});

export function mapDispatchToProps(dispatch) {
  return {
    onFetchCountry: (params) => {
      dispatch(fetchCountry(params));
    },
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'country', reducer });
const withSaga = injectSaga({ key: 'country', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(Country);