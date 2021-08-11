import { makeUrl } from '../../utils/utils';
import * as deepcopy from 'deepcopy'
import { trackerApiInstance } from '../api/restV3/config'

const SEARCH_DATA='search/SEARCH_DATA'
const searchData = (payload) => ({
    type: SEARCH_DATA,
    payload
})

// qualify request for block, transaction, or address
// blockLength = length1 || length2
// txLength = length
// addressLength = length
//BlockHash:
// if startsWith 0x and payload.length === blockLength, search tx list, 
// if startsWith 0x and payload.length !== blockLength setError['Incorrect # of chars for TxHash']
//Transaction:
//  if startsWith 0x and payload.length === txLength, search Transactions
// if startsWith 0x and payload.length !== txLength, setError['Incorrect # of chars for Transaction.']
//Address:
// if startsWith hx || startsWith cx and payload.length === addressLength, search Addresses
// if startsWith hx || startsWith cx and payload.length !== addressLength, setError['Incorrect # of chars for Address']




export const findData = (payload) => async (dispatch) => {
    const trackerApi = await trackerApiInstance()
    const response = trackerApi.get(makeUrl('/v0/search/Search', payload));
    if (response.ok) {
        const resultData = await response.data.data;
        dispatch(searchData(resultData))
    }
}

const initialState = {
    loading: false,
    error: ''
  };
  
let newState;

const searchReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEARCH_DATA: {
            newState = deepcopy(state);
            return newState;
        }
        default: 
        return state;
    }
}

export default searchReducer