import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Grid, TextField, FormControl, Button, CircularProgress } from '@mui/material'

import { createNewSpot } from 'api/spots'
import { uploadPicture } from 'utils/uploadImage'

const defaultValues = {
  title: '',
  description: '',
  price: 0,
  images_attributes: [],
}

type spotFormValues = {
  title: string,
  description: string,
  price: number,
  images_attributes: Array<string>
}

const SpotForm = () => {
  const [formValues, setFormValues] = useState<spotFormValues>(defaultValues)
  const [pictures, setPictures] = useState<FileList | null>()
  const [disableSubmit, setdisableSubmit] = useState(false)
  const [error, setError] = useState('')
  const navigate = useNavigate()

  const handleInputChange = (e: { target: { name: any; value: any } }) => {
    const { name, value } = e.target
    setFormValues({
      ...formValues,
      [name]: e.target.name === 'price' ? parseFloat(e.target.value) : value,
    })
  }

  const handleSubmit = async (event: { preventDefault: () => void }) => {
    event.preventDefault()
    setdisableSubmit(true)

    if (pictures !== undefined && pictures !== null && pictures?.length !== 0) {
      const uploadedImages: any[] = []
      for (let index = 0; index < pictures.length; index++) {
        await uploadPicture(pictures.item(index))
          .then(data => uploadedImages.push({ link: data }))
          .catch(e => setError(e.message))
      }

      await createNewSpot({ ...formValues, images_attributes: [...uploadedImages] })
        .then(response => {
          if (response.status == 201) {
            navigate(`/spots/${response.data.id}`)
          }
        })
        .catch(e => setError(e.message))
    }
    setdisableSubmit(false)
  }

  return (
    <form onSubmit={handleSubmit}>
      <Grid container alignItems='center' justifyContent='center' direction='column'>
        <Grid item width='100%'>
          <TextField
            required
            fullWidth
            margin='normal'
            id='title-input'
            name='title'
            label='Title'
            type='text'
            inputProps={{ minLength: 5, maxLength: 50 }}
            value={formValues.title}
            onChange={handleInputChange}
          />
        </Grid>

        <Grid item width='100%'>
          <TextField
            required
            id='description-input'
            name='description'
            label='Description'
            type='text'
            multiline
            margin='normal'
            rows={4}
            sx={{ width: '100%' }}
            inputProps={{ minLength: 10, maxLength: 200 }}
            value={formValues.description}
            onChange={handleInputChange}
          />
        </Grid>

        <Grid item width='100%'>
          <TextField
            required
            id='price-input'
            name='price'
            label='Price'
            type='number'
            margin='normal'
            sx={{ width: '100%' }}
            InputProps={{ inputProps: { min: 0, step: '0.01' } }}
            value={formValues.price}
            onChange={handleInputChange}
          />
        </Grid>

        <Grid item width='100%'>
          <FormControl>
            <input
              required
              accept='image/*'
              id='spot-image-file'
              name='spot-image'
              multiple
              type='file'
              onChange={(e) => setPictures(e.target.files)}
            />
          </FormControl>
        </Grid>

        <Button
          variant='contained'
          color='primary'
          type='submit'
          disabled={disableSubmit}
          fullWidth
          startIcon={<CircularProgress sx={{ display: disableSubmit ? 'block' : 'none' }}/>}
        >
          Create Spot
        </Button>
        <>{error}</>
      </Grid>
    </form>
  )
}
export default SpotForm
