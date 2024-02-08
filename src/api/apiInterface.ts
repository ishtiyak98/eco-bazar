import Axios from 'axios'
import { serverUrl } from '../constants/config'

const ApiCall = {
  get: async (url: string) => Axios.get(`${serverUrl}${url}`)
}

export default ApiCall
