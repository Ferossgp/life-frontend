import React from 'react';
import { connect } from 'react-redux';

import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';

import Chart from './chart';

import { fetchExpectancy, fetchMortality } from './actions';

import { MainLayout } from '../../components/Layout';
import reducer from './reducer';
import saga from './saga';
import {
  makeSelectExpectancy,
  makeSelectMortality,
  makeSelectError,
  makeSelectFetching,
} from './selectors';
import { makeSelectUserProfile } from '../Profile/selectors';
import { makeSelectCountry } from '../Countries/selectors';

/* eslint-disable react/prefer-stateless-function */
class ProfileGraphs extends React.PureComponent {
  componentDidMount() {
    if (this.props.userProfile && this.props.selectedCountry) {
      const profile = {
        ...this.props.userProfile,
        country: this.props.selectedCountry.name,
      };
      this.props.onFetchExpectacy(profile);
      this.props.onFetchMortality(profile);
    }
  }

  componentWillReceiveProps(nextProps) {
    console.log(nextProps.selectedCountry);
    if (
      this.props.userProfile !== nextProps.userProfile ||
      this.props.selectedCountry !== nextProps.selectedCountry
    ) {
      const profile = {
        ...this.props.userProfile,
        country: this.props.selectedCountry.name,
      };
      console.log(profile);
      this.props.onFetchExpectacy(profile);
      this.props.onFetchMortality(profile);
    }
  }

  closestIndex = (arr, target) => {
    let i = 0;
    let j = arr.length - 1;
    let k;

    while (i <= j) {
      k = Math.floor((i + j) / 2);
      if (target === arr[k] || Math.abs(i - j) <= 1) {
        return k;
      } else if (target < arr[k]) {
        j = k - 1;
      } else {
        i = k + 1;
      }
    }
    return -1;
  };

  chartData = (data, user) => {
    const mortality = ['mortality'];
    const age = ['age'];
    const you = ['you'];
    data.forEach(element => {
      mortality.push(element.mortality_percent);
      you.push(null);
      age.push(element.age);
    });

    const pos = this.closestIndex(age, user && user.total_life_expectancy);

    if (pos > -1) {
      you[pos] = mortality[pos];
    }

    return {
      types: {
        mortality: 'spline',
        you: 'spline',
      },
      x: 'age',
      columns: [age, mortality, you],
    };
  };

  render() {
    return (
      <MainLayout>
        <h1>Graphs</h1>
        {this.props.error && <h3>Something went wrong</h3>}
        {this.props.fetchExpectancy && <h3>Loading data...</h3>}
        <Chart
          data={this.chartData(
            this.props.mortalityDistribution,
            this.props.lifeExpectancy,
          )}
        />
      </MainLayout>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  selectedCountry: makeSelectCountry(),
  userProfile: makeSelectUserProfile(),
  lifeExpectancy: makeSelectExpectancy(),
  mortalityDistribution: makeSelectMortality(),
  error: makeSelectError(),
  fetching: makeSelectFetching(),
});

export function mapDispatchToProps(dispatch) {
  return {
    onFetchExpectacy: x => {
      dispatch(fetchExpectancy(x));
    },
    onFetchMortality: x => {
      dispatch(fetchMortality(x));
    },
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'profileGraphs', reducer });
const withSaga = injectSaga({ key: 'profileGraphs', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(ProfileGraphs);
