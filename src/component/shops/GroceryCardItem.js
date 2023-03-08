import React from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'


const GroceryCardItem = () => {
  return (
   <>
     <Row className=' mt-4 mb-3'>
            <Col md={3} xs={12} >
            <Card className='cardeffect'>

<Card.Body>

    <div className='right-card-content '>
        <img src='./image/Apples.jpg' className="card-img-top" alt="..." />
        <div className='mt-3'>
            <Card.Title className='mx-3'>$0.60</Card.Title>
            <Card.Subtitle className="mb-2 mx-3 text-muted">Apples</Card.Subtitle>
        </div>
        <div className='additem '>
            <InputGroup className="mb-3 bg-gradient">
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
        <img src='./image/CelerySticks.jpg' className="card-img-top" alt="..." />
        <div className='mt-3'>
            <Card.Title className='mx-3'>$0.60</Card.Title>
            <Card.Subtitle className="mb-2 mx-3 text-muted">Apples</Card.Subtitle>
        </div>
        <div className='additem '>
            <InputGroup className="mb-3 bg-gradient">
                <Form.Control
                    placeholder="Add"
                    aria-label="Add"
                    className="inputdata"
                    aria-describedby="basic-addon2"
                />
                <Button variant="outline-success " id="button-addon2">
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
        <img src='./image/Corn.jpg' className="card-img-top" alt="..." />
        <div className='mt-3'>
            <Card.Title className='mx-3'>$0.60</Card.Title>
            <Card.Subtitle className="mb-2 mx-3 text-muted">Apples</Card.Subtitle>
        </div>
        <div className='additem '>
            <InputGroup className="mb-3">
                <Form.Control
                    placeholder="Add"
                    aria-label="Add"
                    className="inputdata"
                    aria-describedby="basic-addon2"
                />
                <Button variant="outline-success " id="button-addon2">
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
            <InputGroup className="mb-3">
                <Form.Control
                    placeholder="Add"
                    aria-label="Add"
                    className="inputdata"
                    aria-describedby="basic-addon2"
                />
                <Button variant="outline-success " id="button-addon2">
                    +
                </Button>
            </InputGroup>
        </div>

    </div>

</Card.Body>
</Card>

            </Col>
        </Row>
   </>
  )
}

export default GroceryCardItem
