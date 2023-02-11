import { Box, Divider, Typography } from '@mui/material'

const Footer = () => {
  return (
    <Box sx={{ bgcolor: 'background.paper', p: 6 }} component='footer'>
      <Divider sx={{ margin: '40px 0' }}/>
      <Typography variant='h6' align='center' gutterBottom>
          SniffSpot
      </Typography>

      <Typography
        variant='subtitle1'
        align='center'
        color='text.secondary'
        component='p'
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam!
      </Typography>
    </Box>
  )
}

export default Footer
