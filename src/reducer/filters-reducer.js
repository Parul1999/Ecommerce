const FiltersReducer = (state, action) => {

  const updateCategory = (state, category) => {
    return state["category"].filter((existingBrand) => existingBrand !== category);
  };

    switch (action.type) {
      case "FETCH_DATA":{
        return {...state,products:action.payload}
      }
      case "SEARCH":{
        return {...state,searchProd:action.payload}
      }
      case "SORT":
        return { ...state, sort: action.payload };
      case "RATING":
        return { ...state, rating: action.payload };
      case "CATEGORY":{
        return {
          ...state,
          category: state["category"].includes(action.payload)
            ? updateCategory(state, action.payload)
            : state["category"].concat(action.payload)
        };
      }
      case "SET_RANGE":
        return {
          ...state,
          rangeMaxVal:action.payload
        };
      case "CLEAR":
        return  {
          ...state,
          category:[],
          rating: 1,
          rangeMaxVal:1000 ,
          searchProd:"",
          sort: null,
        }
      default:
        return state;
    }
  };
  export { FiltersReducer };
  