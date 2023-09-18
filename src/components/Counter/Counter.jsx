import React from 'react';
import { Controls } from './Controls/Controls';
import { Value } from './Value/Value';

export class Counter extends React.Component {
  static defaultProps = {
    initialValue: 0,
  };
  static propTypes = {};

  state = {
    value: this.props.initialValue,
  };
  //oldscool
  //   constructor() {
  //     super();

  //     this.state = {
  //       value: 0,
  //     };
  //   }

  handlerIncrement = () => {
    //меняем состояние, т.е. новое значение перезаписіваем
    this.setState({
      value: 123,
    });
    //меняем основіваяь на предідущем.значении
    this.setState(prevState => {
      return {
        value: prevState.value + 2,
      };
    });
    //можно не использовать ретурн
    this.setState(prevState => ({
      value: prevState.value + 1,
    }));
  };
  //   handlerIncrement = event => {
  //     console.log(`Кликнули в увеличить`);
  //     console.dir(event.target);

  //     const { target } = event;

  //     setTimeout(() => {
  //       console.log(target);
  //     }, 1000);
  //   };
  handleDecrement = () => {
    this.setState(prevState => ({
      value: prevState.value - 1,
    }));
  };
  //   handleDecrement = event => {
  //     console.log(`Кликнули в уменшить`);
  //     console.dir(event.target);
  //   };

  render() {
    return (
      <div>
        <Value value={this.state.value} />
        {/* <span>{this.state.value}</span> */}
        <Controls
          onIncrement={this.handlerIncrement}
          onDecrement={this.handleDecrement}
        />
      </div>
    );
  }
}
