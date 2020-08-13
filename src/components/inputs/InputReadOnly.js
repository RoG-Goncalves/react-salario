import React, { Component } from 'react';
import { formatNumber } from '../helpers/formatHelper.js';
import css from './input.module.css';
export default class InputReadOnly extends Component {
  render() {
    const { description, value } = this.props;
    return (
      <div className={css.border}>
        <label>
          {description}
          <input type="text" value={`R$ ${formatNumber(value)}`} disabled />
        </label>
      </div>
    );
  }
}
