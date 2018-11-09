import React from 'react';
import PropTypes from 'prop-types';

import { FormattedMessage } from 'react-intl';

import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';

import messages from './messages';

import {
  makeSelectCountries,
  makeSelectError,
  makeSelectFetching,
  makeSelectTotalCount,
} from './selectors';
import { fetchCountries } from './actions';
import reducer from './reducer';
import saga from './saga';

import {
  Grid,
  GridItemBg,
  GridItemImg,
  GridItemWrap,
  GridItemTitle,
  GridItemId,
  GridItem,
  PageHeading,
} from './components';
import { MainLayout } from '../../components/Layout';

/* eslint-disable react/prefer-stateless-function */
class Countries extends React.PureComponent {
  componentDidMount() {
    this.props.onFetchCountries();
  }

  render() {
    return (
      <div>
        <Helmet>
          <title>List of countries</title>
        </Helmet>

        <MainLayout>
          <PageHeading>
            <FormattedMessage {...messages.header} />
          </PageHeading>
          <Grid>
            {this.props.countries &&
              this.props.countries.map(c => {
                const plusOrMinus = Math.random() < 0.5 ? -1 : 1;
                const baseAngle = Math.random() / 10;
                const rightPart = `${(1 - baseAngle) *
                  plusOrMinus}, ${baseAngle}`;
                const leftPart = `${baseAngle}, ${(1 - baseAngle) *
                  (plusOrMinus * -1)}`;
                const transform = `matrix(${rightPart}, ${leftPart}, 0, 0)`;
                return (
                  <GridItem key={c.id} to={`/country/${c.id}`}>
                    <GridItemBg />
                    <GridItemWrap style={{ transform }}>
                      <GridItemImg src={c.image} alt={c.name} />
                    </GridItemWrap>
                    <GridItemTitle>{c.name}</GridItemTitle>
                    <GridItemId>{c.id.substring(11, 13)}</GridItemId>
                  </GridItem>
                );
              })}
          </Grid>
        </MainLayout>
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

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'countries', reducer });
const withSaga = injectSaga({ key: 'countries', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(Countries);
