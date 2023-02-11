import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { Box, Divider, ImageList, ImageListItem, Typography } from '@mui/material'
import GradeIcon from '@mui/icons-material/Grade'

import { getSpotDetails } from 'api/spots'
import Error from 'components/Error'
import Reviews from './reviews'

import './styles.scss'
import 'react-responsive-carousel/lib/styles/carousel.min.css'

type spotData = {
  id: number,
  title: string,
  description: string,
  price: number,
  average_rating: number,
  rating_count: number,
  image: Array<any>,
  reviews: Array<any>
}

const ListingDetail = () => {
  const spotPath = useLocation().pathname
  const [data, setData] = useState<spotData>()

  useEffect(() => {
    getSpotDetails(spotPath).then(d => setData(d))

    return () => setData(undefined)
  }, [])

  return (
    <>
      {data !== undefined ?
        <Box className={'listing-detail'}>
          <Typography variant='h3'>{data?.title}</Typography>

          <Box display={'flex'} justifyContent='space-between'>
            <Box display={'flex'} alignItems='center'>
              <GradeIcon style={{ fill: '#1ee81e' }}/>

              <Typography className='avg-rating' variant='h6'>
                {`${data?.average_rating}`}
              </Typography>

              <Typography className='rating-count' variant='h6'>
                {`- ${data?.rating_count} reviews`}
              </Typography>
            </Box>

            <Typography className='price' variant='h6'>
              {`$${data?.price} per dog per hour`}
            </Typography>
          </Box>

          <ImageList sx={{ width: '50%', height: '100%' }} cols={3} rowHeight={200}>
            {data.image.map((pic: { link: string | undefined }) => (
              <ImageListItem key={pic.link}>
                <img
                  src={`${pic?.link}?w=164&h=164&fit=crop&auto=format`}
                  srcSet={`${pic?.link}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                  loading='lazy'
                />
              </ImageListItem>
            ))}
          </ImageList>

          <Typography variant='h4'>Description</Typography>
          <Typography>{data?.description}</Typography>

          <Divider sx={{ margin: '40px 0' }}/>

          <Typography variant='h4'>Reviews</Typography>
          {data?.reviews?.length > 0 && data.reviews.map((review:any) => (
            <Reviews
              key={review.id}
              date={review.created_at}
              rating={review.rating}
              content={review.content}
              userImg={`https://picsum.photos/200?random=${review.id}`}
            />
          ))}
        </Box>
        :
        <Error message='Finding details...' />
      }
    </>
  )
}

export default ListingDetail
