import axios from 'axios'
import { BASE_URL } from 'utils/constant'

export const headers = {
  Accept: 'application/json',
  'Content-Type': 'application/json',
}

export const apiClient = axios.create({
  baseURL: BASE_URL,
  headers
})
