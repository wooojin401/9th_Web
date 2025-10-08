import { Outlet } from "react-router-dom";
import { Navbar } from './Navbar';

function Layout() {
    return (
        <div>
            <Navbar />
            <main>
                <Outlet /> 
            </main>
            <footer> 푸터 </footer>
        </div>
    );
}

export default Layout;