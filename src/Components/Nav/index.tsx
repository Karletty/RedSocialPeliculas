import Nav from "react-bootstrap/Nav";
import { NavLink } from "react-router-dom";


const Navigation = () => {
    return (
        <Nav>
            <NavLink to="/" className="nav-link">Publicaciones</NavLink>
            <NavLink to="/recomend" className="nav-link">Recomendaciones</NavLink>
            <NavLink to="/user" className="justify-end user nav-link">
                <i className="fa-solid fa-user"></i>
            </NavLink>
        </Nav>
    )
}
export { Navigation }