import React from 'react'
import { Link, withRouter } from 'react-router-dom'
import { Pane, Icon, Text, Button } from 'evergreen-ui'
import './NavBar.css'



class NavBar extends React.PureComponent {

  state = {
    active: 'container'
  }

  componentDidMount () {
    let path = this.props.location.pathname
    if( path === '/' ) path = 'containers'
    this.setState({
      active: path.replace('/', '')
    })
  }

  navButton (name, icon) {
    return <Text display='flex' alignItems='center'>
      <Icon size={14} color="muted" icon={ icon } marginRight={5}/> 
        { name }
    </Text>
  }
// #f9f9fc

  render () {
    const { active } = this.state
    return <Pane display="flex" justifyContent="center" padding={24} background="url('https://blog.humancoders.com/wp-content/uploads/2017/11/docker-background-2.png') center center" boxShadow="0 0 10px rgba(0,0,0,0.1)" borderRadius={5} backgroundSize ="cover"> 
      <Button 
        height={48} 
        width={250} 
        justifyContent='center' 
        alignItems='center'
        fontSize={14} 
        borderTopRightRadius={0} 
        appearance={active === 'containers' ? 'primary' : 'default'}
        borderBottomRightRadius={0}
        is={Link}
        to='/'
        onClick={() => this.setState({active: 'containers'})}>
          <Icon icon="layers" marginRight={5} size={14} /> Container
        </Button>
      <Button 
        height={48} 
        width={250} 
        justifyContent='center' 
        alignItems='center'
        fontSize={14} 
        borderTopLeftRadius={0} 
        borderBottomLeftRadius={0} 
        borderTopRightRadius={0} 
        appearance={active === 'images' ? 'primary' : 'default'}
        borderBottomRightRadius={0} 
        is={Link}
        to='/images'
        onClick={() => this.setState({active: 'images'})}>
          <Icon icon="projects" marginRight={5} size={14} /> Image
        </Button>
        <Button 
        height={48} 
        width={250} 
        justifyContent='center' 
        alignItems='center'
        fontSize={14} 
        borderTopLeftRadius={0} 
        borderBottomLeftRadius={0} 
        appearance={active === 'cleanup' ? 'primary' : 'default'}
        is={Link}
        to='/cleanup'
        onClick={() => this.setState({active: 'cleanup'})}>
          <Icon icon="shield" marginRight={5} size={14} /> Clean-up
      </Button>
    </Pane>
  }
}

export default withRouter(NavBar)