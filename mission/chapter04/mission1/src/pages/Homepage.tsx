import { Outlet } from 'react-router-dom';
import { Navbar } from '../components/Navbar';
import { useCustomFetch } from '../hooks/useCustomFetch';


const HomePage = () => {
    return (
        <>
            <Navbar />
            <Outlet />
        </>
    );
}

export default HomePage;