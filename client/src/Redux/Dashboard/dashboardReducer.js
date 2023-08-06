const initialState = {
    packagesList: [], // Otros estados existentes en tu reducer...
    bills: [], // Nuevo estado para almacenar las facturas
    // ...otros estados...
  };
  
  const packagesReducer = (state = initialState, action) => {
    switch (action.type) {
      case "FETCH_ALL_BILLS_SUCCESS":
        return {
          ...state,
          bills: action.payload,
        };
      // ...otros casos existentes en tu reducer...
      default:
        return state;
    }
  };
  
  export default packagesReducer;
  