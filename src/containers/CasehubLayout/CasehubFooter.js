import React, { Component } from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  children: PropTypes.node,
};

const defaultProps = {};

class CasehubFooter extends Component {
  render() {

    // eslint-disable-next-line
    const { children, ...attributes } = this.props;

    return (
      <React.Fragment>
        <span><a href="https://testcaseshub.com">TestCasesHub</a> &copy; 2020 coffeink.</span>
        <span className="ml-auto">Powered by <a href="https://coreui.io/react">CoreUI for React</a></span>
      </React.Fragment>
    );
  }
}

CasehubFooter.propTypes = propTypes;
CasehubFooter.defaultProps = defaultProps;

export default CasehubFooter;
