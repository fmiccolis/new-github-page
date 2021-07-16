import './App.scss';
import Dispatcher from "./components/Dispatcher";
import Header from "./components/Header";
import Footer from "./components/Footer";
import {Container, Row} from "react-bootstrap";

const App = () => (
    <Container fluid>
        <Row>
            <Header name="diocane" />
            <Dispatcher />
            <Footer />
        </Row>
    </Container>
);

export default App;
