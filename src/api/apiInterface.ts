import axios from 'axios'
import { serverUrl } from '../constants/config'

const ApiCall = {
  get: async (url: string) => axios.get(`${serverUrl}${url}`)
}

export default ApiCall
