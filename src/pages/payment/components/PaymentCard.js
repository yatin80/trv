import React from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';

function PaymentCard(props) {
    return (
        <>

            <Form>
                <h6>Card Number</h6>
                <Row>
                    <Col xs={12}>
                        <Form.Control
                            type="number"
                            placeholder="1234 5678 9012 3456"
                            className="mb-3"

                        />
                    </Col>
                    <Col xs={12} md={6}>
                        <Form.Control
                            type="number"
                            placeholder="MM/YY"
                            className="mb-3"
                        />
                    </Col>
                    <Col xs={12} md={6}>
                        <Form.Control
                            type="number"
                            placeholder="CVV"
                            className="mb-3"
                        />
                    </Col>
                    <Col xs={12}>
                        <Form.Control
                            type="text"
                            placeholder="Enter Card Number"
                            className="mb-3"

                        />
                    </Col>
                </Row>
                <Button variant="primary" type="submit" className='w-100'>
                    Pay Now
                </Button>

            </Form>

        </>
    );
}

export default PaymentCard;