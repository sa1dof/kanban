import axios from 'axios'

import { config } from 'config'

export { AxiosError } from 'axios'
const http = axios.create({ baseURL: config.api.baseURL })

// http.interceptors.request.use(
//   request => {
//     const { access = '' } = Store.get(config.api.tokensKEY as string)

//     // @ts-ignore
//     request.headers = {
//       ...request.headers,
//       ...(access ? { Authorization: `Bearer ${access}` } : {})
//     }

//     return request
//   },
//   error => Promise.reject(error)
// )

// http.interceptors.response.use(null, err => {
//   const response = err?.response || ({} as AxiosResponse)

//   const { data } = response || {}

//   if (data?.detail) error(data?.detail)

//   return Promise.reject(response)
// })

// function handleError(response: AxiosResponse<{ error: true; data: { message: string } }>) {}

export default http
