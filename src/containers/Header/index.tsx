import AppBar from '@mui/material/AppBar'
import Container from '@mui/material/Container'
import Toolbar from '@mui/material/Toolbar'
import { useNavigate } from 'react-router-dom'

import Logo from 'assets/logo.svg'

import './styles.scss'

const Header = () => {
  const navigate = useNavigate()

  return (
    <AppBar position='fixed'>
      <Container maxWidth='xl'>
        <Toolbar
          disableGutters
          onClick={() => navigate('/')}
        >
          <img className='logo' src={Logo as string} />
        </Toolbar>
      </Container>
    </AppBar>
  )
}

export default Header
