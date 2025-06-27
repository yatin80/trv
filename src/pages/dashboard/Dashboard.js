import React from 'react'
import './style.scss';
import CardPreview from './components/card-preview/CardPreview'
import { faHome, faDollarSign, faUsers, faClock, faEllipsis, faDollar, faTicket, faUndo } from '@fortawesome/free-solid-svg-icons'
import { Button, Card, Dropdown, Table } from 'react-bootstrap';
import DataTable from 'react-data-table-component';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useNavigate } from 'react-router-dom';
import { Chart } from 'chart.js';
import Barchart from './components/Barchart';
import DongueChart from './components/DongueChart';
import { faHouseUser } from '@fortawesome/free-solid-svg-icons/faHouseUser';


export default function Dashboard() {
  const navigate = useNavigate();

  const handleBookingPage = () => {
    navigate('/booking');
  }

  const prevCardBgColors = ['#4f39f6', '#ff1382', '#ff7b53', '#ffc045'];
  const previewCards = [
    { title: 'New Booking', value: '8,461', icon: faTicket },
    { title: 'Refund', value: '304', icon: faUndo },
    { title: 'New Customer', value: '834', icon: faUsers },
    { title: 'Total Payments', value: '$1,234', icon: faDollar },
  ];

  const BookingColumns = [
    {
      name: 'Name',
      selector: row => row.name,
    },
    {
      name: 'Package',
      selector: row => row.package,
    },
    // {
    //   name: 'Duration',
    //   selector: row => row.duration,
    // },
    {
      name: 'Date',
      selector: row => row.date,
    },
    // {
    //   name: 'Price',
    //   selector: row => row.price,
    // },
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

  const refundColumns = [
    {
      name: 'Name',
      selector: row => row.name,
    },
    {
      name: 'Package',
      selector: row => row.package,
    },
    // {
    //   name: 'Duration',
    //   selector: row => row.duration,
    // },
    // {
    //   name: 'Date',
    //   selector: row => row.date,
    // },
    {
      name: 'Price',
      selector: row => row.price,
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
          // color: 'white',
          // padding: '5px 10px',
          // fontSize: '12px',
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
  ];



  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Sample Bar Chart',
      },
    },
  }



  return (
    <div className="container-fluid">
      <h2 className='page-title'>Dashboard</h2>
      <div className='row g-4'>
        {
          previewCards.map((card, index) => (
            <div className="col-12 col-md-6 col-lg-6 col-xl-3 mb-3" key={index}>
              <CardPreview
                title={card.title}
                value={card.value}
                icon={card.icon}
                bgColor={prevCardBgColors[index]}
              />
            </div>
          ))
        }
      </div>

      <div className='row g-4'>
        <div className="col-12 col-md-12 col-lg-7 mb-4">
          <Card className='h-100'>
            <Card.Header className='d-flex justify-content-between align-items-center'>
              <h3 className='card-title'>Total Payments</h3>
            </Card.Header>
            <Card.Body>
              <Barchart />
            </Card.Body>
          </Card>
        </div>
        <div className="col-12 col-md-12 col-lg-5 mb-4">
          <Card className='h-100'>
            <Card.Header className='d-flex justify-content-between align-items-center'>
              <h3 className='card-title'>Total Refunds</h3>
            </Card.Header>
            <Card.Body>
              <DongueChart />
            </Card.Body>
          </Card>
        </div>
      </div>
      <div className='row g-4 mb-3'>
        <div className="col-12 col-md-12 col-lg-6 mb-3">
          <Card className=''>
            <Card.Header className='d-flex justify-content-between align-items-center'>
              <h3 className='card-title'>Recent Bookings</h3>
              <Button variant="link" size="sm" onClick={handleBookingPage} className='text-decoration-none fw-500'>

                View All
              </Button>
            </Card.Header>
            <Card.Body>
              {/* <h3 className='card-title'>Recent Bookings</h3> */}
              <div style={{ overflowX: 'auto' }}>
                <DataTable
                  columns={BookingColumns}
                  data={bookingData}
                  responsive
                />
              </div>
            </Card.Body>
          </Card>
        </div>
        <div className="col-12 col-md-12 col-lg-6 mb-3">
          <Card className=''>
            <Card.Header className='d-flex justify-content-between align-items-center'>
              <h3 className='card-title'>Refund Payments</h3>
              <Button variant="link" size="sm" className='text-decoration-none fw-500'>

                View All
              </Button>
            </Card.Header>
            <Card.Body>
              <div style={{ overflowX: 'auto' }}>
                <DataTable
                  columns={refundColumns}
                  data={bookingData}
                  responsive
                />
              </div>
            </Card.Body>
          </Card>
        </div>
      </div>

    </div>
  )
}
