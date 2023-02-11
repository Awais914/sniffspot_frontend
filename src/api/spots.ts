import { apiClient, headers } from './apiClient'

export const getAllSpots = async (queryParams?: any) => {
  return await apiClient.get(`/spots${queryParams}`)
    .then(response => {
      return response.data
    })
}

export const createNewSpot = async (data: any) => {
  const parseData = { spot: data }
  return await apiClient.post(`/spots`, parseData, { headers })
    .then(response => {
      return response
    })
}

export const getSpotDetails = async (queryParams?: any) => {
  return await apiClient.get(`${queryParams}`)
    .then(response => {
      return response.data
    })
}
