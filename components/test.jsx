import classes from '../styles/test.module.css'
import { Fragment, useState, useEffect } from 'react'


const fetchProductsWithErrorHandling = (url) => {
    const [products, setProducts] = useState([])
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetch(url, { mode: "cors" })
        .then((response) => {
            if (response.status >= 400) {
                throw new Error('server error');
            }
            return response.json();
        })
        .then((response) => setProducts(response))
        .catch((error) => setError(error))
        .finally(() => setLoading(false))
    }, [])

    return { products, error, loading}
}

function Test() {
    const url = "https://fakestoreapi.com/products";
    const { products, error, loading } = fetchProductsWithErrorHandling(url);

    if (loading) return <p>Loading</p>
    if (error) return <p>A network error was encountered</p>

    return (
        <>
            {products.map(item => <div className={classes.item}>{item.title}</div>)}
        </>
    )
}


export default fetchProductsWithErrorHandling 