const FilterProducts = (state, data) => {
    let tempData = [...data];
    //filter on ratings
    tempData = tempData.filter((product)=>product.rating >= state.rating);
    //filter on pricing
    tempData = tempData.filter((product) => Number(product.price) <= Number(state.rangeMaxVal));
    //filter on category(men-women)
    tempData = state.category.length === 0
                ? tempData
                : tempData.filter((product) => state.category.includes(product.category));
    
    return tempData;
  };

  const SortProducts = (sortBy, data) => {
    let tempData = [...data];
    if (sortBy === "HIGH_TO_LOW") {
      tempData.sort((a, b) => b.price - a.price);
    }
    if (sortBy === "LOW_TO_HIGH") {
      tempData.sort((a, b) => a.price - b.price);
    }
  
    return tempData;
  };
  
  const SearchProducts = (element,data) =>{
    let tempData = [...data];
    if(element!="" && element.length >0)
    {
      tempData =  data.filter(
        product => {
          return (
            product
            .productName
            .toLowerCase()
            .includes(element.toLowerCase()) 
          );
        }
      );
    }
    return tempData
  }
export {FilterProducts,SortProducts,SearchProducts}