import {Nav} from 'react-bootstrap';

function Ciao(props) {
    return <h1>Ciao, {props.name}</h1>
}

const Navigation = (props) => (
    <Nav variant="pills" defaultActiveKey="/">
        <Nav.Item>
            <Nav.Link href="/">Home</Nav.Link>
        </Nav.Item>
        <Nav.Item>
            <Nav.Link href="/projects" eventKey="link-1">Progetti</Nav.Link>
        </Nav.Item>
        <Nav.Item>
            <Nav.Link href="/startups" eventKey="disabled" disabled>
                Startups
            </Nav.Link>
        </Nav.Item>
    </Nav>
);

export default Navigation;