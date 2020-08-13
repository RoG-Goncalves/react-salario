import React, { Component } from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar';
import css from './progressbar.module.css';
export default class ProgressBars extends Component {
  render() {
    const { discountINSS, discountIRPF, fullSalary } = this.props;
    return (
      <ProgressBar className={css.bar}>
        <ProgressBar striped variant="success" now={discountINSS} key={1} />
        <ProgressBar now={discountIRPF} key={2} />
        <ProgressBar now={fullSalary} key={3} />
      </ProgressBar>
    );
  }
}
