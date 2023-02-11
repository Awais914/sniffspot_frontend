import { useState } from 'react'
import {
  Box,
  Container,
  Typography,
  Stack,
  Button
} from '@mui/material'
import PlaceIcon from '@mui/icons-material/Place'

import SpotModal from 'components/Modal'

import './styles.scss'

const Hero = () => {
  const [open, setOpen] = useState(false)

  return (
    <Box className='hero-container'>
      <Container maxWidth='xl'>
        <Typography
          className='hero-heading'
          color='primary.dark'
          gutterBottom
        >
          Rent safe and private dog parks hosted by locals in Seattle, Washington
        </Typography>

        <Typography className='hero-description' color='primary.dark' paragraph>
            Sniffspot&apos;s private dog parks are the best way to exercise your dog. We have the best variety and the best priced dog parks anywhere!
        </Typography>

        <Stack
          sx={{ pt: 4 }}
          direction='row'
          spacing={2}
          justifyContent='center'
        >
          <Button
            variant='contained'
            size='large'
            endIcon={<PlaceIcon />}
            onClick={() => setOpen(true)}
          >
            Create New Spot
          </Button>

          <SpotModal
            title={`Create a New Spot`}
            isOpen={open}
            setOpen={setOpen}
          />
        </Stack>
      </Container>
    </Box>
  )
}

export default Hero
