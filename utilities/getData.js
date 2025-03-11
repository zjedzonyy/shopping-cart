
const url = "https://fakestoreapi.com/products";

const getProducts = async () => {
    return fetch(url)
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            return data;
        })
}


export default getProducts;