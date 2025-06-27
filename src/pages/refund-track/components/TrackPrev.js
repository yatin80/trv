import React from 'react';

function TrackPrev(props) {
    return (
        <div className='mt-3'>
            <p className='my-2 h6'>Booking ID <span className='text-secondary'>{props.trackId}</span> is currently:  <span className=' btn btn-outline-success rounded-1 py-1 px-2 spacing' style={{ fontSize: '12px' }}>Confirmed</span>'</p>
            <div className="timeline-container">
                <ul className="tl">
                    <li>
                        <div className="item-icon"></div>
                        <div className="item-text">
                            <div className="item-title">Buyout has initiated your refund</div>
                            <div className="item-timestamp">
                                23rd Jan, 2025
                            </div>
                        </div>

                    </li>
                    <li className="tl-item">
                        <div className="item-icon"></div>
                        <div className="item-text">
                            <div className="item-title">Your bank has procesed your refund</div>
                            <div className="item-timestamp">
                                23rd Jan, 2025
                            </div>
                        </div>

                    </li>
                    <li className="tl-item  dashed">
                        <div className="item-icon"></div>
                        <div className="item-text">
                            <div className="item-title">Refund creadited to your account</div>
                            <div className="item-timestamp">
                                23rd Jan, 2025
                            </div>
                        </div>

                    </li>
                    <li className="tl-item">
                        <div className="item-icon"></div>
                        <div className="item-text">
                            <div className="item-title">Refund completed</div>
                            <div className="item-timestamp">
                                23rd Jan, 2025
                            </div>
                        </div>

                    </li>

                </ul>

            </div>
        </div>
    );
}

export default TrackPrev;