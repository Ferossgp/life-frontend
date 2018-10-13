import React from 'react';
import PropTypes from 'prop-types';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';


import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';

import { 
  makeSelectCountries,
  makeSelectError, 
  makeSelectFetching, 
  makeSelectTotalCount
} from './selectors';
import { fetchCountries } from './actions';
import reducer from './reducer';
import saga from './saga';


/* eslint-disable react/prefer-stateless-function */
class Countries extends React.PureComponent {
  
  componentDidMount(){
    this.props.onFetchCountries();
  }

  render() {
    return (
      <div>
        <Helmet>
          <title>List of countries</title>
        </Helmet>
        <h1>
          <FormattedMessage {...messages.header}/>
        </h1>
        
        <div>
          {this.props.countries && this.props.countries.map((c) => {
            return (<Link to={`/country/${c.id}`} key={c.id}>{c.name}</Link>);
          })}
        </div>
      </div>
    );
  }
}

Countries.defaultProps = {
  countries: [],
  totalCount: 0,
};

Countries.propType = {
  onFetchCountries: PropTypes.func.isRequired,
  error: PropTypes.bool.isRequired,
  fetching: PropTypes.bool.isRequired,
  countries: PropTypes.array.isRequired,
  totalCount: PropTypes.number.isRequired,
};

const mapStateToProps = createStructuredSelector({
  countries: makeSelectCountries(),
  error: makeSelectError(),
  fetching: makeSelectFetching(),
  totalCount: makeSelectTotalCount(),
});

export function mapDispatchToProps(dispatch) {
  return {
    onFetchCountries: () => {
      dispatch(fetchCountries());
    },
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'countries', reducer });
const withSaga = injectSaga({ key: 'countries', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(Countries);