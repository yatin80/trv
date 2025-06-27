import { faBuilding, faPlane, faShip } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react'
import { Button, Card, Form, InputGroup, Tab, Tabs } from 'react-bootstrap';
import './style.scss';
import TrackInput from './components/TrackInput';
import TrackPrev from './components/TrackPrev';

export default function RefundTrack() {
    const [key, setKey] = useState('flight');
    const [trackValue, setTrackValue] = useState('');
    const [trackPrev, setTrackPrev] = useState(false);
    const [error, setError] = useState(false);

    const handleTrackFlight = () => {
        console.log('Tracking:', trackValue);
        if (trackValue !== '') {
            setTrackPrev(true);
            setError(false);
        } else {
            setTrackPrev(false);
            setError(true);
            setTimeout(() => {
                setError(false);
            }, 3000);
        }
    }
    const errorMessage = (
        <p className='text-light text-sm mt-2 ps-1'>Please enter your <span className='text-danger'>{key.toUpperCase()}</span> booking ID</p>
    )
    return (
        <div>
            <h2 className='page-title'>Refund Track</h2>
            <Card>
                <Card.Body className='p-3'>
                    <div className='tracking-tabs'>
                        <Tabs
                            id="controlled-tab-example"
                            activeKey={key}
                            onSelect={(k) => setKey(k)}
                            className="mb-3 "
                        >
                            <Tab eventKey="flight" title={
                                <>
                                    <FontAwesomeIcon icon={faPlane} className="me-2" />
                                    Flight
                                </>
                            }>

                                <TrackInput placeholder="Enter Flight Booking ID" trackValue={trackValue} handleTrack={handleTrackFlight} setTrackValue={setTrackValue} />
                                {error && errorMessage}
                                {trackPrev &&
                                    <TrackPrev trackId={trackValue} />
                                }


                            </Tab>
                            <Tab eventKey="hotel" title={
                                <>
                                    <FontAwesomeIcon icon={faBuilding} className="me-2" />
                                    Hotel
                                </>
                            }>
                                <TrackInput placeholder="Enter Hotel Booking ID" trackValue={trackValue} handleTrack={handleTrackFlight} setTrackValue={setTrackValue} />
                                {error && errorMessage}
                                {trackPrev &&
                                    <TrackPrev trackId={trackValue} />
                                }

                            </Tab>
                            <Tab eventKey="cruis" title={
                                <>
                                    <FontAwesomeIcon icon={faShip} className="me-2" />
                                    Cruis
                                </>
                            } >
                                <TrackInput placeholder="Enter Cruis Booking ID" trackValue={trackValue} handleTrack={handleTrackFlight} setTrackValue={setTrackValue} />
                                {error && errorMessage}
                                {trackPrev &&
                                    <TrackPrev trackId={trackValue} />
                                }
                            </Tab>
                        </Tabs>
                    </div>
                </Card.Body>
            </Card>

        </div>
    )
}
