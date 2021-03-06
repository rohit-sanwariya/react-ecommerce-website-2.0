import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Button, Card, Col, Image, ListGroup, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Rating from '../Components/Rating';

const ProductScreens = ({ match }) => {
    const [product, setProduct] = useState([]);
    const id = match.params.id

    useEffect(() => {
        const getProduct = async () => {
            const { data } = await axios.get(`/api/products/${id}`)
            setProduct(data)
        }
        getProduct()
        return () => {
        }
    }, [id])


    return (
        <>
            <Link to="/" className="btn btn-dark my-3">
                Go Back
            </Link>
            <Row>
                <Col md={6}>
                    <Image fluid src={product.image} alt={product.name} />
                </Col>
                <Col md={3}>
                    <ListGroup variant="flush">
                        <ListGroup.Item >
                            <h3>{product.name}</h3>
                        </ListGroup.Item>

                        <ListGroup.Item >
                            <Rating rating={product.rating} numReviews={product.numReviews} />
                        </ListGroup.Item>
                        <ListGroup.Item >
                            Price: ${product.price}
                        </ListGroup.Item>
                        <ListGroup.Item >
                            Description: {product.description}
                        </ListGroup.Item>
                    </ListGroup>
                </Col>
                <Col md={3}>
                    <Card >
                        <ListGroup variant="flush">
                            <ListGroup.Item >
                                <Row>
                                    <Col>
                                        Price:
                                    </Col>
                                    <Col>
                                        <strong>
                                            ${product.price}
                                        </strong>
                                    </Col>
                                </Row>
                            </ListGroup.Item>
                            <ListGroup.Item >
                                <Row>
                                    <Col>
                                        Status:
                                    </Col>
                                    <Col>
                                        <strong>
                                            {product.countInStock > 0 ? "In Stock" : "Out Of Stock"}
                                        </strong>
                                    </Col>
                                </Row>
                            </ListGroup.Item>
                            <ListGroup.Item >
                                <Button disabled={product.countInStock === 0}
                                    type="button" className="btn-block">
                                    Add To Cart
                                </Button>
                            </ListGroup.Item>
                        </ListGroup>
                    </Card>

                </Col>
            </Row>
        </>
    )
}

export default ProductScreens;
