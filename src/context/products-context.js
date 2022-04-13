import axios from "axios";
import { createContext,useContext,useState,useEffect } from "react";
const ProductContext = createContext();

const ProductProvider =({children})=>{
    const [products,setProducts] = useState([])

    useEffect( ()=>{
        const fetchData =async ()=>{
            try{
                const response = await axios.get('/api/products')
                if(response.status==200)setProducts(response.data.products)
                    }
                    catch(err){
                        console.log(err)
                    }
        }
        fetchData();
    },[])

    return <ProductContext.Provider value={{products}}>{children}</ProductContext.Provider>
}

const useProducts =()=>{return useContext(ProductContext)}

export {ProductProvider,useProducts}