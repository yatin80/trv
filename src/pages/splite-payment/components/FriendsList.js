import React from 'react';

function FriendsList(props) {
    const { friendData } = props;
    return (
        <div className='friends-list mt-3'>
            {friendData.map((item, index) => (

                <div className={`friend-item ${item.status === 'Paid' ? 'payment-done' : ''}`} key={index}>
                    <div className={`d-flex align-items-start w-100`}>
                        <div className='friend-icon'>
                            <img src={item.img} alt='' className='img-fluid' />
                        </div>
                        <div className=''>
                            <h5 className='friend-name mb-0'>{item.name}</h5>
                            <p className={`payment-status ${item.status === 'Paid' ? 'paid' : 'pending'}`}>{item.status}</p>
                        </div>
                        <div className='trip-amount'>
                            <span className='amount'>₹ {item.amount}</span>
                        </div>
                    </div>
                </div>
            ))}
            
        </div>
    );
}

export default FriendsList;