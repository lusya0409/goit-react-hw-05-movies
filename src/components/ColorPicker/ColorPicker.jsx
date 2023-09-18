import React, { Component } from 'react';
import {
  ColorPickerTitle,
  ColorPickerWrapper,
  ColorPickerOption,
} from './ColorPicker.styled';

export class ColorPicker extends Component {
  state = {
    //в массиве работаем с индексом
    activeOptionIdx: 0,
  };
  setActiveIdx = index => {
    this.setState({ activeOptionIdx: index });
  };
  render() {
    const { activeOptionIdx } = this.state;
    const { options } = this.props;
    const { label } = options[activeOptionIdx];
    // console.log(activeOptionLabel);
    return (
      <ColorPickerWrapper>
        <ColorPickerTitle>Color Picker</ColorPickerTitle>
        <p>Выбран цвет: {label}</p>
        <div>
          {options.map(({ label, color }, index) => (
            <ColorPickerOption
              key={label}
              //   className={this.makeOptionClassName(index)}
              style={{ backgroundColor: color }}
              onClick={() => this.setActiveIdx(index)}
            ></ColorPickerOption>
          ))}
        </div>
      </ColorPickerWrapper>
    );
  }
}
