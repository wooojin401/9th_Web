import { Link } from './router/Link';
import { Routes } from './router/Routes';

const Home = () => <div style={{ padding: 24 }}><h1>Home</h1></div>;
const About = () => <div style={{ padding: 24 }}><h1>About</h1></div>;

export default function App() {
  return (
    <div>
      <nav style={{ display: 'flex', gap: 12, padding: 16, borderBottom: '1px solid #eee' }}>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </nav>
      <Routes routes={[
        { path: '/', component: Home },
        { path: '/about', component: About },
      ]} />
    </div>
  );
}
