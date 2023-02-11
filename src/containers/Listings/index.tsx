import { useEffect, useState } from 'react'
import { useQuery } from 'react-query'
import { Container, Typography, Grid, Box } from '@mui/material'

import Error from 'components/Error'
import SpotCard from 'components/Card'
import SortSpots from 'components/Selector'
import { getAllSpots } from 'api/spots'

const Listings = () => {
  const [sortBy, setSortBy] = useState<string>('')
  const { data, error, refetch } = useQuery('spots', () => getAllSpots(sortBy))

  if (error) {
    return <Error />
  }

  useEffect(() => {
    if (!error) refetch()
  }, [sortBy])

  return (
    <>
      {data ?
        <Container sx={{ py: 8 }} maxWidth='md'>
          <Box display='flex' justifyContent='space-between'>
            <Typography variant='h5'>Popular private dog parks near Seattle, Washington</Typography>
            <SortSpots sortBy={sortBy} setSortBy={setSortBy}/>
          </Box>

          <Grid container spacing={4}>
            {data && data.map((spot: any) => (
              <Grid item key={spot.id} xs={12} sm={6} md={4}>
                <SpotCard
                  id={spot?.id}
                  title={spot?.title}
                  description={spot?.description}
                  price={spot?.price}
                  image={spot?.image}
                  average_rating={spot?.average_rating}
                  rating_count={spot?.rating_count}
                />
              </Grid>
            ))}
          </Grid>
        </Container>
        :
        <>Nothing to show</>
      }
    </>
  )
}

export default Listings
