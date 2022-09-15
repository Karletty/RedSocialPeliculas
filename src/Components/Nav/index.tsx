import { FC } from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

type Props = {
    hideNav?: boolean
}


const Navigation:FC<Props> = ({hideNav}) => {
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
            {!hideNav && 
            <Nav>
                <Nav.Link href='/'>Publicaciones</Nav.Link>
                <Nav.Link href='/recomend'>Recomendaciones</Nav.Link>
            </Nav>}
        </Navbar>
    )
}
export { Navigation }