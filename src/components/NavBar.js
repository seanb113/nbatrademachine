import React, { Component } from 'react'
import { Icon, Menu, Sticky, Sidebar, Segment, Button, Header } from 'semantic-ui-react'
import {Route, Link} from 'react-router-dom'
import App from '../App'

class NavBar extends Component {
  state = { activeItem: 'about',
            // animation: 'overlay',
            // direction: 'left',
            // dimmed: false,
            visible: false

    }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  handleShowClick = () => {
    //   debugger
      this.setState({ visible: !this.state.visible })
  }

  render() {
    const { activeItem } = this.state.activeItem
    const {visible} = this.state.visible
    // const setVisible = (visible) => this.setState({visible})
    

    return (     
    <div>
    <Sticky>
    <Button color="black" onClick={this.handleShowClick}> 
        <i className="content icon"></i> Menu
    </Button>
    </Sticky>
      <Sidebar
            as={Menu}
            animation='push'
            direction='left'
            icon='labeled'
            inverted
            onClick={this.handleShowClick}
            vertical
            visible={this.state.visible}
            width='thin'
            class="ui inverted left vertical menu sidebar"
      >
      {/* <Menu class="ui inverted left vertical menu sidebar" icon='labeled' vertical> */}
      {/* <Sticky> */}
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
        {/* </Sticky> */}
        </Sidebar>
    </div>
    )
  }
}

export default () => (
	<div><NavBar/></div>
)
// export default class SidebarTransition extends Component {
//     state = {
//         animation: 'overlay',
//         direction: 'left',
//         dimmed: false,
//         visible: false,

//     }
//     handleAnimationChange = (animation) => () =>
//     this.setState((prevState) => ({ animation, visible: !prevState.visible }))
//   render() {
//       return(
//     <button id="left-sidebar-toggle" class="ui black big launch right attached fixed toggle button" onClick={this.handleAnimationChange('overlay')}>Menu</button>
//       )
//   }
// }