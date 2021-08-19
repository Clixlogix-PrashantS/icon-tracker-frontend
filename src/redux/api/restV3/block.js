import { makeUrl } from '../../../utils/utils'
import { trackerApiInstance } from './config'

export async function blockList(payload) {
  const trackerApi = await trackerApiInstance()
  return new Promise((resolve, reject) => {
    trackerApi.get(makeUrl('/v1/blocks', payload))
      .then(result => {
        console.log(result, "from rest")
        resolve(result.data)
      })
      .catch(error => {
        reject(error)
      })
  })
}

export async function blockInfo(payload) {
  const trackerApi = await trackerApiInstance()
  return new Promise((resolve, reject) => {
    trackerApi.get(makeUrl('/blocks/${block_height}', payload))
      .then(result => {
        resolve(result.data)
      })
      .catch(error => {
        reject(error)
      })
  })
}

export async function blockTxList(payload) {
  const trackerApi = await trackerApiInstance()
  return new Promise((resolve, reject) => {
    trackerApi.get(makeUrl('/v3/block/txList', payload))
      .then(result => {
        resolve(result.data)
      })
      .catch(error => {
        reject(error)
      })
  })
}