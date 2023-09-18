import React from 'react';
import { DropdownMenu, DropdownWrapper } from './Dropdown.styled';

export class Dropdown extends React.Component {
  state = {
    visible: false,
  };
  toggle = () => {
    this.setState(prevState => ({
      visible: !prevState.visible,
    }));
  };
  //   show = () => {
  //     this.setState({ visible: true });
  //   };
  //   hide = () => {
  //     this.setState({ visible: false });
  //   };
  render() {
    return (
      <DropdownWrapper>
        <button type="button" onClick={this.toggle}>
          {this.state.visible ? 'Скрыть' : 'Показать'}
        </button>

        {/* <button type="button" onClick={this.show}>
          Показать
        </button>
        <button type="button" onClick={this.hide}>
          Скрыть
        </button> */}

        {this.state.visible && <DropdownMenu>Выпадающее меню</DropdownMenu>}
      </DropdownWrapper>
    );
  }
}
