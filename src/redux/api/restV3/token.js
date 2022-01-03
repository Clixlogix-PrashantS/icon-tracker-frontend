import { makeUrl } from '../../../utils/utils'
import { trackerApiInstance } from './config'

export async function tokenList(payload) {
  const trackerApi = await trackerApiInstance()
  return new Promise((resolve, reject) => {
    trackerApi.get('/api/v1/contracts?contract_type=IRC2')
      .then(result => {
        resolve(result)
      })
      .catch(error => {
        reject(error)
      })
  })
}

export async function tokenTxList(payload) {
  const trackerApi = await trackerApiInstance()
  return new Promise((resolve, reject) => {
    trackerApi.get(makeUrl('/api/v1/transactions/token-transfers', payload))
      .then(result => {
        resolve(result)
      })
      .catch(error => {
        reject(error)
      })
  })
}

export async function tokenSummary(payload) {
  const trackerApi = await trackerApiInstance()
  return new Promise((resolve, reject) => {
    trackerApi.get(`api/v1/contracts/${payload.contractAddr}`)
      .then(result => {
        resolve(result)
      })
      .catch(error => {
        reject(error)
      })
  })
}

export async function tokenTransfersList(payload) {
  console.log(payload, "token transfer list payload")
  const trackerApi = await trackerApiInstance()
  if (!payload.contractAddr){
    return new Promise((resolve, reject) => {
      trackerApi.get(makeUrl('/v1/transactions/token-transfers', payload))
        .then(result => {
          console.log(result, "token tx result")
          resolve(result.data)
        })
        .catch(error => {
          reject(error)
        })
    })
  } else {
    return new Promise((resolve, reject) => {
      trackerApi.get(`api/v1/transactions/token-transfers/token-contract/${payload.contractAddr}`)
        .then(result => {
          console.log(result, "token tx result")
          resolve(result)
        })
        .catch(error => {
          reject(error)
        })
    })
  }
  
  
}

export async function tokenHoldersList(payload) {
  const trackerApi = await trackerApiInstance()
  return new Promise((resolve, reject) => {
    trackerApi.get(makeUrl('/v1/token/holders', payload))
      .then(result => {
        resolve(result.data)
      })
      .catch(error => {
        reject(error)
      })
  })
}