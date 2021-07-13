import { Button } from 'react-bootstrap';

const Header = () => (
    <nav>
        <Button href="/">Home</Button>
        <Button className="btn-danger" href="/projects">Progetti</Button>
        <Button className="btn-secondary" href="/startups">Startups</Button>
    </nav>
);

export default Header;