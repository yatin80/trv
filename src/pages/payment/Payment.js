import React, { useState, useEffect } from 'react';
import './style.scss';
import { Tabs, Tab, Accordion, Card } from 'react-bootstrap';
import PaymentCard from './components/PaymentCard';
import { faCreditCard, faQrcode, faWallet } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PaymentWallet from './components/PaymentWallet';
import PaymentUpi from './components/PaymentUpi';

const Payment = () => {
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

    const handleResize = () => {
        setIsMobile(window.innerWidth < 768);
    };

    useEffect(() => {
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const data = [
        { title: 'UPI', icon: faQrcode, content: <PaymentUpi /> },
        { title: 'Card', icon: faCreditCard, content: <PaymentCard /> },
        { title: 'Wallet', icon: faWallet, content: <PaymentWallet /> },

    ];

    return (
        <div className="container-fluid px-0">
            <h2 className='page-title'>Payment</h2>
            <div style={{ maxWidth: '600px', margin: '0 auto' }}>

                {isMobile ? (
                    <Accordion defaultActiveKey="0" className='payment-accordion'>
                        {data.map((item, idx) => (
                            <Accordion.Item eventKey={idx.toString()} key={idx}>
                                <Accordion.Header>
                                    <FontAwesomeIcon icon={item.icon} className="me-3" />
                                    {item.title}
                                </Accordion.Header>
                                <Accordion.Body>{item.content}</Accordion.Body>
                            </Accordion.Item>
                        ))}
                    </Accordion>
                ) : (
                    <Card>
                        <Card.Body className='p-3'>
                            <div className='payment-tabs'>
                                <Tabs defaultActiveKey="0" id="desktop-tabs" className="mb-3">
                                    {data.map((item, idx) => (
                                        <Tab eventKey={idx.toString()}
                                            title={
                                                <>
                                                    <FontAwesomeIcon icon={item.icon} className="me-2" />
                                                    {item.title}
                                                </>
                                            }
                                            key={idx}>
                                            <p>{item.content}</p>
                                        </Tab>
                                    ))}
                                </Tabs>
                            </div>
                        </Card.Body>
                    </Card>
                )}

            </div>
        </div>
    );
};

export default Payment;
