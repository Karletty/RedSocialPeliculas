import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


const Navigation = () => {
    return (
        <Navbar>
            <Navbar.Brand><img
              alt=""
              src="./logo.png"
              width="40"
              height="40"
              className="d-inline-block align-top"
            />{' '}
            Kpelis</Navbar.Brand>
            <Nav className="me-auto">
                <Nav.Link>Posts</Nav.Link>
                <Nav.Link>Recomendations</Nav.Link>
            </Nav>
        </Navbar>
    )
}
export { Navigation }