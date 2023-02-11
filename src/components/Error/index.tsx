import { Snackbar, Alert } from '@mui/material'

const Error = ({ message }: { message?: any }) => (
  <Snackbar open={true} autoHideDuration={4000}>
    <Alert severity='error'>{message || 'Something went wrong!'}</Alert>
  </Snackbar>
)

export default Error
