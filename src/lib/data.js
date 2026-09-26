export const  fetchProductData = async () => {
  const res = await fetch(`https://dummyjson.com/products`);
  const data = await res.json();
  return data;
};

export const  fetchSearchData = async (searchText) => {
  const res = await fetch(`https://dummyjson.com/products/search?q=${searchText}`);
  const data = await res.json();
  return data;
};

export const  fetchCategoryData = async (categoryText) => {
  const res = await fetch(`https://dummyjson.com/products/category/${categoryText}`);
  const data = await res.json();
  return data;
};