import { Box, Typography, Rating } from '@mui/material'

type ReviewsProps = {
  date: string,
  rating: number,
  content: string,
  userImg: string
}

const Reviews = ({ date, rating, content, userImg }: ReviewsProps) => (
  <Box className='reviews'>
    <Box className='reviewer'>
      <img alt='sniffspot' src={userImg}/>

      <div>
        <Typography>Sniffspot User</Typography>
        <Typography>{new Date(date).toUTCString()}</Typography>
      </div>
    </Box>

    <Rating name='read-only' value={rating} className='stars' readOnly />

    <Typography>{content}</Typography>
  </Box>
)

export default Reviews
