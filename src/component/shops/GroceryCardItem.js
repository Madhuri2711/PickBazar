import React, { useContext, useEffect, useState } from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { ItemData } from '../context/ItemData';
import axios from 'axios'



const GroceryCardItem = () => {
   
    const { HandleItemAddCart,clickItem,addCart, AddCartItem, RemoveCartItem, addPrice } = useContext(ItemData);
    const [isClick, setIsClick] = useState(true);
    const [apiData,setApiData] = useState([]);
   
    const FetchApiData = async () => {
       
        const res = await axios.get('https://mock.redq.io/api/products');
        setApiData(res.data.data);
       
    }

   
    const ToggleClick = () => {
        if (isClick === true) {
            setIsClick(!isClick);
        }
    };
    useEffect(() => {
        FetchApiData();
    }, [])

    return (
        <>
            <Row className=' mt-4 mb-3'>

                 {apiData &&  apiData.map((data) => {
                    const { id, name,price, image } = data;
                    console.log(data);
                    return (
                        <Col md={3} xs={12} className='mt-3'>
                            <Card className='cardeffect'>

                                <Card.Body>

                                    <div className='right-card-content '>
                                        <img src={image.original} className="card-img-top" alt="..." />
                                        <div className='mt-3'>
                                        <Card.Title className='mx-3'>ID : {id}</Card.Title>
                                            <Card.Title className='mx-3'>$ {price}</Card.Title>

                                            <Card.Subtitle className="mb-2 mx-3 mt-2 text-muted">{name}</Card.Subtitle>
                                        </div>
                                        <div className='additem '>

                                            <div>
                                                <div className='group-style' onClick={ToggleClick}>
                                                   
                                                    {isClick  ?
                                                        <>
                                                            <div className=''> {addCart >= 0 ? "Add" : { addCart }} </div>
                                                            <button className='btn-plus' onClick={() => AddCartItem(1)}>+</button>

                                                        </>


                                                        :
                                                        <>
                                                            <button className='btn-minus' onClick={() => RemoveCartItem(id)}>-</button>
                                                            <div className=''>{addCart}</div>
                                                            <button className='btn-plus' onClick={() => HandleItemAddCart(id)}>+</button>
                                                        </>



                                                    }

                                                </div>






                                            </div>

                                        </div>

                                        </div>

                                </Card.Body>
                            </Card>

                        </Col>

                    )
                })}
                       
            </Row>
        </>
    )
}

export default GroceryCardItem


{/* 
                <Col md={3} xs={12} >
                    <Card className='cardeffect'>

                        <Card.Body>

                            <div className='right-card-content '>
                                <img src='./image/CelerySticks.jpg' className="card-img-top" alt="..." />
                                <div className='mt-3'>
                                    <Card.Title className='mx-3'>$0.60</Card.Title>
                                    <Card.Subtitle className="mb-2 mx-3 text-muted">Apples</Card.Subtitle>
                                </div>
                                <div className='additem '>
                                    <div className='additem '>
                                        <div>

                                            <div className='group-style'>

                                                <div className=''>Add</div>
                                                <button className='btn-plus'>+</button>
                                            </div>

                                            {/* <div className='group-style'>
                            <button className='btn-minus'>-</button>
                            <div className=''>Add</div>
                            <button className='btn-plus'>+</button>
                        </div> 


                                        </div>
                                        {/* <InputGroup className="mb-3 bg-gradient">
                <Form.Control
                    placeholder="Add"
                    aria-label="Add"
                    className="inputdata"
                    aria-describedby="basic-addon2"
                />

               
                <Button variant="outline-secondary" id="button-addon2">
                    +
                </Button>
            </InputGroup> *
                                    </div>
                                </div>

                            </div>

                        </Card.Body>
                    </Card>

                </Col>
                <Col md={3} xs={12} >
                    <Card className='cardeffect'>

                        <Card.Body>

                            <div className='right-card-content '>
                                <img src='./image/Corn.jpg' className="card-img-top" alt="..." />
                                <div className='mt-3'>
                                    <Card.Title className='mx-3'>$0.60</Card.Title>
                                    <Card.Subtitle className="mb-2 mx-3 text-muted">Apples</Card.Subtitle>
                                </div>

                                <div className='additem '>
                                    <div>

                                        <div className='group-style'>

                                            <div className=''>Add</div>
                                            <button className='btn-plus'>+</button>
                                        </div>

                                        {/* <div className='group-style'>
                            <button className='btn-minus'>-</button>
                            <div className=''>Add</div>
                            <button className='btn-plus'>+</button>
                        </div> *


                                    </div>
                                    {/* <InputGroup className="mb-3 bg-gradient">
                <Form.Control
                    placeholder="Add"
                    aria-label="Add"
                    className="inputdata"
                    aria-describedby="basic-addon2"
                />

               
                <Button variant="outline-secondary" id="button-addon2">
                    +
                </Button>
            </InputGroup> 

                                </div>

                            </div>

                        </Card.Body>
                    </Card>

                </Col>
                <Col md={3} xs={12} >
                    <Card className='cardeffect'>

                        <Card.Body>

                            <div className='right-card-content '>
                                <img src='./image/Bluberries-2.png' className="card-img-top" alt="..." />
                                <div className='mt-3'>
                                    <Card.Title className='mx-3'>$0.60</Card.Title>
                                    <Card.Subtitle className="mb-2 mx-3 text-muted">Apples</Card.Subtitle>
                                </div>
                                <div className='additem '>
                                    <div>

                                        <div className='group-style'>

                                            <div className=''>Add</div>
                                            <button className='btn-plus'>+</button>
                                        </div>

                                        {/* <div className='group-style'>
                            <button className='btn-minus'>-</button>
                            <div className=''>Add</div>
                            <button className='btn-plus'>+</button>
                        </div> *


                                    </div>
                                    {/* <InputGroup className="mb-3 bg-gradient">
                <Form.Control
                    placeholder="Add"
                    aria-label="Add"
                    className="inputdata"
                    aria-describedby="basic-addon2"
                />

               
                <Button variant="outline-secondary" id="button-addon2">
                    +
                </Button
            </InputGroup> 

                                </div>

                            </div>

                        </Card.Body>
                    </Card>*/}

          