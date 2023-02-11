import Box from '@mui/material/Box'
import CloseIcon from '@mui/icons-material/Close'
import Modal from '@mui/material/Modal'
import { IconButton } from '@mui/material'

import SpotForm from 'components/Form'

import './styles.scss'

const style = {
  position: 'absolute' as const,
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  borderRadius: 2,
}

type ModalProps = {
  title: string
  children?: React.ReactNode
  isOpen: boolean
  setOpen: (...args: boolean[]) => void
}

const SpotModal = ({ children, isOpen, setOpen }: ModalProps) => {
  const handleClose = () => setOpen(false)

  return (
    <div>
      <Modal
        keepMounted
        open={isOpen}
        onClose={handleClose}
        disableAutoFocus={true}
      >
        <Box sx={style}>
          <div className='spot-form-container'>
            <div>{'Create New Spot'}</div>

            <IconButton className='close-btn' disableRipple onClick={handleClose}>
              <CloseIcon />
            </IconButton>

            <SpotForm />
          </div>
          <Box>{children}</Box>
        </Box>
      </Modal>
    </div>
  )
}

export default SpotModal
