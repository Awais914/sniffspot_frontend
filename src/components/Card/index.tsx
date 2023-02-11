import { Box } from '@mui/system'
import GradeIcon from '@mui/icons-material/Grade'
import { Link } from 'react-router-dom'
import { CardContent, Typography, Card, CardMedia } from '@mui/material'

type SpotCardProps = {
  id: number,
  title: string,
  description: string,
  price: number,
  image: string,
  average_rating: number,
  rating_count: number
}

const SpotCard = ({ ...props }: SpotCardProps) => {
  return (
    <Link to={`spots/${props?.id}`} style={{ textDecoration: 'none' }}>
      <Card
        sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
      >
        <CardMedia
          component='img'
          height='140'
          image={props?.image}
          alt='random'
          sx={{
            objectFit: 'fill'
          }}
        />

        <CardContent sx={{ flexGrow: 1 }}>
          <Typography gutterBottom variant='h6' component='h2'>
            {props?.title}
          </Typography>

          <Typography noWrap>
            {props?.description}
          </Typography>

          <Box display={'flex'} justifyContent='space-between'>
            <Typography variant='subtitle2'>
              {`$${props?.price} dog/hour`}
            </Typography>

            <Box display={'flex'}>
              <GradeIcon style={{ fill: '#1ee81e' }}/>

              <Typography variant='subtitle2'>
                {`${props?.average_rating}`}
              </Typography>

              <Typography variant='subtitle2'>
                {`(${props?.rating_count})`}
              </Typography>
            </Box>
          </Box>
        </CardContent>
      </Card>
    </Link>
  )
}

export default SpotCard
