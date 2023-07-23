
import {
  FETCH_PACKAGES,
  ADD_PACKAGE,
  GET_PACKAGE_BY_ID,
  SEARCH_PACKAGES,
  CLEAR_PACKAGE_DETAILS,
  SET_CITY_FILTER,
  SET_DURATION_FILTER,
  SET_PRICE_FILTER,
} from "./packagesActions";



const initialState = {
  packagesList: [],
  packagesSearch: [],
  packagesFiltered: [],
  packageDetails: {},
  filters: {
  cityFilter: "",
  durationFilter: "Todos",
  priceFilter: "TodosPrecio",
 
  }
  
};

const packagesReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PACKAGES:
      return {
        ...state,
        packagesList: action.payload,
        packagesFiltered: action.payload,
      };
    case ADD_PACKAGE:
      return {
        ...state,
      };
    case GET_PACKAGE_BY_ID:
      return {
        ...state,
        packageDetails: action.payload,
      };
      case SEARCH_PACKAGES:
        return {
          ...state,
          packagesSearch: action.payload,
          packagesFiltered: action.payload, // <-- Actualizar los paquetes filtrados con los resultados de búsqueda
        };

    case CLEAR_PACKAGE_DETAILS:
      return {
        ...state,
        packageDetails: {},
      };



      case SET_CITY_FILTER:
        let filteredByCity;
        
        if (action.payload !== 'Todos') {
          filteredByCity = state.packagesList.filter((el) => el.City.name === action.payload);
        } else {
          filteredByCity = state.packagesList; // Si selecciona 'Todos', muestra todos los paquetes sin filtrar
        }
        
        return {
          ...state,
          packagesFiltered: filteredByCity,
          packagesSearch:filteredByCity,
          filters: {
            ...state.filters,
            cityFilter: action.payload,
          },
        };

        case SET_DURATION_FILTER:

        let orderDuration = [...state.packagesList];
        orderDuration = orderDuration.sort((a, b) => {
          if(a.duration < b.duration){
            return action.payload === "Menor-Mayor" ? 1 : -1;
          }
          if(a.duration > b.duration){
            return action.payload === "Menor-Mayor" ? -1 : 1;
          }
          return 0;
        })

        return {
          ...state,
          packagesList: action.payload === "Todos" ? state.packagesFiltered : orderDuration,
        }
      // let durationOrden = action.payload;
      // if (durationOrden === "Menor-Mayor") {
      //   return {
      //     ...state,
      //     packagesFiltered: state.packagesFiltered.sort((a, b) => a.duration - b.duration),
      //     filters: {
      //       ...state.filters,
      //       durationFilter: durationOrden,
      //     },
      //   };
      // } else if (durationOrden === "Mayor-Menor") {
      //   return {
      //     ...state,
      //     packagesFiltered: state.packagesFiltered.sort((a, b) => b.duration - a.duration),
      //     filters: {
      //       ...state.filters,
      //       durationFilter: durationOrden,
      //     },
      //   };
      // }
      // // Si el durationFilter no coincide con ninguna opción, devolvemos el estado tal como está.
      // return state;

       

       
    // case SET_DURATION_FILTER:
    //   return {
    //     ...state,
    //     durationFilter: action.payload,
    //     packagesFiltered: applyFilters(state, {
    //       durationFilter: action.payload,
    //     }),
    //   };
    
 
    case SET_PRICE_FILTER:
      //Sara este es el ordenamiento con mi logica, funcionan combinados, de la otra forma tmb
      //en el de duration segui tu logica aplicada en el de price, es el codigo que esta comentado,
      //funciona tmb solo que en el front al darle al todos no me trae nada y no supe como nimplementarlo.
      //aunque probe muchas formas. 
      let orderPrice = [...state.packagesList];
        orderPrice = orderPrice.sort((a, b) => {
          if(a.standarPrice < b.standarPrice){
            return action.payload === "MenorPrecio" ? -1 : 1;
          }
          if(a.standarPrice > b.standarPrice){
            return action.payload === "MenorPrecio" ? 1 : -1;
          }
          return 0;
        })

        return {
          ...state,
          packagesList: action.payload === "precios" ? state.packagesFiltered : orderPrice,
        }

    //   const sortFilter = action.payload;
    // if (sortFilter === "MenorPrecio") {
    //     return {
    //       ...state,
    //       packagesFiltered: state.packagesFiltered.sort((a, b) => a.standarPrice - b.standarPrice),
    //       filters: {
    //         ...state.filters,
    //         priceFilter: sortFilter,
    //       },
    //     };
    //   } else if (sortFilter === "MayorPrecio") {
    //     return {
    //       ...state,
    //       packagesFiltered: state.packagesFiltered.sort((a, b) => b.standarPrice - a.standarPrice),
    //       filters: {
    //         ...state.filters,
    //         priceFilter: sortFilter,
    //       },
    //     };
    //   }
      // Si el sortFilter no coincide con ninguna opción, devolvemos el estado tal como está.
      // return state;
  
    default:
      return state;
  }
};

// function applyFilters(state, newFilters) {
//   const filters = {
//     ...state,
//     ...newFilters,
//   };

//   let results = [...state.packagesList];

//   if (filters.cityFilter) {
//     results = results.filter(
//       (packages) => packages.idCity === Number(filters.cityFilter)
//     );
//   }

//   if (filters.durationFilter && filters.durationFilter !== "Todos") {
//     if (filters.durationFilter === "Menor-Mayor") {
//       results = [...results].sort((a, b) => a.duration - b.duration);
//     } else if (filters.durationFilter === "Mayor-Menor") {
//       results = [...results].sort((a, b) => b.duration - a.duration);
//     }
//   }

//   if (filters.priceFilter && filters.priceFilter !== "TodosPrecio") {
//     if (filters.priceFilter === "MenorPrecio") {
//       results = [...results].sort((a, b) => a.standarPrice - b.standarPrice);
//     } else if (filters.priceFilter === "MayorPrecio") {
//       results = [...results].sort((a, b) => b.standarPrice - a.standarPrice);
//     }
//   }

//   return results;
// }

export default packagesReducer;
