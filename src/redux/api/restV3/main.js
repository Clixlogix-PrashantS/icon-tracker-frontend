import { trackerApiInstance } from './config'

export function getMainInfo() {
  const trackerApi = trackerApiInstance()
  return new Promise((resolve, reject) => {
    trackerApi.get('/v3/main/mainInfo')
      .then(result => {
        resolve(result.data)
      })
      .catch(error => {
        reject(error)
      })
  })
}

export function getMainChart() {
  const trackerApi = trackerApiInstance()
  return new Promise((resolve, reject) => {
    trackerApi.get('/v3/main/mainChart')
      .then(result => {
        resolve(result.data.data)
      })
      .catch(error => {
        reject(error)
      })
  })
}
