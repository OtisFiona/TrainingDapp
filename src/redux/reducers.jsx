const initialState = {
    account: null,
    nfts: [],
  };
  
  export default function rootReducer(state = initialState, action) {
    switch (action.type) {
      case 'SET_ACCOUNT':
        return { ...state, account: action.payload };
      case 'SET_NFTS':
        return { ...state, nfts: action.payload };
      default:
        return state;
    }
  }
  