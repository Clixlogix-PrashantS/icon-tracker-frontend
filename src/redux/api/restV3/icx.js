import { randomUint32 } from 'utils/utils'
import { walletApi } from './config'

export function icxGetScore(params) {
  return new Promise(resolve => {
    const param = {
      jsonrpc: "2.0",
      method: "icx_getScoreApi",
      params: params,
      id: randomUint32()
    }
    console.log(JSON.stringify(param))
    walletApi.post(`/api/v3`, JSON.stringify(param))
      .then(response => {
        console.log(response)
        resolve(response);
      })
      .catch(error => {
        if (!!error.response) {
          resolve(error.response.data);
        }
        else {
          resolve({
            error: {
              message: error.message
            }
          })
        }
      })
  });
}

export function icxCall(params) {
  return new Promise(resolve => {
    const param = {
      jsonrpc: "2.0",
      method: "icx_call",
      params: params,
      id: randomUint32()
    }
    console.log(JSON.stringify(param))
    walletApi.post(`/api/v3`, JSON.stringify(param))
      .then(response => {
        console.log(response)
        resolve(response);
      })
      .catch(error => {
        if (!!error.response) {
          resolve(error.response.data);
        }
        else {
          resolve({
            error: {
              message: error.message
            }
          })
        }
      })
  });
}