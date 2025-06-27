import React from 'react';
import { Button, Form } from 'react-bootstrap';
import TrackPrev from './TrackPrev';

function TrackInput(props) {
    return (
        <>
            <div className="d-flex">

                <Form.Control
                    type="text"

                    placeholder={props.placeholder || 'Enter Booking ID'}
                    value={props.trackValue || ''}
                    onChange={(e) => props.setTrackValue(e.target.value)}
                    id="track-id"
                    className='rounded-end-0'

                />
                <Button size='sm' variant='info' className='text-white rounded-start-0' onClick={props.handleTrack}>Track</Button>
            </div>
            
        </>
    );
}

export default TrackInput;