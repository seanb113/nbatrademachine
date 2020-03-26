import React, { Component } from 'react'
import { Icon, Menu, Sticky } from 'semantic-ui-react'
import {Route, Link} from 'react-router-dom'

class NavBar extends Component {
  state = { activeItem: 'gamepad' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Menu class="ui inverted left vertical menu sidebar" icon='labeled' vertical>
      <Sticky>
        <Menu.Item
          as={Link} to='/profile'
          name='profile'
          active={activeItem === 'profile'}
          onClick={this.handleItemClick}
        >
          <Icon name='id badge' />
          Profile
        </Menu.Item>

        <Menu.Item
          as={Link} to='/machine'
          name='machine'
          active={activeItem === 'machine'}
          onClick={this.handleItemClick}
        >
          <Icon name='basketball ball' />
          Trade Machine
        </Menu.Item>

        <Menu.Item
          as={Link} to='/trades'
          name='tradelist'
          active={activeItem === 'tradelist'}
          onClick={this.handleItemClick}
        >
          <Icon name='clipboard list' />
          All Trades
        </Menu.Item>
        </Sticky>
      </Menu>
    //     <div class="pusher">
    //     <button id="left-sidebar-toggle" class="ui black big launch right attached fixed toggle button">
    //         <i class="content icon"></i>
    //         <span class="text">Menu</span>
    //     </button>
    //  </div>
    )
  }
}

export default NavBar