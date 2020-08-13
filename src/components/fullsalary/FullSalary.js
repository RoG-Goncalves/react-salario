import React, { Component } from 'react';
import { formatNumber } from '../helpers/formatHelper.js';
import css from './fullsalary.module.css';

export default class FullSalary extends Component {
  handleInputChange = (event) => {
    this.props.onChangeFilter(event.target.value);
  };
  render() {
    return (
      <div className={css.border}>
        <label>
          Salário Bruto
          <input type="number" onChange={this.handleInputChange} />
        </label>
      </div>
    );
  }
}
