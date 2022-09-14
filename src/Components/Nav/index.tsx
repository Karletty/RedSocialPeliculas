import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


const Navigation = () => {
    return (
        <Navbar>
            <Navbar.Brand>Kpelis</Navbar.Brand>
            <Nav className="me-auto">
                <Nav.Link><i className="fa-solid fa-house"></i></Nav.Link>
                <Nav.Link>Posts</Nav.Link>
                <Nav.Link>Recomendations</Nav.Link>
            </Nav>
        </Navbar>
    )
}
export { Navigation }