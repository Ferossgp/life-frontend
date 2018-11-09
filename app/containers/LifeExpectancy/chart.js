import PropTypes from 'prop-types';

import c3 from 'c3';

import React from 'react';
import { findDOMNode } from 'react-dom';

class C3Chart extends React.Component {
  componentDidMount() {
    this.updateChart(this.props);
  }

  componentWillReceiveProps(newProps) {
    this.updateChart(newProps);
  }

  componentWillUnmount() {
    this.destroyChart();
  }

  generateChart(mountNode, config) {
    const newConfig = Object.assign({ bindto: mountNode }, config);
    return c3.generate(newConfig);
  }

  destroyChart() {
    try {
      this.chart = this.chart.destroy();
    } catch (err) {
      throw new Error('Internal C3 error', err);
    }
  }

  updateChart(config) {
    const emptyFunc = () => {};

    const newConfig = {
      data: config.data,
      size: config.size || {},
      padding: config.padding || {},
      color: config.color || {},
      interaction: config.interaction || {},
      transition: config.transition || {},
      oninit: config.oninit || emptyFunc,
      onrendered: config.onrendered || emptyFunc,
      onmouseover: config.onmouseover || emptyFunc,
      onmouseout: config.onmouseout || emptyFunc,
      onresize: config.onresize || emptyFunc,
      onresized: config.onresized || emptyFunc,
      axis: config.axis || {},
      grid: config.grid || {},
      regions: config.regions || [],
      legend: config.legend || {},
      tooltip: config.tooltip || {},
      subchart: config.subchart || {},
      zoom: config.zoom || {},
      point: config.point || {},
      line: config.line || {},
      area: config.area || {},
      bar: config.bar || {},
      pie: config.pie || {},
      donut: config.donut || {},
      gauge: config.gauge || {},
    };

    if (this.chart) {
      this.destroyChart();
    }

    this.chart = this.generateChart(findDOMNode(this), newConfig);
  }

  render() {
    const className = this.props.className ? ` ${this.props.className}` : '';
    const style = this.props.style ? this.props.style : {};
    return <div className={className} style={style} />;
  }
}

C3Chart.displayName = 'C3Chart';

C3Chart.propTypes = {
  data: PropTypes.object.isRequired,
  size: PropTypes.object,
  padding: PropTypes.object,
  color: PropTypes.object,
  interaction: PropTypes.object,
  transition: PropTypes.object,
  oninit: PropTypes.func,
  onrendered: PropTypes.func,
  onmouseover: PropTypes.func,
  onmouseout: PropTypes.func,
  onresize: PropTypes.func,
  onresized: PropTypes.func,
  axis: PropTypes.object,
  grid: PropTypes.object,
  regions: PropTypes.array,
  legend: PropTypes.object,
  tooltip: PropTypes.object,
  subchart: PropTypes.object,
  zoom: PropTypes.object,
  point: PropTypes.object,
  line: PropTypes.object,
  area: PropTypes.object,
  bar: PropTypes.object,
  pie: PropTypes.object,
  donut: PropTypes.object,
  gauge: PropTypes.object,
  className: PropTypes.string,
  style: PropTypes.object,
};

export default C3Chart;
