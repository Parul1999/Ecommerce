import axios from "axios";
import {
  createContext,
  useContext,
  useEffect,
  useReducer,
} from "react";
import { FiltersReducer } from "../reducer/filters-reducer";

const ProductContext = createContext();

const ProductProvider = ({ children }) => {
  const [state, dispatch] = useReducer(FiltersReducer, {
    category: [],
    products: [],
    rating: 1,
    rangeMaxVal:1000,//by default the highest value
    searchProd:"",
    sort: null,
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("/api/products");
        if (response.status == 200) {
          dispatch({ type: "FETCH_DATA", payload: response.data.products });
        }
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);

  return (
    <ProductContext.Provider value={{ state, dispatch }}>
      {children}
    </ProductContext.Provider>
  );
};

const useProducts = () => {
  return useContext(ProductContext);
};

export { ProductProvider, useProducts };
