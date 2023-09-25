import './App.css'

import Checkin from './components/checkin/Checkin';
import Clients from './components/clients/Clients';
import Dashboard from './components/dashboard/Dashboard';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Enquiries from './components/enquiries/Enquiries';
import Services from './components/services/Services';
import Quotation from './components/quotation/Quotation';
import Tasks from './components/tasks/Tasks';

function App() {
    const router = createBrowserRouter(
        createRoutesFromElements(
            <>
                <Route path='/' element={<Dashboard />} />
                <Route path='/checkin' element={<Checkin />} />
                <Route path='/enquiries' element={<Enquiries />} />
                <Route path='/clients' element={<Clients />} />
                <Route path='/services' element={<Services />} />
                <Route path='/quotation' element={<Quotation />} />
                <Route path='/tasks' element={<Tasks />} />
            </>
        )
    );

    return (
        <>
            <RouterProvider router={router} />
        </>
    )
}

export default App