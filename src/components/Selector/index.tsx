import Box from '@mui/material/Box'
import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import Select, { SelectChangeEvent } from '@mui/material/Select'

type SortSpotsProps = {
  sortBy: string,
  setSortBy: React.Dispatch<React.SetStateAction<string>>
}

const SortSpots = ({ sortBy, setSortBy }: SortSpotsProps) => {
  const handleChange = (event: SelectChangeEvent) =>
    setSortBy(`${event.target.value as string}`)

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id='spot-sort-select-label'>Price</InputLabel>
        <Select
          labelId='spot-sort-select-label'
          id='spot-sort-select'
          value={sortBy}
          label='Spot'
          onChange={handleChange}
        >
          <MenuItem value={''}>Default</MenuItem>
          <MenuItem value={'/sort?order=asc'}>Low to high</MenuItem>
          <MenuItem value={'/sort?order=desc'}>High to low</MenuItem>
        </Select>
      </FormControl>
    </Box>
  )
}

export default SortSpots
