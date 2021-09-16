import { makeUrl } from '../../utils/utils';
import * as deepcopy from 'deepcopy'
import { INITIAL_STATE} from '../../../src/utils/const'
import { trackerApiInstance } from '../api/restV3/config'

const TX_PREFIX = `/v1/transactions`

// previously src/redux/actionTypes/actionTypes.js
const TX_LIST = 'TX_LIST'
const TX_DETAIL = 'TX_DETAIL'

// previously src/redux/actions/transactionsActions.js
const getTxList = (payload) => ({
    type: TX_LIST, 
    payload
});

const getTxDetail = (payload) => ({
    type: TX_DETAIL,
    payload
})

// previously src/redux/api/restV3/transaction.js
export const txList = (payload) => async (dispatch) => {
    const trackerApi = await trackerApiInstance()
    try {
        const res = await trackerApi.get(makeUrl(`${TX_PREFIX}`, payload))
        if (res.data) {
            const data = res.data
            dispatch(getTxList(data))
            return data
        }
    }
    catch (e) {
        console.log(e)
    }
}

export const transactionTxDetail = (payload) => async (dispatch)=> {
    const trackerApi = await trackerApiInstance()
    try {
        const res = await trackerApi.get(makeUrl(`${TX_PREFIX}/${payload.txHash}`, payload))
        if (res.data) {
            const data = res.data
            dispatch(getTxDetail(data))
            return data
        }
    }
    catch (e) {
        console.log(e)
    }
}



const initialState = {
    transaction: INITIAL_STATE['OBJ'],
    recentTx: INITIAL_STATE['ARR'],
    transactionEvents: INITIAL_STATE['ARR'],
    transactionInternalTx: INITIAL_STATE['ARR'],
  }

let newState;
// previously src/redux/reducers/transactionsReducer.js
const transactionsReducer = (state = initialState, action) => {
    switch(action.type) {
        case TX_LIST: {
            newState = deepcopy(state)
            newState.recentTx.data = action.payload
            return newState
        }
        case TX_DETAIL: {
            newState = deepcopy(state)
            newState.transaction.data = action.payload
            return newState
        }
        default:
            return state;
    }
};

export default transactionsReducer;