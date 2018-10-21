import React, { Component } from 'react';
import './App.css';
import { Icon, Menu } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css';

class MyMenu extends Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })


  render() {
    const { activeItem } = this.state

    return (
      <Menu icon inverted style={{background: this.props.color}}>
        <Menu.Item  name='home'  onClick={this.handleItemClick}>
          <Icon name="home" large/>
        </Menu.Item>
        {/*<Menu.Item*/}
        {/*name='messages'*/}
        {/*active={activeItem === 'messages'}*/}
        {/*onClick={this.handleItemClick}*/}
        {/*/>*/}
        {/*<Menu.Item*/}
        {/*name='friends'*/}
        {/*active={activeItem === 'friends'}*/}
        {/*onClick={this.handleItemClick}*/}
        {/*/>*/}
        <Menu.Menu icon position='right'>
          <Menu.Item
            name='Notifications'
            active={activeItem === 'logout'}
            onClick={this.handleItemClick}
          >
            <Icon name="bell" />
          </Menu.Item>

        </Menu.Menu>
      </Menu>

    );
  }
}

export default MyMenu;
