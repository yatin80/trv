import { faCheck, faEllipsisH, faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import { Button, Card, Dropdown } from 'react-bootstrap'
import DataTable from 'react-data-table-component'

export default function Booking() {
    const BookingColumns = [
        {
            name: 'Name',
            selector: row => row.name,
        },
        {
            name: 'Package',
            selector: row => row.package,
        },
        {
            name: 'Duration',
            selector: row => row.duration,
        },
        {
            name: 'Date',
            selector: row => row.date,
        },
        {
            name: 'Price',
            selector: row => <span className='text-dark fw-bold'>{row.price}</span>,

        },
        {
            name: 'Status',
            selector: row => {
                let color = '';
                switch (row.status) {
                    case 'Confirmed':
                        color = 'green';
                        break;
                    case 'Pending':
                        color = 'orange';
                        break;
                    case 'Cancelled':
                        color = 'red';
                        break;
                    default:
                        color = 'gray';
                }
                const statusStyle = {
                    color: color,
                    borderRadius: '8px',
                    fontWeight: '500'
                };
                return (
                    <span style={statusStyle}>
                        {row.status}
                    </span>
                );
            },
        },
        {
            name: 'Action',
            right: true,
            cell: (row) => (
                <Dropdown>
                    <Dropdown.Toggle as="button" variant="link" id="dropdown-basic" className='no-caret btn btn-outline-light btn-sm' size='sm'
                        disabled={row.status === 'Confirmed' || row.status === 'Cancelled'}>
                        <FontAwesomeIcon icon={faEllipsisH} className='' />
                    </Dropdown.Toggle>
                    {row.status === 'Pending' && (
                        <Dropdown.Menu>
                            <Dropdown.Item href="#">Approve</Dropdown.Item>
                            <Dropdown.Item href="#">Cancel</Dropdown.Item>
                        </Dropdown.Menu>
                    )}
                </Dropdown>
                // <div className='d-flex gap-2'>
                //     {/* {row.status === 'cancelled' && row.status === 'Confirmed' && (
                //         <Button size='sm' variant='danger' disabled={row.status === 'Cancelled'}>
                //             <FontAwesomeIcon icon={faXmark} className='text-[20px] text-white' />
                //         </Button>
                //     )} */}
                //     {row.status === 'Pending' && (
                //         <>
                //             <Button size='sm' variant='outline-success' disabled={row.status === 'Confirmed'}>
                //                 <FontAwesomeIcon icon={faCheck} className='text-[20px] ' />
                //             </Button>
                //             <Button size='sm' variant='outline-danger'>
                //                 <FontAwesomeIcon icon={faXmark} className='text-[20px]' />
                //             </Button>
                //         </>

                //     )}
                // </div>
            ),
        }
    ];

    const bookingData = [
        {
            id: 1,
            name: 'Shreenagagar Tour',
            package: 'Shreenagagar',
            duration: '606N',
            date: 'Jun 25 - Jun 30',
            price: '$1,200',
            status: 'Confirmed',
        },
        {
            id: 2,
            name: 'Kashmir Tour',
            package: 'KashmirPackage',
            duration: '606N',
            date: 'Jun 25 - Jun 30',
            price: '$1,200',
            status: 'Pending',
        },
        {
            id: 3,
            name: 'Himachal Tour',
            package: 'HimachalPackage',
            duration: '606N',
            date: 'Jun 25 - Jun 30',
            price: '$1,200',
            status: 'Pending',
        },
        {
            id: 4,
            name: 'Sasan Tour',
            package: 'SasanPackage',
            duration: '606N',
            date: 'Jun 25 - Jun 30',
            price: '$1,200',
            status: 'Cancelled',
        },
        {
            id: 5,
            name: 'Shreenagagar Tour',
            package: 'Shreenagagar',
            duration: '606N',
            date: 'Jun 25 - Jun 30',
            price: '$1,200',
            status: 'Confirmed',
        },
    ]
    return (
        <div className="container-fluid">
            <h2 className='page-title'>Booking</h2>
            <Card>
                <Card.Body>
                    <DataTable
                        columns={BookingColumns}
                        data={bookingData}
                    />
                </Card.Body>
            </Card>
        </div>
    )
}
