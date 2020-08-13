import React, { Component } from 'react';
import ProgressBars from './components/progressbar/ProgressBar';
import FullSalary from './components/fullsalary/FullSalary';
import { calculateSalaryFrom } from './salary';
import InputReadOnly from './components/inputs/InputReadOnly';
import css from './app.module.css';

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      fullSalary: 0,
    };
  }
  handleChangeSalary = (fullSalary) => {
    this.setState({
      fullSalary,
    });
  };
  render() {
    const { fullSalary } = this.state;
    const calcsData = calculateSalaryFrom(fullSalary);
    const {
      baseINSS,
      discountINSS,
      baseIRPF,
      discountIRPF,
      netSalary,
    } = calcsData;

    return (
      <div className={css.border}>
        <h1>React Salário</h1>
        <FullSalary
          fullSalary={fullSalary}
          onChangeFilter={this.handleChangeSalary}
        />
        <div className={css.flexRow}>
          <div>
            <InputReadOnly
              description="Base INSS"
              value={baseINSS}
              fullSalary={fullSalary}
            />
          </div>
          <div className={css.discountINSS}>
            <InputReadOnly
              className={css.discountINSS}
              description="Desconto INSS"
              value={discountINSS}
              fullSalary={fullSalary}
            />
          </div>
          <div>
            <InputReadOnly
              description="Base IRPF"
              value={baseIRPF}
              fullSalary={fullSalary}
            />
          </div>
          <div>
            <InputReadOnly
              description="Desconto IRPF"
              value={discountIRPF}
              fullSalary={fullSalary}
            />
          </div>
        </div>
        <div>
          <div>
            <InputReadOnly
              description="Salário Bruto"
              value={netSalary}
              fullSalary={fullSalary}
            />
          </div>
        </div>
        <ProgressBars
          discountINSS={discountINSS}
          discountIRPF={discountIRPF}
          fullSalary={fullSalary}
        />
      </div>
    );
  }
}
