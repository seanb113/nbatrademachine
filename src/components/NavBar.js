import React, { Component } from 'react'
import { Icon, Menu, Sticky } from 'semantic-ui-react'
import {Route, Link} from 'react-router-dom'

class NavBar extends Component {
  state = { activeItem: 'gamepad' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
    // <div class="ui sticky">
      <Menu icon='labeled' vertical>
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
    //   </div>
    )
  }
}

export default NavBar