import React from 'react';
import './style.scss';
import { Card, Col, Form, OverlayTrigger, Row, Tooltip } from 'react-bootstrap';
import FriendsList from './components/FriendsList';

function SplitePayment(props) {
    const friendData = [
        { name: 'John Doe', status: 'Paid', amount: 500, img: 'https://images.pexels.com/photos/3921368/pexels-photo-3921368.jpeg' },
        { name: 'Jane Smith', status: 'Pending', amount: 300, img: 'https://images.pexels.com/photos/8090123/pexels-photo-8090123.jpeg' },
        { name: 'Alice Johnson', status: 'Paid', amount: 450, img: 'https://images.pexels.com/photos/1234567/pexels-photo-1234567.jpeg' },
        { name: 'Bob Brown', status: 'Pending', amount: 200, img: 'https://images.pexels.com/photos/8090123/pexels-photo-8090123.jpeg' },
    ]
    const friendTotalData = [1, 2, 3, 4];
    const renderTooltip = (props) => (
        <Tooltip {...props}>
            John Doe
        </Tooltip>
    );
    return (
        <div>
            <h2 className='page-title'>Split Payment for Your trip</h2>
            <Card>
                <Card.Body className='p-4'>
                    <Row>
                        <Col md={6} className='mb-3'>
                            <Form.Label htmlFor="inputPassword5">Booking Referance</Form.Label>
                            <Form.Control
                                type="text"
                                id="inputPassword5"
                                aria-describedby="passwordHelpBlock"
                                placeholder='Enter Booking Referance'
                            />
                        </Col>
                        <Col md={6} className='mb-3'>
                            <Form.Label htmlFor="inputPassword5">Total Booking Cost</Form.Label>
                            <Form.Control
                                type="text"
                                id="inputPassword5"
                                aria-describedby="passwordHelpBlock"
                                placeholder='Enter Total Booking Cost'
                            />
                        </Col>
                        <Col md={6} className='mb-3'>
                            <Form.Label htmlFor="inputPassword5">Amout to Split</Form.Label>
                            <Form.Control
                                type="text"
                                id="inputPassword5"
                                aria-describedby="passwordHelpBlock"
                                placeholder='Enter Amount to Split'
                            />
                        </Col>
                    </Row>
                    <hr />
                    <h5 className='mt-4'>Friends to Split with</h5>
                    <div className='mt-2'>
                        <Form.Control
                            type="text"
                            id="inputPassword5"
                            aria-describedby="passwordHelpBlock"
                            placeholder='Search Friends with email or phone number'
                        />
                    </div>
                    <div className='friends-added-list mt-3'>
                        {
                            friendTotalData.map((item, index) => (
                                <>
                                    <OverlayTrigger
                                        placement="top"
                                        delay={{ show: 250, hide: 400 }}
                                        overlay={renderTooltip}
                                    >
                                        <div className='friend-add-item' key={index}>
                                            <img src="https://images.pexels.com/photos/8090123/pexels-photo-8090123.jpeg" alt='' className='img-fluid' />
                                        </div>
                                    </OverlayTrigger>

                                </>

                            ))
                        }
                        <p className='friend-total-count'><span className='text-secondary'>({friendTotalData.length})</span> Friends</p>

                    </div>
                    <div className='d-flex justify-content-end mt-4'>
                        <button className='btn btn-primary'>Split Payment</button>
                    </div>
                    <hr />
                    <h5 className='mt-4'>Payment Paid List</h5>
                    <FriendsList friendData={friendData} />

                </Card.Body>
            </Card>
        </div>
    );
}

export default SplitePayment;