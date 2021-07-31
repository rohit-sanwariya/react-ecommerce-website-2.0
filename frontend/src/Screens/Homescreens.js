import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import Product from '../Components/Product'
import axios from 'axios'
const Homescreens = () => {
    const [products, setProduct] = useState([]);
    
    useEffect(() => { 
        const getProducts = async()=>{
            const {data} = await axios.get("/api/products/")
            setProduct(data)
         }
         getProducts()
        
        return () => {
        }
    }, [])
    return (
        <>
            <h1>
                Latest Products
            </h1>
            <Row>
                {
                    products.map(product => 
                    (<Col key={product._id} sm={12} md={6} xl={3}>
                      <Product product={product}/>
                    </Col>))
                }
            </Row>
        </>
    )
}

export default Homescreens
