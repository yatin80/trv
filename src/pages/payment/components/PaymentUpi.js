import React from 'react';
import { Col, Form, Row } from 'react-bootstrap';

function PaymentUpi() {
    return (

        <Form>
            <Row>
                <Col xs={12}>
                    <h6>UPI ID</h6>
                    <Form.Control
                        type="text"
                        placeholder="yourname@upi"
                        className="mb-3"

                    />
                </Col>
            </Row>
        </Form>


    );
}

export default PaymentUpi;