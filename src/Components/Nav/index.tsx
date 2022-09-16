import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


const Navigation = () => {
    return (
        <Navbar>
            <Navbar.Brand>
                <img
                    alt=""
                    src="./logo.png"
                    width="40"
                    height="40"
                    className="d-inline-block align-top"
                />
                <h1>Kpelis</h1>
            </Navbar.Brand>
            <Nav>
                <Nav.Link>Publicaciones</Nav.Link>
                <Nav.Link>Recomendaciones</Nav.Link>
            </Nav>
        </Navbar>
    )
}
export { Navigation }