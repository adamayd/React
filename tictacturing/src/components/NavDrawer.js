import React from 'react'
import Drawer from 'material-ui/Drawer'
import MenuItem from 'material-ui/MenuItem'
import Divider from 'material-ui/Divider'
import { Link } from 'react-router'
import { NavToggleButton } from '../styled/NavDrawer'

class NavDrawer extends React.Component {
  state = {
    open: true,
    width: 250
  }

  toggleDrawer = () => {
    this.setState((prevState, props) => {
      return {
        open: !prevState.open
      }
    })
  }

  render() {
    return (
      <div>
        <NavToggleButton
          toggleDrawer={this.toggleDrawer}
          width={this.state.width}
          open={this.state.open}
        />
        <Drawer 
          open={this.state.open}
          width={this.state.width}
        >
          <div style={{
            height: '200px',
            width: '100%',
            backgroundColor: 'salmon'
          }}>
            Login Container
          </div>
          <Divider />
          <Link to={'/'}>
            <MenuItem
              onTouchTap={this.toggleDrawer}
              primaryText={'Play'}
            />
          </Link>
          <Link to={'/profile'}>
            <MenuItem
              onTouchTap={this.toggleDrawer}
              primaryText={'Profile'}
            />
          </Link>
        </Drawer>
      </div>
    )
  }
}

export default NavDrawer