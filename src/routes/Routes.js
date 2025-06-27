import React, { lazy, Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
// import Dashboard from '../pages/dashboard/Dashboard'
// import Booking from '../pages/booking/Booking'
// import RefundTrack from '../pages/refund-track/RefundTrack'
// import SplitePayment from '../pages/splite-payment/SplitePayment'
import AddExample from '../pages/AddExample'
import Loading from '../components/loading/Loading';

const Dashboard = lazy(() => import('../pages/dashboard/Dashboard'));
const Booking = lazy(() => import('../pages/booking/Booking'));
const SplitePayment = lazy(() => import('../pages/splite-payment/SplitePayment'));
const RefundTrack = lazy(() => import('../pages/refund-track/RefundTrack'));
const Paymet = lazy(() => import('../pages/payment/Payment'));

export default function RoutesNav() {
    return (
        <>
            <Suspense fallback={<Loading />}>
                <Routes>
                    <Route path="/" element={<Dashboard />} />
                    <Route path='/booking' element={<Booking />} />
                    <Route path='/refund-track' element={<RefundTrack />} />
                    <Route path="/Splite-payment" element={<SplitePayment />} />
                    <Route path="example" element={<AddExample />} />
                    <Route path="/payment" element={<Paymet />} />
                    <Route path="*" element={<div>Page not found</div>} />
                </Routes>
            </Suspense>
        </>
    )
}
