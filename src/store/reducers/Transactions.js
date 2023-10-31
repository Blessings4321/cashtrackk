import { ADD_TRANSACTION, DELETE_TRANSACTION } from '../actions/types';

const initialState = {
    transactions: [
        {id: 1, title: 'soup', price: -20},
        {id: 2, title: 'rice', price: -50},
        {id: 3, title: 'bank', price: 700},
        {id: 1, title: 'polish', price: -70}
    ]
};


export default (state = initialState, {type, payload}) => {
    switch(type) {
        case ADD_TRANSACTION:
            return {
                ...state,
                transactions: [payload, ...state.transactions],
            };       
        case DELETE_TRANSACTION:
            return {
                ...state,
                transactions: state.transactions.filter(transaction => transaction.id !== payload
             ),
            };
        default:
            return state;
    };
};